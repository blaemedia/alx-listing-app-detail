// components/property/BookingSection.tsx
import { useState, useEffect } from "react";

interface BookingSectionProps {
  price: number;
}

const BookingSection: React.FC<BookingSectionProps> = ({ price }) => {
  const [checkIn, setCheckIn] = useState<string>("");
  const [checkOut, setCheckOut] = useState<string>("");
  const [totalNights, setTotalNights] = useState<number>(0);

  // Calculate the number of nights whenever dates change
  useEffect(() => {
    if (checkIn && checkOut) {
      const start = new Date(checkIn);
      const end = new Date(checkOut);
      const diffTime = end.getTime() - start.getTime();
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      setTotalNights(diffDays > 0 ? diffDays : 0);
    } else {
      setTotalNights(0);
    }
  }, [checkIn, checkOut]);

  const totalPayment = totalNights * price;

  return (
    <div className="bg-white p-6 shadow-md rounded-lg">
      <h3 className="text-xl font-semibold">${price}/night</h3>

      <div className="mt-4">
        <label className="block mb-1 font-medium">Check-in</label>
        <input
          type="date"
          className="border p-2 w-full rounded-md"
          value={checkIn}
          onChange={(e) => setCheckIn(e.target.value)}
        />
      </div>

      <div className="mt-4">
        <label className="block mb-1 font-medium">Check-out</label>
        <input
          type="date"
          className="border p-2 w-full rounded-md"
          value={checkOut}
          onChange={(e) => setCheckOut(e.target.value)}
        />
      </div>

      <div className="mt-4">
        <p>
          Total nights: <strong>{totalNights}</strong>
        </p>
        <p>
          Total payment: <strong>${totalPayment}</strong>
        </p>
      </div>

      <button
        className="mt-4 w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md"
        disabled={totalNights === 0}
      >
        Reserve now
      </button>
    </div>
  );
};

export default BookingSection;
