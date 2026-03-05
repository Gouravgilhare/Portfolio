import express from "express";
import {
  createMessageController,
  getMessagesController,
} from "../controller/message.controller.js";
import adminAuth from "../middleware/adminAuth.middleware.js";

const router = express.Router();

router.post("/", createMessageController);
router.get("/all", adminAuth, getMessagesController);

export default router;