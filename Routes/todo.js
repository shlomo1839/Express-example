import express from 'express'
import { getTodos, getTodoBYId, updatToDo, createToDo, deleteToDo } from "...controllers/todo.js"

const router = express.Router();

router.route("/")
    .get(getTodos)
    .post(createToDo)
router.route("/:id")
    .get(getTodoBYId)
    .put(updatToDo)
    .delete(deleteToDo)

export default router;