import { Footer } from "../components/Footer";
import { NavBar } from "../components/NavBar";
import Banner6 from "../images/Banner6.jpeg";
export default function PrivacyPolicyPage(){
    return(
        <>
        <NavBar/>
        <div
                className="w-full h-72 flex items-center justify-center relative"
                style={{
                  backgroundImage:
                     `url(${Banner6})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute inset-0 bg-black/50" />
        
                <h1 className="relative z-10 text-white text-4xl font-bold">
                  Privacy Policy
                </h1>
                </div>
        <div className="max-w-6xl mx-auto px-6 lg:px-16 py-16">

  <h1 className="text-4xl font-bold mb-8 text-center">
    Privacy Policy
  </h1>

  <p className="text-gray-600 leading-8 mb-8">
    Our privacy policy explains your personal information, so it is your
    right to know.
  </p>

  <h2 className="text-2xl font-bold mb-4">
    Let’s have a look at the following
  </h2>

  <ul className="list-disc pl-8 text-gray-600 leading-8 mb-10">
    <li>What do we collect from you, and what it is for</li>
    <li>How and what purpose do we use that information for</li>
    <li>Security measures</li>
    <li>Updated changes to our privacy statement</li>
  </ul>

  <section className="mb-10">
    <h2 className="text-2xl font-bold mb-4">
      What Personal Data Do We Collect and Why?
    </h2>

    <p className="text-gray-600 leading-8">
      We will ask for your email to send you acquired package details.
      Registering through email will update you about flights and package
      information. You may opt out anytime.
      <br /><br />

      Payments are processed through secure credit/debit card systems
      requiring card number and expiration date for bookings. All payment
      information is protected using SSL (Secure Socket Layer) encryption.
      <br /><br />

      We may also request your contact number for urgent communication if
      email contact is unavailable.
      <br /><br />

      Your personal information is securely stored in our database and
      accessed only by authorized staff.
    </p>
  </section>

  <section className="mb-10">
    <h2 className="text-2xl font-bold mb-4">
      How We Use Your Information
    </h2>

    <p className="text-gray-600 leading-8">
      Information collected is stored and transferred to suppliers for
      travel arrangements. By agreeing to our terms, you consent to this
      transfer.
      <br /><br />

      We never sell or share customer information with third parties.
      Your private information remains secure with Alkabba Travel.
    </p>
  </section>

  <section className="mb-10">
    <h2 className="text-2xl font-bold mb-4">
      Security Measures
    </h2>

    <p className="text-gray-600 leading-8">
      Our security systems protect against loss, misuse, or alteration of
      your information. SSL encryption secures sensitive data such as
      bookings and payment details.
    </p>
  </section>

  <section className="mb-10">
    <h2 className="text-2xl font-bold mb-4">
      Updates to This Privacy Statement
    </h2>

    <p className="text-gray-600 leading-8">
      Clients are informed via email whenever changes are made to this
      privacy policy. Personal information remains protected, and users
      may review or request changes when needed.
    </p>
  </section>

  

  

</div>
<Footer/>
        </>
    )
}