const mongoose = require("./db-connector");

var questionSchema = new mongoose.Schema({
  yes: { type: Number, default: 0 },
  no: { type: Number, default: 0 },
  question: String
});
var surveySchema = new mongoose.Schema({
  questions: [questionSchema]
});

var Survey = mongoose.model("Bot-Conversation", surveySchema);

module.exports = Survey;
