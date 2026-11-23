import express from "express"
const router = express.Router()

import {todoCheck} from "../controllers/todo.controller.js"
router.get("/", todoCheck)

export default router