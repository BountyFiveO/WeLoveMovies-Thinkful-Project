// db.js
import { Pool } from 'pg-pool';
import dotenv from 'dotenv';

dotenv.config();
const { DATABASE_URL } = process.env;
const pool = new Pool({ 
    connectionString: DATABASE_URL, 
    max: 10, // set this to the maximum number of connections allowed by ElephantSQL

});

// const pool = new Pool({
//   host: 'hostname',
//   user: 'username',
//   password: 'password',
//   database: 'database',
//   max: 10, // set this to the maximum number of connections allowed by ElephantSQL
// });
module.exports = pool;
