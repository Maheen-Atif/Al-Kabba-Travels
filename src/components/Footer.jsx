import Logo from "../images/Logo.png";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <>
      <footer className="bg-white text-black border-t border-gray-300">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 px-8 md:px-16 lg:px-24 py-12">

          <div className="flex flex-col gap-4">
            <img
              alt="logo"
              src={Logo}
              className="w-44"
            />

            <p className="text-gray-500 leading-7">
              Royal Harmain Travels has you covered! From life-changing pilgrimages to dream vacations,
              we make it easy. Get personalized service, unbeatable deals, and unforgettable experiences.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h1 className="text-xl font-bold">Top Destinations</h1>

            <p className="text-gray-500">USA, UK, Europe</p>
            <p className="text-gray-500">Australia</p>
            <p className="text-gray-500">Dubai, Saudi Arabia</p>
            <p className="text-gray-500">Nigeria</p>
            <p className="text-gray-500">Pakistan, India</p>
            <p className="text-gray-500">Turkey</p>
          </div>

          <div className="flex flex-col gap-4">
            <h1 className="text-xl font-bold">Quick Links</h1>

            <Link to="/about" className="text-gray-500 hover:text-black">
              About Us
            </Link>

            <Link to="/blog" className="text-gray-500 hover:text-black">
              Blog
            </Link>

            <Link to="/contact" className="text-gray-500 hover:text-black">
              Contact Us
            </Link>

            <Link to="/privacy-policy" className="text-gray-500 hover:text-black">
              Privacy Policy
            </Link>

            <Link to="/terms" className="text-gray-500 hover:text-black">
              Terms & Conditions
            </Link>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="text-xl font-bold">Contact Us</h1>

            <div>
              <h1 className="font-bold">Email</h1>
              <p className="text-gray-500">quotes@royalharmaintravel.com</p>
            </div>

            <div>
              <h1 className="font-bold">Phone</h1>
              <p className="text-gray-500">+1 773 300 3023</p>
            </div>

            <div className="flex gap-2 items-center">
              <img
                className="w-6 h-6"
                src="https://www.alkabbatravel.com/website/images/uk-flag-icon.png"
                alt="UK"
              />
              <h1 className="font-bold">London Address</h1>
            </div>

            <p className="text-gray-500">
              Level 17 Dashwood House 69 Old Broad Street London EC2M 1QS
            </p>

            <div className="flex gap-2 items-center">
              <img
                className="w-5 h-5"
                src="https://www.alkabbatravel.com/website/images/usa-icon-flag.png"
                alt="USA"
              />
              <h1 className="font-bold">USA Address</h1>
            </div>

            <p className="text-gray-500">
              9933 Franklin Ave, Franklin Park Suite 135 IL 60131 USA
            </p>
          </div>

        </div>
        <div className="text-center py-4 border-t text-gray-500 text-sm">
          © 2026 alkabbatravel.com, Inc. All Rights Reserved.
        </div>

      </footer>
    </>
  );
}