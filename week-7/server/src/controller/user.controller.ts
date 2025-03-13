import { Router } from "express";
const userRouter = Router();
// User routes
userRouter.post('/users/signup', (req: any, res: any) => {
    // logic to sign up user
});

userRouter.post('/users/login', (req: any, res: any) => {
    // logic to log in user
});

userRouter.get('/users/courses', (req: any, res: any) => {
    // logic to list all courses
});

userRouter.post('/users/courses/:courseId', (req: any, res: any) => {
    // logic to purchase a course
});

userRouter.get('/users/purchasedCourses', (req: any, res: any) => {
    // logic to view purchased courses
});

export default userRouter