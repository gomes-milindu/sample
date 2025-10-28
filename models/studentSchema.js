import express from 'express';
const studentSchema = new express.Schema({
    name: String,
    age: Number,
    grade: String
}); 

const Student = express.model('Student', studentSchema);

export default Student;