import { UserService } from "./user";
import express from "express";
import { errorHandler } from "./errorHandler";
import { authSchema, userCreateValidation } from "./types";
import jwt from "jsonwebtoken";
import { auth } from "./auth";

const app = express();
export const JWT_SECRET = "USER_APP";
app.use(express.json());
app.use(errorHandler);

app.post("/signup", (req, res) => {
  const requestedUser = userCreateValidation.parse(req.body);
  const { username, password } = { ...requestedUser };
  const user = UserService.getUserByUsername(username);

  if (user) {
    res.status(500).send({
      message: "You're already signed up",
    });
    return;
  }
  UserService.insertUser(username, password);
  res.send({
    message: "You have signed up",
  });
});

app.post("/signin", (req, res) => {
  const { username, password } = { ...req.body };
  let requestedUser = UserService.getUserByUsernameAndPassword(
    username,
    password
  );

  if (!requestedUser) {
    res.status(401).json({ error: "Invalid credentials" });
    return;
  }

  const user = userCreateValidation.parse(requestedUser);
  if (user) {
    const token = user.token
      ? user.token
      : jwt.sign(
          {
            username: user.username,
          },
          JWT_SECRET
        );
    UserService.updateUserToken(user, token);
    res.cookie("token", token);
    res.send({
      token,
    });
  } else {
    res.status(403).send({
      message: "Invalid username or password",
    });
  }
});

app.get("/me", auth, (req, res) => {
  try {
    const token = authSchema.parse(req.headers.authorization);
    const user = userCreateValidation.parse(UserService.getUserByToken(token));
    res.status(200).json(user);
  } catch (err) {
    res.status(401).json({ error: "Unauthorized" });
    return;
  }
});
const port = 3000;
app.listen(port, () => console.log("Server running on port: ", port));
