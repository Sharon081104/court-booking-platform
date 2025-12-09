import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";

import bookingRoutes from "./routes/bookingRoutes.js";
import courtRoutes from "./routes/courtRoutes.js";

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/bookings", bookingRoutes);
app.use("/api/courts", courtRoutes);

app.listen(process.env.PORT || 5000, () =>
  console.log(`🚀 Backend running on ${process.env.PORT || 5000}`)
);
