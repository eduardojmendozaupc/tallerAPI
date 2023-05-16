const { v4: uuid } = require("uuid");
const Winner = require("../database/Winner");

const getAllWinners = async (filterParams) => {
  try {
    const allWinners = await Winner.getAllWinners(filterParams);
    return allWinners;
  } catch (error) {
    throw error;
  }
};

const getOneWinner = (winnerId) => {
  try {
    const winner = Winner.getOneWinner(winnerId);
    return winner;
  } catch (error) {
    throw error;
  }
};

const createNewWinner = (newWinner) => {
  const winnerToInsert = {
    ...newWinner,
    id: uuid(),
    fecha: new Date().toLocaleString("en-US", { timeZone: "America/Bogota" }),
    actualizado: new Date().toLocaleString("en-US", { timeZone: "America/Bogota" }),
  };

  try {
    const createdWinner = Winner.createNewWinner(winnerToInsert);
    return createdWinner;
  } catch (error) {
    throw error;
  }
};

const updateOneWinner = (winnerId, changes) => {
  try {
    const updatedWinner = Winner.updateOneWinner(winnerId, changes);
    return updatedWinner;
  } catch (error) {
    throw error;
  }
};

const deleteOneWinner = (winnerId) => {
  try {
    const deletedWinner = Winner.deleteOneWinner(winnerId);
    return deletedWinner;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAllWinners,
  getOneWinner,
  createNewWinner,
  updateOneWinner,
  deleteOneWinner,
};
