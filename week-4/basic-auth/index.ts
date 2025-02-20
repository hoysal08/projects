import express from "express";
import { z } from "zod";
import { errorHandler } from "./errorHandler";
import Database from "better-sqlite3";

const app = express();

const userCreateValidation = z.object({
  username: z.string().min(1).max(30),
  password: z.string().min(1).max(30),
  token: z.union([z.string(), z.null()]).optional(),
});
type User = z.infer<typeof userCreateValidation>;
const users: User[] = [];

const db = new Database("auth.db");
db.pragma("journal_mode = WAL");
db.prepare(
  "CREATE TABLE IF NOT EXISTS user(username CHAR(50) PRIMARY KEY NOT NULL, password CHAR(50) NOT NULL,token CHAR(32) )"
).run();

app.use(express.json());

function generateToken() {
  let options = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
  ];

  let token = "";
  for (let i = 0; i < 32; i++) {
    // use a simple function here
    token += options[Math.floor(Math.random() * options.length)];
  }
  return token;
}

app.post("/signup", (req, res) => {
  const requestedUser = userCreateValidation.parse(req.body);
  const username = requestedUser.username;
  const password = requestedUser.password;
  // const user = users.find((user) => user.username === username);

  const user = db
    .prepare("SELECT * FROM user where username=@username")
    .get({ username });

  if (user) {
    res.status(500).send({
      message: "You're already signed up",
    });
  } else {
    const insertUser = db.prepare(
      "INSERT INTO user(username, password) VALUES (@username, @password)"
    );
    insertUser.run({ username, password });
    users.push({
      username,
      password,
    });
    res.send({
      message: "You have signed up",
    });
  }
});

app.post("/signin", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  // const user = users.find(
  //   (user) => user.username === username && user.password === password
  // );

  let requestedUser = db
    .prepare(
      "SELECT * FROM user where username=@username AND password=@password"
    )
    .get({ username, password });
  const user = userCreateValidation.parse(requestedUser);
  if (user) {
    const token = user.token ? user.token : generateToken();
    user.token = token;
    db.prepare("UPDATE user SET token=@token where username=@username ").run({
      username: user.username,
      token,
    });
    res.send({
      token,
    });
  } else {
    res.status(403).send({
      message: "Invalid username or password",
    });
  }
});

app.use(errorHandler);
app.listen(3000, () => console.log("Server running on port 3000"));
