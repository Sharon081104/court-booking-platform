import express from "express";
import { createBooking, getAvailableSlots } from "../controllers/bookingController.js";

const router = express.Router();
router.get("/slots", getAvailableSlots);
router.post("/", createBooking);

export default router;
