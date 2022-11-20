import mongoose from 'mongoose';
// import isEmail from 'validator';

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: [true, "Email id is already present"],
        // validate(value) {
        //     if (!isEmail(value)) {
        //         throw new Error("Invalid Email")
        //     }
        // }
    },
    phone: {
        type: String,
        min: 10,
        required: true,
        unique: true
    },
    address: {
        type: String,
        required: true
    },
    appoints: { type: [String] }
});
const Student = new mongoose.model('Student', studentSchema);
export default Student;