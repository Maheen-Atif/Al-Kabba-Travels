import { useState } from "react";
import { Footer } from "../components/Footer";
import { NavBar } from "../components/NavBar";
import Banner3 from "../images/Banner3.jpeg";
export default function BookNow() {
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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your price request has been sent");
  };

  return (
    <>
      <NavBar />
      <div
        className="w-full h-72 flex items-center justify-center relative"
        style={{
          backgroundImage:
            `url(${Banner3})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/50 flex justify-center items-center">
          <h1 className="text-white text-4xl font-bold">Book Now</h1>
        </div>
      </div>
      <div className="px-6 md:px-12 lg:px-20 py-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
        <form
          onSubmit={handleSubmit}
          className="bg-teal-900 p-6 rounded-lg grid grid-cols-1 gap-4"
        >
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name*"
            className="p-3 rounded bg-white"
          />

          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email*"
            className="p-3 rounded bg-white"
          />

          <input
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone*"
            className="p-3 rounded bg-white"
          />

          <input
            name="airport"
            value={formData.airport}
            onChange={handleChange}
            placeholder="Airport"
            className="p-3 rounded bg-white"
          />

          <select
            name="star"
            value={formData.star}
            onChange={handleChange}
            className="p-3 rounded bg-white"
          >
            <option value="">Select Star</option>
            <option>3 Star</option>
            <option>4 Star</option>
            <option>5 Star</option>
          </select>

          <button
            type="submit"
            className="bg-white py-3 rounded-full font-bold mt-4"
          >
            Request Price
          </button>
        </form>
        <div className="flex flex-col gap-6">
          <div className="bg-white shadow-lg rounded-lg p-6 border">
            <h2 className="text-xl font-bold mb-4">Why Book With Us?</h2>
            <ul className="space-y-2 text-gray-700">
              <li><i class="fa-solid fa-check"></i> No-hassle best price guarantee</li>
              <li><i class="fa-solid fa-check"></i> Customer care available 24/7</li>
              <li><i class="fa-solid fa-check"></i> Hand-picked Packages to your Need</li>
              <li><i class="fa-solid fa-check"></i> Secure Payment & Privacy</li>
            </ul>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 border">
            <h2 className="text-xl font-bold mb-4">Why Book With Us?</h2>
            <ul className="space-y-2 text-gray-700">
              <li><i class="fa-solid fa-check"></i> No-hassle best price guarantee</li>
              <li><i class="fa-solid fa-check"></i> Customer care available 24/7</li>
              <li><i class="fa-solid fa-check"></i> Hand-picked Packages to your Need</li>
              <li><i class="fa-solid fa-check"></i> Secure Payment & Privacy</li>
            </ul>
          </div>

        </div>
      </div>

      <Footer />
    </>
  );
}
