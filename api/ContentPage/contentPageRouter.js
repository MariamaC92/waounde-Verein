import {Router} from "express";

const contentPageRouter = Router();
contentPageRouter.get("/", getContentPage);

export default contentPageRouter;