import mongoose from "mongoose";

const TodoSchema = new mongoose.Schema({
  task: {
    type: String,
    required: true,
  },
  complete: {
    type: Boolean,
    default: false,
  },
  completeTime: {
    type: Number,
  },
  creationTime: {
    type: Number,
    required: true,
  },
});

export default mongoose.models.Todos || mongoose.model("Todos", TodoSchema);
