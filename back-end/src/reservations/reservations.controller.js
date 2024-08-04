const service = require("./reservations.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

// RESTful API Functions

/**
 * List handler for reservation resources
 */
async function list(req, res) {
  const { date } = req.query;
  const { mobile_number } = req.query;
  let data;

  if (date) {
    data = await service.listByDate(date);
  }
  
  res.json({ data });
}

async function create(req, res) {
  res.status(201).json({ data: await service.create(req.body.data) });
}

module.exports = {
  list: asyncErrorBoundary(list),
  create: asyncErrorBoundary(create),
};
