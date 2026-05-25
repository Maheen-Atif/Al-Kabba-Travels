import { useParams } from "react-router-dom";
import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";
import packagesData from "../data/packages";
import Card from "../components/card";
import { Faqs } from "../components/Faqs";
import Banner2 from "../images/Banner2.jpeg";
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
          backgroundImage: `url(${Banner2})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <h1 className="relative z-10 text-white text-4xl font-bold text-center px-4">
          {data.title}
        </h1>
      </div>

      {/* 🔥 SAFE CHECK HERE */}
      {data.cards && data.cards.length > 0 ? (
        <div className="px-4 sm:px-8 lg:px-16 py-10 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {data.cards.map((item, i) => (
            <Card
              key={i}
              image={item.image}
              title={item.title}
              makkahHotel={item.makkahHotel}
              madinahHotel={item.madinahHotel}
              flightStatus={item.flightStatus}
              visa={item.visa}
              transportation={item.transportation}
              price={item.price}
            />
          ))}
        </div>
      ) : (
        <div className="px-6 py-16 text-center">
          <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-16 py-10 space-y-10">
            {/* INTRODUCTION */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800">Introduction</h2>
              <p className="mt-3 text-gray-600 leading-7">
                Hajj is the fifth pillar of Islam and a mandatory pilgrimage for
                every financially and physically able Muslim at least once in
                their lifetime. It takes place in Makkah, Saudi Arabia, and
                represents complete devotion, worship, and submission to Allah.
              </p>
            </section>

            {/* IMPORTANCE */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800">
                Importance of Hajj
              </h2>
              <p className="mt-3 text-gray-600 leading-7">
                Hajj is a deeply spiritual journey that cleanses sins,
                strengthens faith, and brings Muslims from all over the world
                together in equality and unity. It teaches patience, sacrifice,
                and discipline.
              </p>
            </section>

            {/* STEPS */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800">
                Steps of Hajj
              </h2>

              <ol className="mt-3 list-decimal ml-6 space-y-3 text-gray-600 leading-7">
                <li>
                  <b>Ihram:</b> Entering a sacred state with intention and
                  wearing special clothing.
                </li>

                <li>
                  <b>Tawaf:</b> Circling the Kaaba seven times in devotion.
                </li>

                <li>
                  <b>Sa’i:</b> Walking between Safa and Marwah hills.
                </li>

                <li>
                  <b>Day of Arafat:</b> The most important day of Hajj spent in
                  prayer and forgiveness.
                </li>

                <li>
                  <b>Muzdalifah:</b> Spending the night under the open sky.
                </li>

                <li>
                  <b>Rami al-Jamarat:</b> Symbolically stoning the devil.
                </li>

                <li>
                  <b>Qurbani:</b> Sacrificing an animal in remembrance of
                  Prophet Ibrahim’s devotion.
                </li>

                <li>
                  <b>Halq/Taqsir:</b> Shaving or trimming hair to complete Hajj
                  rituals.
                </li>
              </ol>
            </section>

            {/* RULES */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800">
                Rules & Requirements
              </h2>
              <p className="mt-3 text-gray-600 leading-7">
                Hajj is obligatory only for those who are physically fit,
                financially capable, and have no major obligations preventing
                travel. Women must travel with a Mahram according to Islamic
                guidelines.
              </p>
            </section>

            {/* TIPS */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800">
                Important Tips
              </h2>

              <ul className="mt-3 list-disc ml-6 space-y-3 text-gray-600 leading-7">
                <li>
                  Prepare spiritually by learning all Hajj duas in advance.
                </li>
                <li>Pack light and carry only essentials.</li>
                <li>Stay hydrated due to hot weather conditions.</li>
                <li>Be patient and avoid unnecessary arguments.</li>
                <li>Follow group instructions and stay organized.</li>
              </ul>
            </section>

            {/* CONCLUSION */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800">Conclusion</h2>
              <p className="mt-3 text-gray-600 leading-7">
                Hajj is not just a journey but a life-changing spiritual
                experience. It brings a believer closer to Allah and leaves a
                lasting impact on their heart, mind, and soul.
              </p>
            </section>
          </div>
        </div>
      )}

      <Faqs />
      <Footer />
    </>
  );
}
