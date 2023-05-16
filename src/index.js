// In src/index.js
const express = require("express");

const bodyParser = require("body-parser");
const v1WinnerRouter = require("./v1/routes/winnerRoutes");

const { swaggerDocs: V1SwaggerDocs } = require("./v1/swagger");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use("/api/v1/winners", v1WinnerRouter);

app.listen(PORT, () => {
  console.log(`API is listening on port ${PORT}`);

  V1SwaggerDocs(app, PORT);
});
