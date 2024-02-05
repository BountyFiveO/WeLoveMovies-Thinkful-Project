if (process.env.USER) require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const reviewsRouter = require("./reviews/reviews.router");
const moviesRouter = require("./movies/movies.router");
const theatersRouter = require("./theaters/theaters.router");
// const errorHandler = require("./Errors/errorHandler");
// const notFound = require("./Errors/notFound");

app.use(cors());
app.use(express.json());
const pool = require('./db');

app.use("/movies", moviesRouter);
app.use("/reviews", reviewsRouter);
app.use("/theaters", theatersRouter)

// Not found handler
app.use((request, _response, next) => {
    next({ status: 404, message: `Not found: ${request.originalUrl}` });
   // next({ status: 404, message: `${notFound}` });
  });
  
  // Error handler
  app.use((error, _request, response, _next) => {
    console.error(error);
    const { status = 500, message = "Something went wrong!" } = error;
    response.status(status).json({ error: message });
  });

module.exports = app;
