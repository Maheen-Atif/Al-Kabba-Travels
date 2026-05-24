import { useParams } from "react-router-dom";
import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";
import packagesData from "../data/packages";
import Card from "../components/Card";
import { Faqs } from "../components/Faqs";

export default function PackagePage() {
  const { month } = useParams();
  const data = packagesData[month];

  if (!data) {
    return (
      <>
        <NavBar />
        <div className="h-screen flex items-center justify-center text-2xl font-bold text-gray-500">
          Package not found
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

      <div className="px-4 sm:px-8 lg:px-16 py-10">
        <p className="text-center mb-4 text-lg font-bold">Packages</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
          <Card
            image="https://www.alkabbatravel.com/uploads/seven-nights-august-basic-umrah-package-1.webp"
            title="7 Night August Basic Umrah Package"
            makkahHotel="Makkah Hotel – AL KISWAH TOWER Hotel"
            madinahHotel="Madinah Hotel – Emaar Taibah"
            flightStatus="Flights as per requirement"
            visa="Visa Included"
            transportation="Transportation Included"
            price="$664"
          />
          <Card
            image="https://www.alkabbatravel.com/uploads/twelve-nights-august-exclusive-umrah-package-1.webp"
            title="12 Night August Exclusive Umrah Package"
            makkahHotel="Makkah Hotel – Elaf Ajyad Hotel"
            madinahHotel="Madinah Hotel – Emaar Taibah"
            flightStatus="Flights as per requirement"
            visa="Visa Included"
            transportation="Transportation Included"
            price="$970"
          />
          <Card
            image="https://www.alkabbatravel.com/uploads/fourteen-nights-august-supreme-umrah-package-1.webp"
            title="14 Night August Supreme Umrah Package"
            makkahHotel="Makkah Hotel – Swissotel Hotel"
            madinahHotel="Madinah Hotel – Emaar Taibah"
            flightStatus="Flights as per requirement"
            visa="Visa Included"
            transportation="Transportation Included"
            price="$1189"
          />
        </div>
      </div>

      <Faqs />
      <Footer />
    </>
  );
}