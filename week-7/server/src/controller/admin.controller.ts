import { Router } from "express";
import validate from "../middleware/validateRequest.middleware.js";
import { adminAuthRequest, adminEntitySchema } from "../schema/admin.schema.js";
import adminService from "../service/admin.service.js";

const adminRouter = Router();

adminRouter.post(
  "/signup",
  validate(adminAuthRequest),
  async (req: any, res: any, next: any) => {
    try {
      console.log(req.body);
      const admin = await adminService.signupAdmin(
        req.body.username,
        req.body.password
      );
      const parsedAdmin = adminEntitySchema.safeParse(admin);
      if (!parsedAdmin.success) {
        return res.status(500).json({
          username: null,
          message: "Admin creation failed",
          success: false,
        });
      }
      return res.status(200).json({
        username: parsedAdmin.data.username,
        message: "Admin created successfully",
        success: true,
      });
    } catch (e: any) {
      next({status: e.status, message: e.message})
      // res.status(400).json({ errors: e.errors, success: false });
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
