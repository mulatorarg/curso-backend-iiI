import * as mocksController from "../controllers/mocks.controller.js";
import { Router } from "express";
const router = Router();

router.get("/mockingusers", mocksController.createUsers);

export default router;
