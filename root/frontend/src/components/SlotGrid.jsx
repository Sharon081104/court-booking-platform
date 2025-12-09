import { useState } from "react";
import BookingModal from "./BookingModal";

const SlotGrid = ({ selectedDate, courtId }) => {
  const slots = [
    { time: "5–6 PM", status: "available" },
    { time: "6–7 PM", status: "booked" }
  ];

  const [active, setActive] = useState(null);

  return (
    <div className="grid grid-cols-2 gap-4 mt-4">
      {slots.map((slot, i) => (
        <button
          key={i}
          disabled={slot.status === "booked"}
          className={`p-3 rounded ${slot.status === "available" ? "bg-green-300" : "bg-gray-400"}`}
          onClick={() => setActive(slot)}
        >
          {slot.time}
        </button>
      ))}
      {active && <BookingModal slot={active} courtId={courtId} onClose={() => setActive(null)} />}
    </div>
  );
};

export default SlotGrid;
