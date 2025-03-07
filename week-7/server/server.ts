//  TODO: Can you create backend with standard folder structure like: week-4/hard ???
const express = require('express');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const dotenv = require("dotenv");
dotenv.config();
const app = express();

app.use(express.json());

const secret = process.env.JWT_SECRERT;  // This should be in an environment variable in a real application
const port = process.env.PORT;

// Define mongoose schemas
const userSchema = new mongoose.Schema({
  // userSchema here
});

const adminSchema = new mongoose.Schema({
// adminSchema here
});

const courseSchema = new mongoose.Schema({
// courseSchema here
});

// Define mongoose models
const User = mongoose.model('User', userSchema);
const Admin = mongoose.model('Admin', adminSchema);
const Course = mongoose.model('Course', courseSchema);

const authMiddleware = (req: any, res: any, next: any) => {
//  authMiddleware logic here 
};

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/coursify'); 


// Admin routes
app.post('/admin/signup', (req: any, res: any) => {
    // logic to sign up admin
});

app.post('/admin/login', (req: any, res: any) => {
    // logic to log in admin
});

app.post('/admin/courses', (req: any, res: any) => {
    // logic to create a course
});

app.put('/admin/courses/:courseId', (req: any, res: any) => {
    // logic to edit a course
});

app.get('/admin/courses', (req: any, res: any) => {
    // logic to get all courses
});

// User routes
app.post('/users/signup', (req: any, res: any) => {
    // logic to sign up user
});

app.post('/users/login', (req: any, res: any) => {
    // logic to log in user
});

app.get('/users/courses', (req: any, res: any) => {
    // logic to list all courses
});

app.post('/users/courses/:courseId', (req: any, res: any) => {
    // logic to purchase a course
});

app.get('/users/purchasedCourses', (req: any, res: any) => {
    // logic to view purchased courses
});

app.listen(port, () => {
    console.log('Server is listening on port 3000');
});