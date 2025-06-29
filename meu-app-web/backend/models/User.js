import mongoose from "mongoose";
import bcrypt from "bcryptjs";

//estrutura do usuário
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  birthDate: { type: Date },
  cpf: { type: String },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

// Antes de salvar o usuário, criptografa a senha
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next(); // só se a senha foi alterada
  this.password = await bcrypt.hash(this.password, 10); // 10 = salt rounds
  next();
});

// Método para comparar senha digitada com a senha salva
userSchema.methods.matchPassword = function (senhaDigitada) {
  return bcrypt.compare(senhaDigitada, this.password);
};

// Exporta o modelo
export default mongoose.model("User", userSchema);
