import { Footer } from "../components/Footer";
import { NavBar } from "../components/NavBar";
import { ReplyForm } from "../components/ReplyForm";

export default function ContactPage() {
  return (
    <>
    <NavBar/>
      <div
        className="w-full h-72 flex items-center justify-center relative"
        style={{
          backgroundImage:
            "url('https://www.alkabbatravel.com/website/images/alkabba-page-banner.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/50 flex justify-center items-center">
          <h1 className="relative text-center  z-10 text-white text-4xl font-bold">
            Contact Us..
          </h1>
        </div>

      </div>
      <ReplyForm/>
      
      <Footer/>
    </>
  );
}
