import { Footer } from "../components/Footer";
import { NavBar } from "../components/NavBar";
import Banner3 from "../images/Banner3.jpeg";
export default function TermsPage() {
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
        <div className="absolute inset-0 bg-black/50" />

        <h1 className="relative z-10 text-white text-4xl font-bold">
          Terms and Conditions
        </h1>
      </div>
      <div className="max-w-6xl mx-auto px-6 lg:px-16 py-16">
        <h1 className="text-4xl font-bold mb-8 text-center">Terms & Conditions</h1>

        <p className="text-gray-600 leading-8 mb-8">
         User agreement between the user (User, you) and Times Travels Ltd T/A Alkabba Travel (we) Please read these terms and conditions of use (Terms and Conditions) before using Alkabba Travel website (Site) and making any booking. You sanction the Terms and Conditions when you visit the Site, without qualification. If you disagree with any part of the Terms and Conditions, you may not draw on the Site in any way or make a booking. Each and every one alliance regarding customer service or your booking should be sent to Alkabba Travel or to support@royalharmaintravel.com.
        </p>

        <h2 className="text-2xl font-bold mb-4">
          Contents of these Terms and Conditions:
        </h2>

        <ul className="list-disc pl-8 text-gray-600 leading-8 mb-10">
          <li>Your agreement and contract</li>
          <li>Conditions for Delivery of Your Booking</li>
          <li>Cancellations or Booking Changes</li>
          <li>Terms and Conditions to Flight Booking</li>
          <li>Payment Conditions</li>
          <li>Passport, Visas and Health Requirements</li>
          <li>Other Generally Applicable Terms and Conditions</li>
        </ul>

      </div>
      <Footer />
    </>
  );
}
