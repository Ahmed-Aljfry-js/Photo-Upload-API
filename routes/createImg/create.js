//>> importing the nessarry libraries to make a router for creating images
import express from "express";
import multer from "multer";
import converters from "bytes-to-x";
const router = express.Router();
const upload = multer({ dest: "routes/createImg/testing/" }); //? uploading to ./testing folder

// TODO : change the name of the image file name to human-readable file name .

//>> the router to create image - i used post for this - will upload image
router.post("/create", upload.single("eggs"), (req, res) => {
  //? testing to see if i don't do any mistake so i send back the results
  res.send({
    name: req.file.originalname,
    type: req.file.mimetype,
    size: converters.toKibibytes(req.file.size),
    body: req.body,
  });
});

export default router;
