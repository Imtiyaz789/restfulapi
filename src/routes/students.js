import express from 'express';
const router = express.Router();
import { createStudents, displayStudents, student, updateStudent, deleteStudent } from '../controller/studentController.js';



// this is async-await method to post APIs data
router.post("/", createStudents);

// here we are showing our data in APIs
router.get("/", displayStudents);

// individual student data
router.get("/:id", student);

// update students data using its id
router.patch("/:id", updateStudent);

// delete students data using its id
router.delete("/:id", deleteStudent);

export default router;