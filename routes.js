const express = require("express");
const { createSurvey, updateSurvey, getSurvey } = require("./controller");

const api = express.Router();

api
  .route("/api/:id")
  .get(getSurvey)
  .put(updateSurvey);
api.route("/api").post(createSurvey);

module.exports = api;
