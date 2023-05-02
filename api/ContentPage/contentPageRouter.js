import {Router} from "express";
import { getContentPage } from "./contentPageController.js";


const contentPageRouter = Router();
contentPageRouter.get("/", getContentPage);

export default contentPageRouter;