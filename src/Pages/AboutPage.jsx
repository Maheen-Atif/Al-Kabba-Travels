import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";
import Pic1 from "../images/Pic1.jpeg";
import Banner3 from "../images/Banner3.jpeg";

export default function AboutPage() {
  const cards = [
    {
      title: "Send Email",
      subtitle: "quotes@royalharmain.com",
      icon: "fa-solid fa-envelope",
    },
    {
      title: "Office Address",
      subtitle: "Level 17 Dashwood House",
      icon: "fa-solid fa-location-dot",
    },
    {
      title: "Contact Number",
      subtitle: "+1 773 300 3023",
      icon: "fa-solid fa-phone",
    },
  ];

  return (
    <>
      <NavBar />

      <div
        className="w-full h-72 flex items-center justify-center relative"
        style={{
          backgroundImage: `url(${Banner3})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/50 flex justify-center items-center">
          <h1 className="text-white text-4xl font-bold">About Us</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-16 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-white shadow-xl rounded-2xl overflow-hidden">
          <div>
            <img
              src={Pic1}
              alt="Royal Harmain Travel"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="p-8 lg:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              About Royal Harmain Travel
            </h2>

            <p className="text-gray-600 leading-8 text-lg">
              <span className="font-semibold">
                Your Dependable Partner for Global and Spiritual Travels
              </span>
              <br />
              <br />
              Our specialty at Royal Harmain Travel is providing groups,
              families, and individuals throughout the United States and beyond
              with significant and unforgettable travel experiences.
              <br />
              <br />
              Whether your vacation is cultural or a once-in-a-lifetime
              spiritual journey to Makkah and Madinah, our goal is to make sure
              every aspect of your travel is flawless, holy, and stress-free.
            </p>
          </div>
        </div>
      </div>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-12 items-center lg:px-16 px-6 py-16 bg-gray-50">
        <div className="flex flex-col gap-6">
          <h1 className="font-bold text-3xl lg:text-4xl">
            Welcome to Royal Harmain Travels
          </h1>

          <p className="text-gray-600 leading-8 text-lg">
            Royal Harmain Travel is proud to be your trusted partner in
            spiritual and global travel experiences. Serving travelers from New
            Jersey, Georgia, Michigan, Virginia, Pennsylvania, and across the
            USA, we deliver premium travel solutions with comfort, care, and
            reliability.
          </p>
        </div>

        <div className="flex flex-col gap-6">
          <div className="shadow-xl rounded-2xl border border-gray-300 p-6 bg-white transform transition duration-300 hover:-translate-y-3 hover:scale-105 cursor-pointer">
            <h1 className="text-2xl font-bold mb-3">World Travel Solutions</h1>

            <p className="text-gray-600 leading-7">
              Beyond spiritual journeys, we provide complete travel solutions
              including flights, hotels, and custom worldwide tour packages
              tailored to your needs.
            </p>
          </div>

          <div className="shadow-xl rounded-2xl border border-gray-300 p-6 bg-white transform transition duration-300 hover:-translate-y-3 hover:scale-105 cursor-pointer">
            <h1 className="text-2xl font-bold mb-3">Group & Family Travel</h1>

            <p className="text-gray-600 leading-7">
              Making travel plans with loved ones? We provide specially chosen
              bundles for groups, seniors, and families with comfort and
              accessibility.
            </p>
          </div>

          <div className="shadow-xl rounded-2xl border border-gray-300 p-6 bg-white transform transition duration-300 hover:-translate-y-3 hover:scale-105 cursor-pointer">
            <h1 className="text-2xl font-bold mb-3">
              Why Should We Be Selected?
            </h1>

            <p className="text-gray-600 leading-7">
              With years of experience in religious and international travel, we
              understand our clients' needs and provide trustworthy services.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 lg:px-16 py-16 bg-white">
        {cards.map((card, i) => (
          <div
            key={i}
            className="shadow-xl rounded-2xl border border-gray-300 p-8 bg-white
  transform transition duration-300 hover:-translate-y-2 hover:scale-100 cursor-pointer
  hover:bg-teal-600 hover:text-white overflow-hidden"
          >
            <div className="flex justify-center mb-4">
              <div className="w-20 h-20 rounded-full bg-teal-100 flex items-center justify-center shadow-md">
                <i className={`${card.icon} text-4xl text-teal-700`}></i>
              </div>
            </div>
            <h2 className="text-2xl font-bold text-center">{card.title}</h2>

            <p className="text-center text-gray-600 mt-4 text-lg">
              {card.subtitle}
            </p>
          </div>
        ))}
      </div>

      <Footer />
    </>
  );
}
