const knex = require("../db/connection");

function list() {
    return knex("movies")
    .select(
      "movie_id",
      "title",
      "runtime_in_minutes",
      "rating",
      "description",
      "image_url",
      )
}

function read(movieId) {
    return knex("movies")
    .where({movie_id: movieId}).first();
}

function getCritics(criticId) {
  return knex("critics")
  .where({ critic_id: criticId });
}

function listShowing() {
    return knex("movies as m")
      .join("movies_theaters as mt", "mt.movie_id", "m.movie_id")
      .select(
      "m.movie_id",
      "m.title",
      "m.runtime_in_minutes",
      "m.rating",
      "m.description",
      "m.image_url",
      )
      .where({ "mt.is_showing": true })
      .groupBy("m.movie_id")
  }

  function listReviews(movieId) {
    return knex("movies as m")
      .join("reviews as r", "m.movie_id", "r.movie_id")
      .where({ "m.movie_id": movieId });
  }

  function listTheaters(movieId) {
    return knex("movies as m")
      .join("movies_theaters as mt", "mt.movie_id", "m.movie_id")
      .join("theaters as t", "t.theater_id", "mt.theater_id")
      .select("t.*", "m.movie_id")
      .where({ "m.movie_id": movieId });
  }

  module.exports = {
    list,
    read,
    getCritics,
    listShowing,
    listReviews,
    listTheaters,
  }