const BookingModal = ({ slot, onClose }) => (
  <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
    <div className="bg-white p-6 rounded-xl space-y-4 w-80">
      <h2 className="text-xl font-bold">Book {slot.time}</h2>
      <button className="w-full bg-green-600 text-white p-2 rounded">Confirm</button>
      <button className="w-full bg-gray-300 p-2 rounded" onClick={onClose}>Close</button>
    </div>
  </div>
);

export default BookingModal;
