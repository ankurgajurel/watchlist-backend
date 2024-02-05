import { addNewVideo } from "../controllers/videos/addVideo";
import { Router } from "express";

const videoRouter: Router = Router();

videoRouter.get("/", (req, res) => {
    res.send("get videos")
})

videoRouter.post("/", addNewVideo)

export { videoRouter };