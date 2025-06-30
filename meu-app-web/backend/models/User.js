import mongoose from "mongoose";
import bcrypt from "bcryptjs";

// Esquema do Usuário
const userSchema = new mongoose.Schema(
  {
    name:       { type: String, required: true },
    birthDate:  { type: Date },
    cpf:        { type: String },
    email:      { type: String, required: true, unique: true },
    password:   { type: String, required: true, select: false }  // select:false para não vir por padrão
  },
  { timestamps: true } // cria createdAt / updatedAt
);

// Hash da senha antes de salvar (somente se for modificada)
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10); // 10 salt rounds
  next();
});

// Compara a senha digitada com o hash salvo
userSchema.methods.matchPassword = function (senhaDigitada) {
  return bcrypt.compare(senhaDigitada, this.password);
};

// Exporta o modelo
export default mongoose.model("User", userSchema);
