require("dotenv").config();
const express = require("express");
const multer = require("multer");
const PORT = process.env.PORT || 3000;
const summarizeRoute = require("./src/routes/summarize");

const app = express();
const upload = multer({ dest: "uploads/" });

app.use(express.json());
app.get("/test", (req, res) => {
  res.send("Hello World!");
});

app.use("/summarize", upload.single("pdf"), summarizeRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
