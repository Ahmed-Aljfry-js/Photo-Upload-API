//>> importing the nessarry libraries to make a router for creating images
import express from "express";
import fs from "fs";
import path from "path";
//! the __dirname variabe cann't doesn't come with es6 modules
const __dirname = path.resolve();
const router = express.Router();

const pathToImg = path.join(__dirname, "routes\\createImg\\testing");
const pathToImgS = path.join(__dirname, "routes\\readingImg\\testing");

//>> geting the image from the data base
router.get("/read/:title", (req, res) => {
  fs.readFile(pathToImg + "\\" + req.params.title, (err, data) => {
    if (err) res.status(404).send({ err });
    fs.writeFile(pathToImgS + "\\" + req.params.title + ".jpg", data, (err) => {
      if (err) res.status(404).send({ err2: err });
      res.send("KO");
    });
  });
});

export default router;
