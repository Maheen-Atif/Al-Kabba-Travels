import { useState } from "react";

function QuoteForm({ show, close  }) {
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
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
     <div className="bg-white w-[550px] rounded-lg overflow-hidden shadow-2xl relative">

        <div className="flex justify-between items-center px-6 py-5 border-b">
          <h2 className="text-3xl font-semibold">Get Package Price</h2>

          <button
            onClick={close}
            className="text-4xl text-gray-500 hover:text-black"
          >
            ×
          </button>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-teal-900 p-8 grid grid-cols-3 gap-6"
        >
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Name*"
            className="p-4 rounded bg-white"
          />

          <input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Email*"
            className="p-4 rounded bg-white"
          />

          <input
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            placeholder="Phone*"
            className="p-4 rounded bg-white"
          />

          <input
            name="airport"
            value={formData.airport}
            onChange={handleChange}
            required
            placeholder="Airport"
            className="p-4 rounded bg-white"
          />

          <select
            name="star"
            value={formData.star}
            onChange={handleChange}
            required
            className="p-4 rounded bg-white"
          >
            <option value="">Select Star</option>
            <option>3 Star</option>
            <option>4 Star</option>
            <option>5 Star</option>
          </select>
          <input
            type="text"
            placeholder="Departure date"
            onFocus={(e) => (e.target.type = "date")}
            onBlur={(e) => (e.target.type = "text")}
            value={formData.departure}
            required
            className="p-4 rounded bg-white"
          />
          <input
            type="text"
            placeholder="Return date"
            onFocus={(e) => (e.target.type = "date")}
            onBlur={(e) => (e.target.type = "text")}
            value={formData.returning}
            required
            className="p-4 rounded bg-white"
          />
          

          <input
            name="makkah"
            value={formData.makkah}
            onChange={handleChange}
            required
            placeholder="Nights in Makkah"
            className="p-4 rounded bg-white"
          />

          <input
            name="madinah"
            value={formData.madinah}
            onChange={handleChange}
            required
            placeholder="Nights in Madinah"
            className="p-4 rounded bg-white"
          />

          <input
            name="adults"
            type="number"
            value={formData.adults}
            onChange={handleChange}
            required
            placeholder="Adults"
            className="p-4 rounded bg-white"
          />

          <input
            name="children"
            type="number"
            value={formData.children}
            onChange={handleChange}
            required
            placeholder="Children"
            className="p-4 rounded bg-white"
          />

          <input
            name="nationality"
            value={formData.nationality}
            onChange={handleChange}
            required
            placeholder="Nationality"
            className="p-4 rounded bg-white"
          />

          <button
            type="submit"
            className=" bg-white py-4 rounded-full font-bold "
          >
            Request price
          </button>
        </form>
      </div>
    </div>
  );
}

export default QuoteForm;
