import * as userController from "../controllers/user.controller.js";
import { Router } from "express";
const router = Router();

router.get("/", userController.getUsers);

export default router;
