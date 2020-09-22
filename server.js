const express = require("express")
const app = express();
const Path = require("path");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });
const PORT = 3000;


app.use(express.static("./public/dist"));

app.get("/yay", (req, res, next) => {
  res.status(200).send(" I LOVE YOU ");
})
//used for html form upload
app.post("/image", 
  upload.single('image101'), 
  (req, res) => {
    res.status(200).json({ go: "boy" });
  }
);

//used for javascript upload
app.post("/dynamic-image", 
  upload.single("image201"), 
  (req, res)=>{
    console.log(" Create Dynamically ");
    res.status(200).json({yes: "sir"});
  }
)

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));