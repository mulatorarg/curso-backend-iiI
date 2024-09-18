import * as userController from "../controllers/user.controller.js";
import { Router } from "express";
const router = Router();

router.get("/", userController.getUsers);
router.post("/create", userController.createUser);

export default router;
