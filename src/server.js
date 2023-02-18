import { PORT } from 'process.env';
import app from './app.js';
import knex from './db/connection.js';

const PORT = 5001;

const listener = () => console.log(`Listening on Port ${PORT}!`);

knex.migrate
  .latest()
  .then((migrations) => {
    console.log("migrations", migrations);
    app.listen(PORT, listener);
  })
  .catch(console.error);
