import { Link } from "react-router-dom";
import { Footer } from "../components/Footer";
import { NavBar } from "../components/NavBar";

import H1 from "../images/H1.jpeg";
import H2 from "../images/H2.jpeg";
import H3 from "../images/H3.jpeg";
import Banner3 from "../images/Banner3.jpeg";
export default function FeaturedTours() {
  const cards = [
    {
      image: H1,
      title: "Shifting Hajj Packages",
      month: "shifting-hajj-packages",
    },
    {
      image: H2,
      title: "Non Shifting Hajj Packages",
      month: "non-shifting-hajj-packages",
    },
    {
      image: H3,
      title: "Hajj Guide",
      month: "hajj-guide",
    },
  ];

  return (
    <>
      <NavBar />

      {/* HERO */}
      <div
        className="w-full h-64 sm:h-72 flex items-center justify-center relative"
        style={{
          backgroundImage:
            `url(${Banner3})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <h1 className="relative z-10 text-white text-2xl sm:text-3xl md:text-4xl font-bold">
          Featured Tours
        </h1>
      </div>

      {/* CARDS */}
      <div className="px-4 sm:px-8 lg:px-16 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

        {cards.map((item, i) => (
          <Link key={i} to={`/packages/${item.month}`}>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transition duration-300">

              <img
                src={item.image}
                alt={item.title}
                className="h-56 w-full object-cover"
              />

              <div className="p-4 text-center font-bold text-gray-700">
                {item.title}
              </div>

            </div>
          </Link>
        ))}

      </div>

      <Footer />
    </>
  );
}