import express from 'express';
const router = express.Router();
import { createAppoint, deleteAppoints, updateAppoints, viewAppoint, viewAppoints } from '../controller/appointController.js';



// this is async-await method to post APIs data
router.post("/:userId", createAppoint);
// update students data using its id
router.put("/:id", updateAppoints);
// delete students data using its id
router.delete("/:userId/:id", deleteAppoints);

// here we are showing our data in APIs
router.get("/", viewAppoints);

// individual student data
router.get("/:id", viewAppoint);



export default router;