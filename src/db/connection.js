const environment = process.env.NODE_ENV || "production";
const config = require("../../knexfile")[environment];
const knex = require("knex")(config);

export default knex;


