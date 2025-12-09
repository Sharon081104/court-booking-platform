import Booking from "../models/Booking.js";
import Court from "../models/Court.js";

export const createBooking = async (req, res) => {
  const { courtId, startTime, endTime, resources } = req.body;

  const existing = await Booking.findOne({
    court: courtId,
    startTime: { $lt: endTime },
    endTime: { $gt: startTime },
  });

  if (existing) return res.status(400).json({ message: "Slot unavailable" });

  const court = await Court.findById(courtId);
  const total = court.basePrice + (resources?.rackets || 0) * 50;

  const booking = await Booking.create({
    court: courtId,
    startTime,
    endTime,
    resources,
    pricingBreakdown: { base: court.basePrice, extra: total - court.basePrice, total },
  });

  res.json(booking);
};

export const getAvailableSlots = async (req, res) => {
  res.json([{ time: "5–6 PM", status: "available" }, { time: "6–7 PM", status: "booked" }]);
};
