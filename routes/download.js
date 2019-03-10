const express = require("express");
const router = express.Router();
var path = require("path");

router.get("/pdf", (req, res) => {
  file = path.resolve(__dirname, "../files/file.pdf");
  const fileName = new Date().toISOString() + "download.pdf";
  res.download(file, fileName);
});

module.exports = router;
