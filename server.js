const express = require("express")
const app = express();
const Path = require("path");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });
const PORT = 3000;


app.use(express.static("./public/dist"));

app.get("/yay", (req, res) => {
  console.log(" ARE WE EVER HERE ")
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
  (req, res, next) => {
    console.log(" DO UPLOAD PLEASE ", req);   
    next()
  },
  (req, res)=> {
    res.status(200).json({"msg": "success"});
  }
)

app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));