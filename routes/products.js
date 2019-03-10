const express = require("express");
const data = require("../data/data");
const router = express.Router();
var path = require("path");

router.get("/", (req, res, next) => {
  res.status(200).json(data.findAll());
});

router.post("/", (req, res, next) => {
  const item = { ...req.body, id: data.generateID() };
  data.add(item);
  res.status(201).json([]);
});

router.get("/:productId", (req, res, next) => {
  const id = +req.params.productId;
  const result = data.findByID(id);
  if (result) {
    res.status(200).json(result);
  } else {
    res.status(404).json({
      message: "Not Found"
    });
  }
});
router.get("/download/pdf", (req, res) => {
  file = path.resolve(__dirname, "../files/file.pdf");
  const fileName = new Date().toISOString() + "download.pdf";
  res.download(file, fileName);
});

module.exports = router;
