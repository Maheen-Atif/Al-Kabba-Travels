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
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
      <div className="bg-white w-full max-w-2xl rounded-xl shadow-2xl max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center px-4 sm:px-6 py-4 border-b sticky top-0 bg-white z-10">
          <h2 className="text-lg sm:text-2xl font-semibold">
            Get Package Price
          </h2>

          <button
            onClick={close}
            className="text-3xl sm:text-4xl text-gray-500 hover:text-black"
          >
            ×
          </button>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-teal-900 p-4 sm:p-6 md:p-8 space-y-4"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
              name="whatsApp"
              value={formData.whatsApp}
              onChange={handleChange}
              required
              placeholder="WhatsApp*"
              className="p-3 rounded bg-white w-full"
            />

            <select
              name="packageType"
              value={formData.packageType}
              onChange={handleChange}
              required
              className="p-3 rounded bg-white w-full"
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
              placeholder="Departure Date*"
              onFocus={(e) => (e.target.type = "date")}
              onBlur={(e) => {
                if (!e.target.value) e.target.type = "text";
              }}
              value={formData.departure}
              onChange={handleChange}
              className="p-3 rounded bg-white w-full"
            />

            <input
              name="return"
              type="text"
              placeholder="Return Date*"
              onFocus={(e) => (e.target.type = "date")}
              onBlur={(e) => {
                if (!e.target.value) e.target.type = "text";
              }}
              value={formData.return}
              onChange={handleChange}
              className="p-3 rounded bg-white w-full"
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
            rows="4"
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

          <div className="flex justify-center pt-2">
            <button
              type="submit"
              className="bg-white px-6 py-3 rounded-full font-bold w-full sm:w-auto"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default BeatMyQuotes;
