import Database from "better-sqlite3";
import type { Database as DatabaseType } from "better-sqlite3";
import path from "path";

let dbInstance: DatabaseType | null = null;

export const DB = () => {
  if (!dbInstance) {
    const dbPath = path.resolve(__dirname, "../db/auth.db")
    dbInstance = new Database(dbPath);
    dbInstance.pragma("journal_mode = WAL");
    dbInstance.prepare(
      "CREATE TABLE IF NOT EXISTS user(username CHAR(50) PRIMARY KEY NOT NULL, password CHAR(50) NOT NULL, token CHAR(32))"
    ).run();
  }
  return dbInstance;
};

