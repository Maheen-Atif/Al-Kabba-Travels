import { useParams } from "react-router-dom";
import Card from "../components/Card";
import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";

export default function StopOverPage() {
  return (
    <>
      <NavBar />
      <div
        className="w-full h-72 flex items-center justify-center relative"
        style={{
          backgroundImage:
            "url('https://www.alkabbatravel.com/website/images/stop-banner-main.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />

        <h1 className="relative z-10 text-white text-4xl font-bold">
          Packages
        </h1>
      </div>
      <div className="px-4 sm:px-8 lg:px-16 py-10">
        <p className="text-center mb-4 text-lg font-bold">
          Popular Umrah Deals
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
          <Card
            image="https://www.alkabbatravel.com/website/images/usa-sau-pak-package-banner.webp"
            title="10 Night Basic Umrah Package"
            makkahHotel="Makkah Hotel – AL KISWAH TOWER Hotel"
            madinahHotel="Madinah Hotel – Emaar Taibah"
            flightStatus="Flights as per requirement"
            visa="Visa Included"
            transportation="Transportation Included"
            price="$664"
          />
          <Card
            image="https://www.alkabbatravel.com/website/images/usa-sau-pak-package-banner.webp"
            title="10 Night Basic Umrah Package"
            makkahHotel="Makkah Hotel – AL KISWAH TOWER Hotel"
            madinahHotel="Madinah Hotel – Emaar Taibah"
            flightStatus="Flights as per requirement"
            visa="Visa Included"
            transportation="Transportation Included"
            price="$970"
          />
          <Card
            image="https://www.alkabbatravel.com/website/images/usa-sau-pak-package-banner.webp"
            title="10 Night Basic Umrah Package"
            makkahHotel="Makkah Hotel – AL KISWAH TOWER Hotel"
            madinahHotel="Madinah Hotel – Emaar Taibah"
            flightStatus="Flights as per requirement"
            visa="Visa Included"
            transportation="Transportation Included"
            price="$1189"
          />
        </div>
      </div>

      
      <Footer />
    </>
  );
}
