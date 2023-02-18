const { PORT = 5001 } = process.env;
import { listen } from "./app.js";
import { migrate } from "./db/connection.js";
const listener = () => console.log(`Listening on Port ${PORT}!`);
migrate
  .latest()
  .then((migrations) => {
    console.log("migrations", migrations);
    listen(PORT, listener);
  })
  .catch(console.error);
