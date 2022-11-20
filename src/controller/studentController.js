import express from 'express';
import Student from '../models/students.js';

export async function createStudents(req, res) {
    try {
        const user = new Student(req.body);
        const createUser = await user.save();
        res.status(201).send(createUser);
        console.log("Student Created")
    } catch (e) {
        res.status(400).send(e);
    }
}

export async function displayStudents(req, res) {
    try {
        const studentsData = await Student.find();
        res.send(studentsData);

    } catch (e) {
        res.send(e);
    }
}
export async function student(req, res) {
    try {
        const _id = req.params.id;
        const studentData = await Student.findById(_id);
        console.log(studentData);
        if (!studentData) {
            return res.status(404).send();
        } else {
            res.send(studentData);
        }
    } catch (e) {
        res.status(500).send(e);
    }
}
export async function updateStudent(req, res) {
    try {
        const _id = req.params.id;
        const updateStudents = await Student.findByIdAndUpdate(_id, { $set: req.body }, { new: true });
        res.send(updateStudents);
        console.log("Student Updated")
    } catch (e) {
        res.status(404).send(e);
    }

}
export async function deleteStudent(req, res) {
    try {
        const deleteStudents = await Student.findByIdAndDelete(req.params.id);
        if (!deleteStudents) {
            res.status(400).send();
        }
        res.send(deleteStudents);
        console.log("Student Deleted")
    } catch (e) {
        res.status(500).send(e);
    }
}

export default {
    deleteStudent,
    updateStudent,
    student,
    displayStudents,
    createStudents
}