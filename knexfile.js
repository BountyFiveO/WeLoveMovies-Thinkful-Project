const path = require("path");

require("dotenv").config();

const {
  DATABASE_URL = "postgres://kqiseawp:x5WqjQGUGzNRdu9Cx3eN04qNepegg3j1@isilo.db.elephantsql.com/kqiseawp",
  DEVELOPMENT_DATABASE_URL = "postgres://kqiseawp:x5WqjQGUGzNRdu9Cx3eN04qNepegg3j1@isilo.db.elephantsql.com/kqiseawp",
} = process.env;

module.exports = {
  development: {
    client: "postgresql",
    connection: DATABASE_URL,
    pool: { min: 0, max: 5 },
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
  },

  production: {
    client: "postgresql",
    connection: DATABASE_URL,
    pool: { min: 0, max: 5 },
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
  },

  test: {
    client: "sqlite3",
    connection: {
      filename: ":memory:",
    },
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
    useNullAsDefault: true,
  },
};
