import { Router } from "express";
const adminRouter = Router();

adminRouter.post('/admin/signup', (req: any, res: any) => {
    // logic to sign up admin
});

adminRouter.post('/admin/login', (req: any, res: any) => {
    // logic to log in admin
});

adminRouter.post('/admin/courses', (req: any, res: any) => {
    // logic to create a course
});

adminRouter.put('/admin/courses/:courseId', (req: any, res: any) => {
    // logic to edit a course
});

adminRouter.get('/admin/courses', (req: any, res: any) => {
    // logic to get all courses
});

export default adminRouter