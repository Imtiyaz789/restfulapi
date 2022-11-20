import mongoose from 'mongoose';

mongoose.connect("mongodb://localhost/students_db", {
    useCreateIndex: true,
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false
}).then(() => {
    console.log("MongoDB is connected Successfully")
}).catch((e) => {
    console.log("No Connection")
});