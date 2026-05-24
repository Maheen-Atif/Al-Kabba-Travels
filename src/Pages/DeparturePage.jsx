import { useParams } from "react-router-dom";
import departuresData from "../data/Departures";
import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";
import Card from "../components/card";

export default function DeparturePage() {
  const { city } = useParams();
  const data = departuresData[city];

  if (!data) {
    return (
      <>
        <NavBar />
        <div className="h-screen flex items-center justify-center text-2xl font-bold text-gray-500">
          Page not found
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <NavBar />

      <div
        className="w-full h-72 flex items-center justify-center relative"
        style={{
          backgroundImage: "url('https://www.alkabbatravel.com/website/images/alkabba-page-banner.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <h1 className="relative z-10 text-white text-4xl font-bold text-center px-4">
          {data.title}
        </h1>
      </div>
      <div className="bg-gray-200 p-8 w-full flex flex-col justify-center items-center">
        <p className="text-3xl font-bold">Umrah Package</p>
      </div>

      

      <Footer />
    </>
  );
}