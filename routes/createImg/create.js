//>> importing the nessarry libraries to make a router for creating images
import express from "express";
import multer from "multer";
import converters from "bytes-to-x";

const router = express.Router();
const upload = multer(); 

//>> using the Image mode to create images in the database
import Imgaes from '../../db/image.js';

//>> the router to create image - i used post for this - will upload image
router.post("/create", upload.single("eggs"), async(req, res) => {
    try {
      const photo = new Imgaes({
        fileName:req.file.originalname,
        fileType:req.file.mimetype,
        fileSize:converters.toKibibytes(req.file.size),
        file:req.file.buffer
      });
      await photo.save();
      res.send("Done");
    } catch (e) {
      res.status(404).send({e,loc:"Creat imge R"});
    }
});

export default router;
