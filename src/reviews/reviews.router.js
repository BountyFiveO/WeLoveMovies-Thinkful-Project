const router = require("express").Router();
const controller = require("./reviews.controller");
const methodNotAllowed = require("../Errors/methodNotAllowed");

router
  .route("/")
  .get(controller.list)
  .all(methodNotAllowed);

router
  .route("/:reviewId")
  .put(controller.update)
  .delete(controller.destroy)
  .all(methodNotAllowed);

  

module.exports = router;