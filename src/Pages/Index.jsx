import { NavBar } from "../components/NavBar";
import { useState } from "react";
import Card from "../components/Card";
import { ScrollPart } from "../components/ScrollPart";
import Testimonial from "../components/Testimonials";
import { Cards2 } from "../components/Cards2";
import { Faqs } from "../components/Faqs";
import { Footer } from "../components/Footer";
import { Link } from "react-router-dom";
export function Index() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    airport: "",
    star: "",
    departure: "",
    returning: "",
    makkah: "",
    madinah: "",
    adults: "",
    children: "",
    nationality: "",
  });
  const [isHuman, setIsHuman] = useState(false);


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isHuman) {
      alert("Please confirm you are not a robot");
      return;
    }
    e.preventDefault();

    alert("Your price request has been sent ");

    setFormData({
      name: "",
      email: "",
      phone: "",
      airport: "",
      star: "",
      departure: "",
      returning: "",
      makkah: "",
      madinah: "",
      adults: "",
      children: "",
      nationality: "",
    });
  };

  return (
    <>
      <NavBar />

      <img
        src="https://www.alkabbatravel.com/website/images/alkabba-banner-details.webp"
        alt="banner"
        className="w-full object-cover"
      />
      <div className="py-10 px-4 sm:px-6 md:px-10 lg:px-20">
        <p className="font-bold text-center text-2xl mb-6">Get Quote</p>

        <form
          onSubmit={handleSubmit}
          className="
          bg-teal-900
          p-6 sm:p-8
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          gap-5
          rounded-lg
          w-full
          mx-auto
          
        "
        >
          {/* Inputs */}
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Name*"
            className="p-3 rounded bg-white w-full"
          />

          <input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Email*"
            className="p-3 rounded bg-white w-full"
          />

          <input
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            placeholder="Phone*"
            className="p-3 rounded bg-white w-full"
          />

          <input
            name="airport"
            value={formData.airport}
            onChange={handleChange}
            placeholder="Airport"
            className="p-3 rounded bg-white w-full"
          />

          <select
            name="star"
            value={formData.star}
            onChange={handleChange}
            className="p-3 rounded bg-white w-full"
          >
            <option value="">Select Star</option>
            <option>3 Star</option>
            <option>4 Star</option>
            <option>5 Star</option>
          </select>

          <input
            type="text"
            placeholder="Departure date"
            onFocus={(e) => (e.target.type = "date")}
            onBlur={(e) => (e.target.type = "text")}
            value={formData.departure}
            className="p-3 rounded bg-white w-full"
          />

          <input
            type="text"
            placeholder="Return date"
            onFocus={(e) => (e.target.type = "date")}
            onBlur={(e) => (e.target.type = "text")}
            value={formData.returning}
            className="p-3 rounded bg-white w-full"
          />

          <input
            name="makkah"
            value={formData.makkah}
            onChange={handleChange}
            placeholder="Nights in Makkah"
            className="p-3 rounded bg-white w-full"
          />

          <input
            name="madinah"
            value={formData.madinah}
            onChange={handleChange}
            placeholder="Nights in Madinah"
            className="p-3 rounded bg-white w-full"
          />

          <input
            name="adults"
            type="number"
            value={formData.adults}
            onChange={handleChange}
            placeholder="Adults"
            className="p-3 rounded bg-white w-full"
          />

          <input
            name="children"
            type="number"
            value={formData.children}
            onChange={handleChange}
            placeholder="Children"
            className="p-3 rounded bg-white w-full"
          />

          <input
            name="nationality"
            value={formData.nationality}
            onChange={handleChange}
            placeholder="Nationality"
            className="p-3 rounded bg-white w-full"
          />
          <div className="flex items-center gap-2 bg-white p-3 rounded w-full sm:col-span-2 lg:col-span-3">
            <input
              type="checkbox"
              checked={isHuman}
              onChange={(e) => setIsHuman(e.target.checked)}
            />
            <label>I am not a robot</label>
          </div>
          <div className="sm:col-span-2 lg:col-span-3 flex justify-center">
            <button
              type="submit"
              className="bg-white px-10 py-3 rounded-full font-bold hover:bg-gray-200 transition"
            >
              Request Price
            </button>
          </div>
        </form>
      </div>
      <div className="px-4 sm:px-8 lg:px-16 py-10">
        <p className="font-bold text-2xl text-center w-full mb-8">
          Popular Umrah Deals
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
          <Card
            image="https://www.alkabbatravel.com/uploads/seven-nights-august-basic-umrah-package-1.webp"
            title="7 Night August Basic Umrah Package"
            makkahHotel="Makkah Hotel – AL KISWAH TOWER Hotel"
            madinahHotel="Madinah Hotel –Emaar Taibah"
            flightStatus="Flights as per requirment"
            visa="Visa Included"
            transportation="Transportation Include"
            price="$664"
            number="+1 773 300 3023"
          />
          <Card
            image="https://www.alkabbatravel.com/uploads/twelve-nights-august-exclusive-umrah-package-1.webp"
            title="12 Night August Exclusive Umrah Package"
            makkahHotel="Makkah Hotel – Elaf Ajyad Hotel"
            madinahHotel="Madinah Hotel –Emaar Taibah"
            flightStatus="Flights as per requirment"
            visa="Visa Included"
            transportation="Transportation Include"
            price="$970"
            number="+1 773 300 3023"
          />
          <Card
            image="https://www.alkabbatravel.com/uploads/fourteen-nights-august-supreme-umrah-package-1.webp"
            title="14 Night August Supreme Umrah Package"
            makkahHotel="Makkah Hotel – Swissotel Hotel"
            madinahHotel="Madinah Hotel –Emaar Taibah"
            flightStatus="Flights as per requirment"
            visa="Visa Included"
            transportation="Transportation Include"
            price="$1189"
            number="+1 773 300 3023"
          />
        </div>
        <div className="w-full py-10 flex items-center justify-center">
          <Link
            to="/featured-tours"
            className="bg-green-700 text-white rounded-lg hover:bg-green-800 px-4 py-2 font-bold transition whitespace-nowrap"
          >
            Featured Tours
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 px-8 py-16 bg-gray-100">
        {/* Left Image */}
        <div className="flex items-center justify-center">
          <img
            src="https://www.alkabbatravel.com/website/images/elevate-your-faith.webp"
            alt="Mina"
            className="w-full max-w-md h-auto object-cover "
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-bold mb-4">
              Tawaf – A Sacred Act of Devotion
            </h2>
            <p className="text-black leading-8">
              Circling the Holy Kaaba seven times in deep prayer, Tawaf is a
              powerful expression of faith, unity, and submission to Allah. A
              moment of spiritual connection like no other!
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-4">
              Ihram – The Attire of Purity & Devotion
            </h2>
            <p className="text-black leading-8">
              Worn during Hajj and Umrah, Ihram symbolizes equality, humility,
              and spiritual readiness. It marks the beginning of a sacred
              journey toward Allah's blessings.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-4">
              Mina – The City of Tents & Pilgrimage
            </h2>
            <p className="text-black leading-8">
              Known as the "City of Tents," Mina is where pilgrims gather during
              Hajj for prayers and the symbolic stoning of the devil (Ramy
              al-Jamarat), following the footsteps of Prophet Ibrahim (AS).
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-4">
              Jamarat – The Symbolic Stoning of Evil
            </h2>
            <p className="text-black leading-8">
              A key Hajj ritual where pilgrims throw stones at three pillars in
              Mina, symbolizing the rejection of evil and the unwavering faith
              of Prophet Ibrahim (AS).
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-4">
              Zamzam – The Blessed Water of Purity
            </h2>
            <p className="text-black leading-8">
              Flowing for centuries, Zamzam water is a divine gift from Allah,
              first revealed to Hajar and Prophet Ismail (AS). A source of
              healing, purity, and endless blessings for pilgrims worldwide.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-4">
              Prayer Mat – Your Sacred Space Anywhere
            </h2>
            <p className="text-black leading-8">
              A symbol of devotion and purity, the prayer mat provides a clean
              and comfortable space for worship, allowing you to connect with
              Allah no matter where you are.
            </p>
          </div>
        </div>
      </div>
      <div className="px-4 sm:px-8 lg:px-16 py-10 ">
        <p className="font-bold text-2xl text-center w-full mb-8">
          Popular Hajj Deals
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
          <Card
            image="https://www.alkabbatravel.com/uploads/-days-non-shifting-hajj-package-1.webp"
            title="10 Days Non Shifting Hajj Package"
            makkahHotel="Makkah Hotel "
            madinahHotel="Madinah Hotel "
            flightStatus="Flights as per requirment"
            visa="Visa Included"
            transportation="Transportation Include"
            price="$600"
            number="+1 773 300 3023"
          />
          <Card
            image="https://www.alkabbatravel.com/uploads/-days-non-shifting-hajj-package-3.webp"
            title="18-19 Days Non Shifting Hajj Package"
            makkahHotel="Makkah Hotel "
            madinahHotel="Madinah Hotel "
            flightStatus="Flights as per requirment"
            visa="Visa Included"
            transportation="Transportation Include"
            price="$7500"
            number="+1 773 300 3023"
          />
          <Card
            image="	https://www.alkabbatravel.com/uploads/-days-non-shifting-hajj-package-5.webp"
            title="14 Days Non Shifting Hajj Package"
            makkahHotel="Makkah Hotel "
            madinahHotel="Madinah Hotel "
            flightStatus="Flights as per requirment"
            visa="Visa Included"
            transportation="Transportation Include"
            price="$7000"
            number="+1 773 300 3023"
          />
        </div>
        <div className="w-full py-10 flex items-center justify-center">
          <Link
            to="/featured-tours"
            className="bg-green-700 ext-white rounded-lg hover:bg-green-800 px-4 py-2 font-bold transition whitespace-nowrap"
          >
            Featured Tours
          </Link>
        </div>
      </div>
      <ScrollPart />
      <Testimonial />
      <Cards2 />
      <Faqs />
      <Footer />
    </>
  );
}
