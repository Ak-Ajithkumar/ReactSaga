import express from "express";
import { addTodo, deleteTodo, getTodos, updateTodo } from "../controllers/todos.js";
const router = express.Router();


router.get("/", getTodos);
router.post("/", addTodo);
router.delete("/:id", deleteTodo);
router.put("/:id",updateTodo)


export default router;
