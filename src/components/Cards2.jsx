export function Cards2() {
  const cards = [
    {
      title: "ATOL",
      subtitle: "Air Travel Organisers Licensing",
      number: "ATOL No: 11870",
      bg: "bg-white",
      text: "text-black",
      items: [
        "ATOL Protection",
        "Safe Travel Booking",
        "Secure Holiday Packages",
      ],
    },
    {
      title: "ABTA",
      subtitle: "British Travel Association",
      number: "",
      bg: "bg-teal-700",
      text: "text-white",
      items: [
        "ABTA Protected",
        "Trusted Travel Partner",
        "Reliable Services",
      ],
    },
    {
      title: "IATA",
      subtitle: "International Air Transport Association",
      number: "IATA No: 9120203",
      bg: "bg-white",
      text: "text-black",
      items: [
        "Quality Services",
        "Certified Specialists",
        "Trusted Reservations",
      ],
    },
  ];

  return (
    <div className="px-4 py-12 lg:px-20 bg-gray-100">
      

      <h1 className="text-3xl font-bold text-center mb-10">
        Our Security Standards
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {cards.map((card, i) => (
          <div
            key={i}
            className={`${card.bg} ${card.text} rounded-xl px-6 pt-6 pb-10 shadow-lg hover:-translate-y-2 transition duration-300`}
          >
            
            <h2 className="text-2xl font-bold text-center">
              {card.title}
            </h2>

            <p className="text-center text-sm mt-2">
              {card.subtitle}
            </p>

            {card.number && (
              <p className="text-center font-semibold mt-2">
                {card.number}
              </p>
            )}

            <hr className="my-4" />

            <ul className="space-y-3">
              {card.items.map((item, j) => (
                <li key={j} className="flex gap-2">
                  <i className="fa-solid fa-check text-teal-500 mt-1"></i>
                  {item}
                </li>
              ))}
            </ul>

          </div>
        ))}
      </div>
    </div>
  );
}