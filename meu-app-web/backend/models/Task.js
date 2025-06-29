// models/Task.js
import mongoose from "mongoose";

// Schema define a “forma” do documento Task dentro do MongoDB
const taskSchema = new mongoose.Schema(
  {
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",          // faz relação com o modelo User
      required: true
    },
    title: {
      type: String,
      required: true
    },
    description: String,     // opcional
    status: {
      type: String,
      enum: ["pendente", "em_andamento", "concluida", "atrasada"],
      default: "pendente"
    },
    dueDate: Date            // data de conclusão esperada
  },
  {
    timestamps: true         // cria automaticamente createdAt e updatedAt
  }
);

// Exporta o modelo para ser usado nos controllers
export default mongoose.model("Task", taskSchema);
