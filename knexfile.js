const path = require("path");
require("dotenv").config();

const {
  NODE_ENV = "development",
  DEVELOPMENT_DATABASE_URL = "postgres://qrkkvsmg:KTxvDy5jcKyRVkQA2h64AQ5cIyhLMQ1k@salt.db.elephantsql.com/qrkkvsmg",
  PRODUCTION_DATABASE_URL = "postgres://kqiseawp:D8CWmmI3JsJUnDHG0_g3gvgG3EOS7rhT@isilo.db.elephantsql.com/kqiseawp",
} = process.env;
const URL =
    NODE_ENV === "production"
    ? PRODUCTION_DATABASE_URL
    : DEVELOPMENT_DATABASE_URL;

module.exports = {
 production: {
    client: "postgresql",
    connection: URL,
    pool: { min: 0, max: 6 },
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
  },

  development: {
    client: "postgresql",
    connection: URL,
    pool: { min: 0, max: 6 },
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
    useNullAsDefault: false,
  },
};
