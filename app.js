const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");

const productRoutes = require("./routes/products");
const downloadRoutes = require("./routes/download");
app.use(
  morgan(
    ":method :url :status :res[content-length] - :res[Content-Disposition] - :response-time ms"
  )
);
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());
app.use("/products", productRoutes);
app.use("/download", downloadRoutes);

app.use((req, res, next) => {
  const error = new Error("Not Found");
  error.status = 404;
  next(error);
});
app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    message: error.message
  });
});
module.exports = app;
