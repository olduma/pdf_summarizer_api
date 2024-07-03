const express = require("express");
const fs = require("fs");
const path = require("path");
const pdf = require("../pdf");
const openai = require("../openai");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const filePath = path.join(__dirname, "../../", req.file.path);
    const pdfText = await pdf.extractText(filePath);
    const summary = await openai.summarizeText(pdfText);

    fs.unlinkSync(filePath);

    res.json({ summary });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
