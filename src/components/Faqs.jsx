import { useState } from "react";

export function Faqs() {
  const [open, setOpen] = useState(null);

  const faqs = [
    {
      question: "Do I meed a visa to perform Umrah from the USA?",
      answer:
        "Yes. All U.S. citizens and residents need a visa to perform Umrah in Saudi Arabia. You can either apply for an Umrah visa through an authorized travel agent or use a Saudi tourist eVisa, which also permits Umrah outside the Hajj season.",
    },
    {
      question: "Can I perform Umrah with a Saudi tourist Visa",
      answer:
        "Yes. As of recent updates, the Saudi tourist eVisa allows U.S. citizens and residents to perform Umrah, but not Hajj. It's valid for multiple entries and is usually valid for one year with stays up to 90 days per visit",
    },
    {
      question: "How do I apply for an Umrah Visa from the USA?",
      answer: "You can apply through: An authorized Umrah travel agent (traditional method) The Saudi eVisa portal (https://visa.visitsaudi.com) The Saudi embassy or consulate, if needed We can help handle your visa as part of a package for convenience and accuracy.",
    },
    {
      question: "What documents are required for an Umrah Visa?",
      answer: "Typical documents include: A valid U.S. passport (with at least 6 months validity) A passport-sized photo with white background Travel insurance (often included with eVisa) Return air ticket and hotel booking (for eVisa applications)",
    },
    {
      question: "How long does it take to process the Umrah Visa?",
      answer: "Tourist eVisa: Usually issued within 24 to 72 hours Traditional Umrah visa: Takes about 5–7 business days if done via a registered agent",
    },
    {
      question: "How long is the Umrah Visa valid?",
      answer: "Traditional Umrah visa: Valid for 30 days Tourist eVisa: Valid for 1 year with multiple entries (up to 90 days per stay)",
    },
    {
      question: "What is your Cancellation policy?",
      answer: "Our cancellation policy varies based on the airline, hotel, and package provider. Fees may apply depending on the timing of your cancellation. To ensure flexibility, we recommend reviewing the terms at the time of booking. For assistance, contact our support team—we’re here to help!",
    },
  ];

  return (
    <div className="flex flex-col items-center py-12 bg-white">
      <h1 className="text-3xl font-bold mb-8">FAQ's</h1>

      <div className="w-full max-w-4xl ">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white shadow-md overflow-hidden"
          >

            <button
              onClick={() =>
                setOpen(open === index ? null : index)
              }
              className="w-full flex justify-between items-center px-6 py-5 border-b border-gray-300 text-left font-semibold text-lg hover:bg-gray-50"
            >
              {faq.question}

              <span className="text-2xl font-bold">
                {open === index ? "-" : "+"}
              </span>
            </button>

            <div
              className={`transition-all duration-300 overflow-hidden ${
                open === index
                  ? "max-h-40 px-6 pb-5"
                  : "max-h-0 px-6"
              }`}
            >
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}