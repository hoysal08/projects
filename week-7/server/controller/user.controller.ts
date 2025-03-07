import { Router } from "express";
const adminRouter = Router();
// User routes
adminRouter.post('/users/signup', (req: any, res: any) => {
    // logic to sign up user
});

adminRouter.post('/users/login', (req: any, res: any) => {
    // logic to log in user
});

adminRouter.get('/users/courses', (req: any, res: any) => {
    // logic to list all courses
});

adminRouter.post('/users/courses/:courseId', (req: any, res: any) => {
    // logic to purchase a course
});

adminRouter.get('/users/purchasedCourses', (req: any, res: any) => {
    // logic to view purchased courses
});

export default adminRouter