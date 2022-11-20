import express from "express";
import './db/conn.js';
const app = express();
import studentRoutes from "./routes/students.js";
import appointRoutes from "./routes/appointments.js";
const port = process.env.PORT || 3000;

// use this express function for encoded or initializing our data as object
app.use(express.json());
app.use('/students', studentRoutes);
app.use('/appoints', appointRoutes);

app.listen(port, () => {
    console.log(`Server is running at port : ${port}`);
});