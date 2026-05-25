import { Footer } from "../components/Footer";
import { NavBar } from "../components/NavBar";
import Banner6 from "../images/Banner6.jpeg";
export default function BlogPage() {
  return (
    <>
      <NavBar />
      <div
        className="w-full h-72 flex items-center justify-center relative"
        style={{
          backgroundImage: `url(${Banner6})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/50 flex justify-center items-center">
          <h1 className="text-white text-4xl font-bold">About Us</h1>
        </div>
      </div>
      <div className="p-30 bg-gray-100"> 

      </div>
      <Footer />
    </>
  );
}
