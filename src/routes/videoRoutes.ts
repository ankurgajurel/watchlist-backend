import { Router } from "express";

const videoRouter: Router = Router();

videoRouter.get("/", (req, res) => {
    res.send("get videos")
})

videoRouter.post("/", (req, res) => {
    res.send("post videos")
})

export { videoRouter };