import * as mocksController from "../controllers/mocks.controller.js";
import { Router } from "express";
import config from "../config/config.js";

const router = Router();

router.get("/mockingusers", mocksController.createUsers);
router.post("/generateData/:users", mocksController.generateData);

export default router;
