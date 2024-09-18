import { Router } from "express";
import config from "../config/config.js";

const router = Router();

router.get("/", (req, res) => {
  res.send(`API v${config.VERSION} en linea.`);
});

export default router;
