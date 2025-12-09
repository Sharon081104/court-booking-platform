import SlotGrid from "../components/SlotGrid";

const BookingPage = () => (
  <div className="p-6">
    <h1 className="text-2xl font-bold">Court Booking</h1>
    <SlotGrid selectedDate={"2025-01-01"} courtId={"123"} />
  </div>
);

export default BookingPage;
