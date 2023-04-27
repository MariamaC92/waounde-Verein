import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import contentPageRouter from "./ContentPage/contentPageRouter.js";

dotenv.config({path: './database/.env'});
console.log(process.env.PGHOST);
const port = process.env.port || process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use(cors({ origin: /http:\/\/localhost/ }));
app.options("*", cors());

app.use('/contentpage', contentPageRouter);

app.listen(port, () => {
  console.log(`Waoundé listen on ${port}`);
});


