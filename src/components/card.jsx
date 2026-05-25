import { Link } from "react-router-dom";

export default function Card({
  image,
  title,
  makkahHotel,
  madinahHotel,
  flightStatus,
  visa,
  transportation,
  price,
}) {
  const handleBuy = () => {
    alert("Booked Successfully ");
  };

  return (
    <div className="bg-gray-100 rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl cursor-pointer flex flex-col h-full">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover flex-shrink-0"
      />

      <div className="p-4 text-black flex flex-col flex-1">
        <h2 className="text-lg font-bold mb-2 text-center line-clamp-2 min-h-[3.5rem]">
          {title}
        </h2>

        <p className="text-center text-gray-700 mb-2">-----------------</p>

        <div className="flex flex-col gap-3 flex-1 text-sm">
          <p>
            <i className="fa-solid fa-hotel mr-2 text-teal-800"></i>
            {makkahHotel}
          </p>
          <p>
            <i className="fa-solid fa-hotel mr-2 text-teal-800"></i>
            {madinahHotel}
          </p>
          <p>
            <i className="fa-brands fa-avianex mr-2 text-teal-800"></i>
            {flightStatus}
          </p>
          <p>
            <i className="fa-brands fa-cc-visa mr-2 text-teal-800"></i>
            {visa}
          </p>
          <p>
            <i className="fa-solid fa-car mr-2 text-teal-800"></i>
            {transportation}
          </p>
          <p className="font-bold text-base mt-2 text-yellow-500">
            <i className="fa-solid fa-tag mr-2 text-teal-800"></i>
            {price}
          </p>
        </div>
        <div className="flex flex-col gap-3 mt-5 items-center justify-center">
          <button className="bg-gray-100 border border-yellow-300 px-4 py-2 font-bold text-sm w-full">
            +1 773 300 3023
          </button>
          <Link
            to="/book-now"
            className="w-full bg-yellow-300 hover:bg-yellow-400 text-center text-white py-2 font-bold transition text-sm"
          >
            Book Now
          </Link>
          <Link to="/contact" className="w-[50%] bg-teal-800 hover:bg-teal-900 text-center text-white py-2 font-bold transition text-sm">
            Buy Now Pay Later
          </Link>
        </div>
      </div>
    </div>
  );
}
