// In src/v1/routes/workoutRoutes.js
const express = require("express");
const apicache = require("apicache");

const winnerController = require("../../controllers/winnerController");

const router = express.Router();

const cache = apicache.middleware;

/**
 * @openapi
 * /api/v1/winners:
 *   get:
 *     tags:
 *       - Winners
 *     parameters:
 *       - in: query
 *         name: name
 *         schema:
 *           type: string
 *         description: The name of the winner
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: "#/components/schemas/Winner"
 *       5XX:
 *         description: FAILED
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: FAILED
 *                 data:
 *                   type: object
 *                   properties:
 *                     error:
 *                       type: string
 *                       example: "Some error message"
 */
router.get("/", cache("2 minutes"), winnerController.getAllWinners);
/**
 * @openapi
 * /api/v1/winners/:winnerId:
 *   get:
 *     tags:
 *       - Winners
 *     parameters:
 *       - in: query
 *         name: winnerId
 *         schema:
 *           type: string
 *         description: The Id of the winner you want to get.
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: "#/components/schemas/Winner"
 *       5XX:
 *         description: FAILED
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: FAILED
 *                 data:
 *                   type: object
 *                   properties:
 *                     error:
 *                       type: string
 *                       example: "Some error message"
 */
router.get("/:winnerId", winnerController.getOneWinner);

router.post("/", winnerController.createNewWinner);

router.patch("/:winnerId", winnerController.updateOneWinner);

router.delete("/:winnerId", winnerController.deleteOneWinner);

module.exports = router;
