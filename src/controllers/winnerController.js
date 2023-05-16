const winnerService = require("../services/winnerService");

const getAllWinners = async (req, res) => {
  const { nombre } = req.query;
  try {
    const allWinners = await winnerService.getAllWinners({ nombre });
    res.status(200).send({ status: "OK", data: allWinners });
  } catch (error) {
    res.status(error?.status || 500).send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const getOneWinner = (req, res) => {
  const {
    params: { winnerId },
  } = req;
  if (!winnerId) {
    res.status(400).send({
      status: "FAILED",
      data: { error: "Parameter ':winnerId' can not be empty" },
    });
  }
  try {
    const winner = winnerService.getOneWinner(winnerId);
    res.send({ status: "OK", data: winner });
  } catch (error) {
    res.status(error?.status || 500).send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const createNewWinner = (req, res) => {
  const { body } = req;
  if (!body.nombre) {
    res.status(400).send({
      status: "FAILED",
      data: {
        error: "The following keys is missing or is empty in request body: 'name'",
      },
    });
    return;
  }
  const newWinner = {
    nombre: body.nombre,
  };
  try {
    const createdWinner = winnerService.createNewWinner(newWinner);
    res.status(201).send({ status: "OK", data: createdWinner });
  } catch (error) {
    res.status(error?.status || 500).send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const updateOneWinner = (req, res) => {
  const {
    body,
    params: { winnerId },
  } = req;
  if (!winnerId) {
    res.status(400).send({
      status: "FAILED",
      data: { error: "Parameter ':winnerId' can not be empty" },
    });
  }
  try {
    const updatedWinner = winnerService.updateOneWinner(winnerId, body);
    res.send({ status: "OK", data: updatedWinner });
  } catch (error) {
    res.status(error?.status || 500).send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const deleteOneWinner = (req, res) => {
  const {
    params: { winnerId },
  } = req;
  if (!winnerId) {
    res.status(400).send({
      status: "FAILED",
      data: { error: "Parameter ':winnerId' can not be empty" },
    });
  }
  try {
    const deletedWinner = winnerService.deleteOneWinner(winnerId);
    res.status(204).send({ status: "OK", data: deletedWinner });
  } catch (error) {
    res.status(error?.status || 500).send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

module.exports = {
  getAllWinners,
  getOneWinner,
  createNewWinner,
  updateOneWinner,
  deleteOneWinner,
};
