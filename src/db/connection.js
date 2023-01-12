const environment = process.env.NODE_ENV || "development" || "https://3.134.238.10";
const config = require("../../knexfile")[environment];
const knex = require("knex")(config);

module.exports = knex;
