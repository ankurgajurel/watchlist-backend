import { removeVideo } from "../controllers/videos/removeVideo";
import { addNewVideo } from "../controllers/videos/addVideo";
import { Router } from "express";

const videoRouter: Router = Router();

videoRouter.post("/", addNewVideo)
videoRouter.delete("/", removeVideo)

export { videoRouter };