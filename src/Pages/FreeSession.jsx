import { Footer } from "../components/Footer";
import { NavBar } from "../components/NavBar";
import { ReplyForm } from "../components/ReplyForm";

export default function FreeSession() {
  return (
    <>
      <NavBar/>
      <div
        className="w-full h-64 sm:h-72 flex items-center justify-center relative"
        style={{
          backgroundImage:
            "url('https://www.alkabbatravel.com/website/images/stop-banner-main.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />

        <h1 className="relative z-10 text-white text-2xl sm:text-3xl md:text-4xl font-bold text-center px-4">
          Umrah Consultancy
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 px-4 sm:px-6 md:px-10 lg:px-20 py-10">
        <div className="flex flex-col justify-center">
          <h1 className="text-lg sm:text-xl font-bold">
            Are you going for Umrah for the first time and feeling unsure?
          </h1>

          <p className="mt-3 text-gray-700 leading-relaxed text-sm sm:text-base">
            Don’t worry Alkabba Travel is here to help you every step of the way.
            We’re offering a Free Online Umrah Training Session to guide you
            through the complete Umrah process from Ihram to Tawaf, Sa’i, and more.
            <br /><br />
            This session is perfect for first-timers, families, or anyone who wants
            to feel confident and spiritually prepared.
          </p>
        </div>
        <div className="flex justify-center">
          <ReplyForm/>
        </div>

      </div>

      <Footer/>
    </>
  );
}