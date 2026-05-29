import { useState } from "react";

function QuoteForm({ show, close }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    airport: "",
    star: "",
    departure: "",
    returning: "",
    makkah: "",
    madinah: "",
    adults: "",
    children: "",
    nationality: "",
  });

  if (!show) return null;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Your price request has been sent ");

    setFormData({
      name: "",
      email: "",
      phone: "",
      airport: "",
      star: "",
      departure: "",
      returning: "",
      makkah: "",
      madinah: "",
      adults: "",
      children: "",
      nationality: "",
    });

    close();
  };

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">

      <div className="bg-white w-full max-w-xl rounded-xl shadow-2xl relative max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center px-5 py-4 border-b sticky top-0 bg-white">
          <h2 className="text-xl font-semibold">Get Package Price</h2>

          <button
            onClick={close}
            className="text-3xl text-gray-500 hover:text-black"
          >
            ×
          </button>
        </div>
        <form
          onSubmit={handleSubmit}
          className="bg-teal-900 p-5 grid grid-cols-1 sm:grid-cols-2 gap-4"
        >
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Name*"
            className="p-3 rounded bg-white w-full"
          />

          <input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Email*"
            className="p-3 rounded bg-white w-full"
          />

          <input
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            placeholder="Phone*"
            className="p-3 rounded bg-white w-full"
          />

          <input
            name="airport"
            value={formData.airport}
            onChange={handleChange}
            required
            placeholder="Airport"
            className="p-3 rounded bg-white w-full"
          />

          <select
            name="star"
            value={formData.star}
            onChange={handleChange}
            required
            className="p-3 rounded bg-white w-full"
          >
            <option value="">Select Star</option>
            <option>3 Star</option>
            <option>4 Star</option>
            <option>5 Star</option>
          </select>

          <input
            name="departure"
            type="text"
            placeholder="Departure Date"
            value={formData.departure}
            onFocus={(e) => (e.target.type = "date")}
            onBlur={(e) => {
              if (!e.target.value) e.target.type = "text";
            }}
            onChange={handleChange}
            required
            className="p-3 rounded bg-white w-full"
          />

          <input
            name="returning"
            type="text"
            placeholder="Return Date"
            value={formData.returning}
            onFocus={(e) => (e.target.type = "date")}
            onBlur={(e) => {
              if (!e.target.value) e.target.type = "text";
            }}
            onChange={handleChange}
            required
            className="p-3 rounded bg-white w-full"
          />

          <input
            name="makkah"
            value={formData.makkah}
            onChange={handleChange}
            required
            placeholder="Makkah Nights"
            className="p-3 rounded bg-white w-full"
          />

          <input
            name="madinah"
            value={formData.madinah}
            onChange={handleChange}
            required
            placeholder="Madinah Nights"
            className="p-3 rounded bg-white w-full"
          />

          <input
            name="adults"
            value={formData.adults}
            onChange={handleChange}
            required
            placeholder="Adults"
            className="p-3 rounded bg-white w-full"
          />

          <input
            name="children"
            value={formData.children}
            onChange={handleChange}
            required
            placeholder="Children"
            className="p-3 rounded bg-white w-full"
          />

          <input
            name="nationality"
            value={formData.nationality}
            onChange={handleChange}
            required
            placeholder="Nationality"
            className="p-3 rounded bg-white w-full"
          />

          <div className="col-span-full flex justify-center mt-2">
            <button
              type="submit"
              className="bg-white px-6 py-3 rounded-full font-bold w-full sm:w-auto"
            >
              Request Price
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default QuoteForm;
