import { join } from "path";
require("dotenv").config();

// make a variable for the database url for both production and development
const PRODUCTION_DATABASE_URL = process.env.DATABASE_URL;
const DEVELOPMENT_DATABASE_URL = process.env.DATABASE_URL;


// const URL =
//     NODE_ENV === "production" ? PRODUCTION_DATABASE_URL : DEVELOPMENT_DATABASE_URL;
export const production = {
  client: "postgresql",
  connection: PRODUCTION_DATABASE_URL,
  pool: { min: 0, max: 5 },
  migrations: {
    directory: join(__dirname, "src", "db", "migrations"),
  },
  seeds: {
    directory: join(__dirname, "src", "db", "seeds"),
  },
};
export const development = {
  client: "postgresql",
  connection: DEVELOPMENT_DATABASE_URL,
  pool: { min: 0, max: 5 },
  migrations: {
    directory: join(__dirname, "src", "db", "migrations"),
  },
  seeds: {
    directory: join(__dirname, "src", "db", "seeds"),
  },
};
export const test = {
  client: "sqlite3",
  connection: {
    filename: ":memory:",
  },
  migrations: {
    directory: join(__dirname, "src", "db", "migrations"),
  },
  seeds: {
    directory: join(__dirname, "src", "db", "seeds"),
  },
  useNullAsDefault: false,
};
