const Survey = require("./model");
const {returnResponse} = require("./utils/response");

module.exports.createSurvey = async (req, res) => {
  const response = returnResponse(201);
  try {
    const survey = req.body;
    response.data = await Survey.create(survey);
  } catch (err) {
    response.error = err.message;
    response.status = 500;
  }
  res.status(response.status).json(response);
};

module.exports.updateSurvey = async (req, res) => {
  const response = returnResponse(200);
  try {
    const { id } = req.params;
    const updatedSurvey = req.body;
    await Survey.updateOne({ _id: id }, updatedSurvey);
  } catch (err) {
    response.error = err.message;
    response.status = 400;
  }
  res.status(response.status).json(response);
};

module.exports.getSurvey = async (req, res) => {
  const response = returnResponse(200);
  try {
    const { id } = req.params;
    response.data = await Survey.findById(id);
    if (response.data === null) {
      response.data = {};
      response.error = `No document for id:${id}`;
      response.status = 400;
    }
  } catch (err) {
    response.error = err.message;
    response.status = 500;
  }
  res.status(response.status).json(response);
};
