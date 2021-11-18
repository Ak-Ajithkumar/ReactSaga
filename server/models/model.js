import mongoose from "mongoose";

const todosSchema = mongoose.Schema({
  id: Number,
  value: String,
  dateValue: String,
  statusValue: String,
});
const TodosModel = mongoose.model("task", todosSchema);

export default TodosModel;
