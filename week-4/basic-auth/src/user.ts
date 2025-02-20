import { DB } from "./db";
import { User } from "./types";
const db = DB();

export const UserService = {
  insertUser: (username: string, password: string) => {
    const insertUser = db.prepare(
      "INSERT INTO user(username, password) VALUES (@username, @password)"
    );
    insertUser.run({ username, password });
  },

  updateUserToken: (user: User, token: string) => {
    db.prepare("UPDATE user SET token=@token where username=@username ").run({
      username: user.username,
      token,
    });
  },

  getUserByUsername: (username: string) => {
    return db
      .prepare("SELECT * FROM user where username=@username")
      .get({ username });
  },

  getUserByUsernameAndPassword: (username: string, password: string) => {
    return db
      .prepare(
        "SELECT * FROM user where username=@username AND password=@password"
      )
      .get({ username, password });
  },

  getUserByToken: (token: string) => {
    return db.prepare("SELECT * FROM user where token=@token").get({ token });
  },
};
