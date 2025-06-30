import mongoose from "mongoose";

// Esquema da Task no MongoDB
const taskSchema = new mongoose.Schema(
  {
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },
    title: {
      type: String,
      required: true
    },
    description: String,
    status: {
      type: String,
      enum: ["pendente", "enviado", "concluída"],
      default: "pendente"
    },
    dueDate: Date
  },
  {
    timestamps: true
  }
);


// Exporta o modelo
export default mongoose.model("Task", taskSchema);
