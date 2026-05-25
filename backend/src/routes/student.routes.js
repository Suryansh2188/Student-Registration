import express from "express";

import {
  registerStudent,
  getStudents,
  updateStudent,
  deleteStudent
} from "../controllers/student.controller.js";

const router = express.Router();

router.post("/", registerStudent);
router.get("/", getStudents);
router.put("/:id", updateStudent);
router.delete("/:id", deleteStudent);

export default router;