import { Link } from "react-router-dom";
import Hotel3 from "../images/Hotel3.jpg";
import Hotel4 from "../images/Hotel4.jpg";
import Hotel5 from "../images/Hotel5.jpg";
import Hotel6 from "../images/Hotel6.jpg";
import Hotel2 from "../images/Hotel2.jpg";
import Hotel1 from "../images/Hotel1.jpg";
import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";
import Banner3 from "../images/Banner3.jpeg";
export default function FeaturedTours2() {
  const cards2 = [
    { image: Hotel1, title: "January Packages", month: "january-packages" },
    { image: Hotel2, title: "February Packages", month: "february-packages" },
    { image: Hotel3, title: "March Packages", month: "march-packages" },
    { image: Hotel4, title: "April Packages", month: "april-packages" },
    { image: Hotel5, title: "May Packages", month: "may-packages" },
    { image: Hotel6, title: "June Packages", month: "june-packages" },
    { image: Hotel1, title: "July Packages", month: "july-packages" },
    { image: Hotel2, title: "August Packages", month: "august-packages" },
    { image: Hotel3, title: "September Packages", month: "september-packages" },
    { image: Hotel4, title: "October Packages", month: "october-packages" },
    { image: Hotel5, title: "November Packages", month: "november-packages" },
    { image: Hotel6, title: "December Packages", month: "december-packages" },
  ];

  return (
    <>
      <NavBar />
      <div
        className="w-full h-64 sm:h-72 flex items-center justify-center relative"
        style={{
          backgroundImage: `url(${Banner3})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <h1 className="relative z-10 text-white text-2xl sm:text-3xl md:text-4xl font-bold">
          Featured Tours
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
        {cards2.map((item, i) => (
          <Link key={i} to={`/packages/${item.month}`} className="group">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transition">
              <img
                src={item.image}
                className="h-48 w-full object-cover"
                alt={item.title}
              />

              <div className="p-4 text-center font-semibold text-gray-700 group-hover:text-blue-600">
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
