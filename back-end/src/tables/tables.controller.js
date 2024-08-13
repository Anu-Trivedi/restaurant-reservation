const service = require("./tables.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");
const hasProperties = require("../errors/hasProperties");

// RESTful API Functions
async function list(req, res, next) {
  res.status(200).json({ data: await service.list() });
}

async function create(req, res, next) {
  res.status(201).json({ data: await service.create(req.body.data) });
}

module.exports = {
  list: asyncErrorBoundary(list),
  create: [asyncErrorBoundary(create)],
};
