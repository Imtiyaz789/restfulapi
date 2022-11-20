// const express = require('express')
// const Student = require("../models/students.js");
// const Appointments = require('../models/Appoint')
import express from 'express'
import Student from '../models/students.js'
import Appointments from '../models/Appoint.js'


export const createAppoint = async (req, res) => {
    const userId = req.params.userId
    const newAppoint = new Appointments(req.body)

    try {
        const savedAppoint = await newAppoint.save()
        await Student.findByIdAndUpdate(userId, { $push: { appoints: savedAppoint._id } })
        res.status(200).json(savedAppoint)
        console.log("appointments created")
    } catch (error) {
        res.status(401).json({ message: "Error in creating appointment" })
        console.log(error)
    }

}


export const viewAppoints = async (req, res) => {
    try {
        const viewAppoint = await Appointments.find()
        // await Student.findByIdAndUpdate
        res.status(200).json(viewAppoint)
    } catch (error) {
        res.status(401).json({ message: "No Appointment Found" })
    }

}

export const viewAppoint = async (req, res) => {
    try {
        const userId = req.params.appointId
        const Appoint = await Appointments.find(userId)
        // await Student.findByIdAndUpdate
        res.status(200).json(Appoint)
    } catch (error) {
        res.status(401).json({ message: "No Appointment Found" })
    }

}

export const updateAppoints = async (req, res) => {
    try {
        // const appointId = req.params.appointId
        const updatedAppoint = await Appointments.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
        // await Student.findByIdAndUpdate
        res.status(200).json(updatedAppoint)
    } catch (error) {
        res.status(401).json({ message: "Appointment updated successfully" })
    }

}

export const deleteAppoints = async (req, res) => {
    const userId = req.params.userId
    try {

        // const deletedAppoint = await Appointments.find()
        await Appointments.findByIdAndDelete(req.params.id)
        await Student.findByIdAndUpdate(userId, { $pull: { appoints: req.params.id } })
        res.status(200).json({ message: "Appointment has been deleted" })
    } catch (error) {
        res.status(401).json({ message: "Cannot delete this appointment" })
    }

}


export default {
    viewAppoints,
    createAppoint,
    deleteAppoints,
    updateAppoints,
    viewAppoint
}