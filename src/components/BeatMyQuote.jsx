import { useState } from "react";

function BeatMyQuotes({ show, close }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsApp: "",
    packageType: "",
    departure: "",
    return: "",
    quote: "",
    quotedPrice: "",
    additionalInfo: "",
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

    alert("Submitted Successfully!");

    setFormData({
      name: "",
      email: "",
      whatsApp: "",
      packageType: "",
      departure: "",
      return: "",
      quote: "",
      quotedPrice: "",
      additionalInfo: "",
      nationality: "",
    });

    close();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-start z-50 overflow-y-auto py-10">
      <div className="bg-white w-[500px] rounded-lg shadow-2xl max-h-[90vh] overflow-y-auto">

        <div className="flex justify-between items-center px-6 py-5 border-b bg-white sticky top-0">
          <h2 className="text-3xl font-semibold">Get Package Price</h2>

          <button
            onClick={close}
            className="text-4xl text-gray-500 hover:text-black"
          >
            ×
          </button>
        </div>

        <form onSubmit={handleSubmit} className="bg-teal-900 p-4 space-y-3">

          <div className="grid grid-cols-2 gap-3">

            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Name*"
              className="p-3 rounded bg-white"
            />

            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Email*"
              className="p-3 rounded bg-white"
            />

            <input
              name="whatsApp"
              value={formData.whatsApp}
              onChange={handleChange}
              required
              placeholder="WhatsApp*"
              className="p-3 rounded bg-white"
            />

            <select
              name="packageType"
              value={formData.packageType}
              onChange={handleChange}
              required
              className="p-3 rounded bg-white"
            >
              <option value="">Package Type</option>
              <option value="Umrah">Umrah</option>
              <option value="Hajj">Hajj</option>
              <option value="Group">Group</option>
              <option value="Private">Private</option>
            </select>

            <input
              name="departure"
              type="text"
              placeholder="Departure Date *"
              onFocus={(e) => (e.target.type = "date")}
              onBlur={(e) => {
                if (!e.target.value) e.target.type = "text";
              }}
              value={formData.departure}
              onChange={handleChange}
              className="p-3 rounded bg-white"
            />

            <input
              name="return"
              type="text"
              placeholder="Return Date *"
              onFocus={(e) => (e.target.type = "date")}
              onBlur={(e) => {
                if (!e.target.value) e.target.type = "text";
              }}
              value={formData.return}
              onChange={handleChange}
              className="p-3 rounded bg-white"
            />

          </div>

          <input
            name="quote"
            value={formData.quote}
            onChange={handleChange}
            required
            placeholder="Quote"
            className="p-3 rounded bg-white w-full"
          />

          <input
            name="quotedPrice"
            value={formData.quotedPrice}
            onChange={handleChange}
            required
            placeholder="Quoted Price"
            className="p-3 rounded bg-white w-full"
          />

          <textarea
            name="additionalInfo"
            value={formData.additionalInfo}
            onChange={handleChange}
            rows="5"
            placeholder="Additional Information"
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

          <button
            type="submit"
            className="bg-white py-3 rounded-full font-bold py-4 px-4"
          >
            Submit
          </button>

        </form>
      </div>
    </div>
  );
}

export default BeatMyQuotes;