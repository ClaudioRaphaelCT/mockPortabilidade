const { request } = require("../entities/request/request");
const { responseNOK, responseOk } = require("../entities/response/response");

exports.getPortabilidade = (req, res) => {
    const requestBodyString = JSON.stringify(req.body);
    const requestString = JSON.stringify(request);
  if (requestBodyString === requestString) {
    res.status(200).json(responseOk);
  }
  res.status(400).json(responseNOK);
};
