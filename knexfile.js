// import { join } from "path";
// require("dotenv").config();

require("dotenv.development").config();
require("dotenv.production").config();

const {
    DEVELOPMENT_DATABASE_URL,
    PRODUCTION_DATABASE_URL,
  } = process.env;


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
