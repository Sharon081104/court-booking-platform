import mongoose from "mongoose";

const BookingSchema = new mongoose.Schema({
  user: String,
  court: { type: mongoose.Schema.Types.ObjectId, ref: "Court" },
  startTime: Date,
  endTime: Date,
  resources: { rackets: Number, shoes: Number, coach: String },
  pricingBreakdown: { base: Number, extra: Number, total: Number },
  status: { type: String, default: "confirmed" }
});

export default mongoose.model("Booking", BookingSchema);
