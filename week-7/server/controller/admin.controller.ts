import { Router } from "express";
import validate from "../middleware/validateRequest.middleware";
import { adminAuthRequest } from "../schema/user.schema";
import { Admin } from "../modal/admin.modal";
import bcrypt from "bcrypt"

const adminRouter = Router();

adminRouter.post(
  "/signup",
  validate(adminAuthRequest),
  async (req: any, res: any) => {
    try {
    const reqBody = req.body 
    //hash and store the admin dets
    // return success and error accordingly 
    const admin = new Admin({
        
    })
    } catch (e: any) {
      res.status(400).json({ errors: e.errors });
    }
  }
);

adminRouter.post("/login", (req: any, res: any) => {
  // logic to log in admin
});

adminRouter.post("/courses", (req: any, res: any) => {
  // logic to create a course
});

adminRouter.put("/courses/:courseId", (req: any, res: any) => {
  // logic to edit a course
});

adminRouter.get("/courses", (req: any, res: any) => {
  // logic to get all courses
});

export default adminRouter;
