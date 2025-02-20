import { UserService } from "./user";
import express from "express";
import { errorHandler } from "./errorHandler";
import { userCreateValidation } from "./types";
import { generateToken } from "./utils";

const app = express();

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
    const token = user.token ? user.token : generateToken();
    UserService.updateUserToken(user, token);
    res.send({
      token,
    });
  } else {
    res.status(403).send({
      message: "Invalid username or password",
    });
  }
});
const port = 3000;
app.listen(port, () => console.log("Server running on port: ", port));