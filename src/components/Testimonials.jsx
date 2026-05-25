import { useState } from "react";
import Fatima from "../images/Fatima.webp";
import Usman from "../images/Usman.webp";
import Billal from "../images/Billal.webp";
export default function Testimonial() {
  const testimonials = [
    {
      name: "Fatima",
      role: "Happy Client",
      image: Fatima,
      text: "A Divine Hajj & Umrah Experience with Royal Harmain Travel! From seamless visa processing to premium accommodations and expert-guided rituals, Royal Harmain Travel made my pilgrimage stress-free and deeply spiritual. Their dedication, professionalism, and attention to detail ensured an unforgettable journey ."
    },
    {
      name: "Usman Khan",
      role: "Satisfied Customer",
      image: Usman,
      text: "I went for Umrah with Royal Harmaintravel in March, and honestly, I'm really happy with how everything was handled. The visa and flight arrangements were smooth, and our hotel in Makkah was only a few minutes' walk from the Haram, which made things so convenient. Marina, booking agent, was responsive."
    },
    {
      name: "Muhammad Bilal",
      role: "Pilgrim",
      image: Billal,
      text: "Best Umrah Experience from the USA with Royal Harmain Travel! Royal Harmain Travel made my Umrah journey from the USA seamless and spiritually enriching! From smooth visa processing and affordable flights to top-tier accommodations and expert guidance, every detail was perfectly handled. Highly recommended! "
    }
  ];

  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => prev === testimonials.length - 1 ? 0 : prev + 1);
  };

  const prevSlide = () => {
    setCurrent((prev) => prev === 0 ? testimonials.length - 1 : prev - 1);
  };

  return (
    <div className="bg-white py-16 px-4 sm:px-8 lg:px-10">
      <h1 className="text-2xl font-bold text-center mb-8">
        A Legacy of Happy Customers
      </h1>

      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="flex justify-center">
          <img
            src={testimonials[current].image}
            alt={testimonials[current].name}
            className="rounded-3xl shadow-2xl w-full max-w-sm h-[350px] object-cover"
          />
        </div>
        <div className="flex flex-col">
          <h2 className="text-3xl font-bold">
            {testimonials[current].name}
          </h2>

          <p className="text-gray-500 mt-2">
            {testimonials[current].role}
          </p>

          <p className="text-base sm:text-lg text-gray-700 leading-8 mt-6">
            {testimonials[current].text}
          </p>

          <div className="flex gap-4 mt-8 justify-start flex-nowrap">
            <button
              onClick={prevSlide}
              className="w-14 h-14 rounded-full bg-black text-white text-2xl"
            >
              <i className="fa-solid fa-chevron-left"></i>
            </button>

            <button
              onClick={nextSlide}
              className="w-14 h-14 rounded-full bg-black text-white text-2xl"
            >
              <i className="fa-solid fa-chevron-right"></i>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}