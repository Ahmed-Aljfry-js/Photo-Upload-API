import express from "express";
import Rcreate from "./routes/createImg/create.js";
import Rread from './routes/readingImg/read.js';
const app = express();
const port = process.env.PORT || 3000;

//>> using a default setting for express server
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//>> making use of our routers
app.use(Rcreate);
app.use(Rread);



//>> running the server
app.listen(port, () => console.log(`The server is running now on ${port}`));
