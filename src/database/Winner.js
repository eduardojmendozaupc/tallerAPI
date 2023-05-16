const { connection } = require("./config.db");

/**
 * @openapi
 * components:
 *   schemas:
 *     Winner:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           example: 61dbae02-c147-4e28-863c-db7bd402b2d6
 *         name:
 *           type: string
 *           example: X
 *         date:
 *           type: string
 *           example: 14/05/2023
 *         updatedAt:
 *           type: string
 *           example: 4/20/2022, 2:21:56 PM
 */

const getAllWinners = (filterParams) => {
  return new Promise((resolve, reject) => {
    let query = "SELECT * FROM winners";
    if (filterParams.name) {
      query += " where nombre='" + filterParams.name + "'";
    }
    console.log(query);
    connection.query(query, (error, results) => {
      if (error) reject({ status: 500, message: error });
      resolve(Object.values(JSON.parse(JSON.stringify(results))));
    });
  });
};

const getOneWinner = (winnerId) => {};

const createNewWinner = (newWinner) => {};

const updateOneWinner = (winnerId, changes) => {};

const deleteOneWinner = (winnerId) => {};

module.exports = { getAllWinners, createNewWinner, getOneWinner, deleteOneWinner, updateOneWinner };
