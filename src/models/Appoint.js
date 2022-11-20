import mongoose from 'mongoose'

const appointSchema = new mongoose.Schema({
    type: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        required: true,
        default: false
    }
})

const Appointments = new mongoose.model("Appoint", appointSchema)
export default Appointments