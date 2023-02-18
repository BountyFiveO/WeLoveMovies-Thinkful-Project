if (process.env.USER) require("dotenv").config();
const cors = require("cors");
const express = require("express");
const app = express();
const reviewsRouter = require("./reviews/reviews.router");
const moviesRouter = require("./movies/movies.router");
const theatersRouter = require("./theaters/theaters.router");
const errorHandler = require("./Errors/errorHandler");
const notFound = require("./Errors/notFound");

app.use(cors());
app.use(express.json());
const pool = require('./db');

app.use("/movies", moviesRouter);
app.use("/reviews", reviewsRouter);
app.use("/theaters", theatersRouter)

app.use(errorHandler);
app.use(notFound);

module.exports = app;
