const Bundler = require("parcel-bundler");
const express = require("express")
const app = express();
const Path = require("path");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });

//https://parceljs.org/api.html
const entryFiles = Path.join(__dirname, './public/index.html'); //absolute path to file here
const bundlerOptions = require("./parcel-config");

const cors = require("cors");
const PORT = 3000;

(async function () {
  // Initializes a bundler using the entrypoint location and options provided
  const bundler = new Bundler(entryFiles, bundlerOptions);
  app.use(bundler.middleware());

  //app.use(cors());
  app.use(express.static(Path.join(__dirname, "./public/dist/")));
  app.use(express.json());
  console.log(" HELLO PARCEL ");
  // Run the bundler, this returns the main bundle
  // Use the events if you're using watch mode as this promise will only trigger once and not for every rebuild
  const bundle = await bundler.bundle();
})();

app.use("*", (req, res, next) => {
  console.log(" HEY THERE ")
  res.status(200).send(" BLAH ");
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