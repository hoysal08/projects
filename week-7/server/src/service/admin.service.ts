import bcrypt from "bcrypt";
import { Admin } from "../modal/admin.modal.js";
import { SystemError } from "../schema/error.schema.js";

const signupAdmin = async (username: string, password: string) => {
  try {
    const saltRounds = Number(process.env.BCRYPT_ROUNDS) || 10;
    const passwordHash = bcrypt.hashSync(password, saltRounds);
    const admin = await Admin.create({ username: username, passwordHash });
    return admin;
  } catch (e: any) {
    //mongo err code for duplicate insert on unique key
    if (e.code === 11000) {
      throw new SystemError("Username already exists", 400);
    }
    throw new SystemError("Internal Server Error", 500);
  }
};

export default {
  signupAdmin,
};
