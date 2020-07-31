const express = require("express");
const app = express();
const router = express.Router();
const multer = require("multer");
const upload = multer({ dest: "uploads/" });
const cors = require("cors");

app.use(cors());

app.use("/", express.static('public'));
app.use(express.json())

app.post("/image", upload.single('image101'), (req, res) => {
  console.log(" ROUTE HIT", req.body, req.file);
  console.log(" query Params ", req.params);
  res.status(200).json({ go: "boy" });
});

app.post("/dynamic-image", upload.single("image201"), (req, res)=>{
  console.log(" Create Dynamically ");

  res.status(200).json({yes: "sir"});
})

const PORT = 3000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));