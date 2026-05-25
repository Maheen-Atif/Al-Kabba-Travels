import americanFlag from "../images/american-flag.webp";
import newZealandFlag from "../images/newZealand.jpg";
import { useState, useEffect, useRef } from "react";
import al from "../images/al.jpeg";
import QuoteForm from "./QuoteForm";
import BeatMyQuote from "./BeatMyQuote";
import { Link } from "react-router-dom";
import Logo from "../images/Logo.png";
const navItems = [
  {
    label: "Umrah",
    dropdown: [
      { name: "January Packages", href: "/packages/january-packages" },
      { name: "February Packages", href: "/packages/february-packages" },
      { name: "March Packages", href: "/packages/march-packages" },
      { name: "April Packages", href: "/packages/april-packages" },
      { name: "May Packages", href: "/packages/may-packages" },
      { name: "June Packages", href: "/packages/june-packages" },
      { name: "July Packages", href: "/packages/july-packages" },
      { name: "August Packages", href: "/packages/august-packages" },
      { name: "September Packages", href: "/packages/september-packages" },
      { name: "October Packages", href: "/packages/october-packages" },
      { name: "November Packages", href: "/packages/november-packages" },
      { name: "December Packages", href: "/packages/december-packages" },
    ],
  },
  {
    label: "Hajj",
    dropdown: [
      {
        name: "Shifting Hajj Packages",
        href: "/packages/shifting-hajj-packages",
      },
      {
        name: "Non Shifting Hajj Packages",
        href: "/packages/non-shifting-hajj-packages",
      },
      { name: "Hajj Guide", href: "/packages/hajj-guide" },
    ],
  },
  {
    label: "Departure State",
    dropdown: [
      { name: "New York", href: "/departure/new-york" },
      { name: "Chicago IL", href: "/departure/chicago-il" },
      { name: "Washington DC", href: "/departure/washington-dc" },
      { name: "Dallas TX", href: "/departure/dallas-tx" },
    ],
  },
  {
    label: "Stop Over",
    dropdown: [
      { name: "USA -> SAU -> PAK", href: "/stopover/usa-sau-pak" },
      { name: "USA -> SAU -> India", href: "/stopover/usa-sau-india" },
      { name: "USA -> SAU -> MYS", href: "/stopover/usa-sau-mys" },
      { name: "USA -> SAU -> BGD", href: "/stopover/usa-sau-bgd" },
      { name: "USA -> SAU -> IBN", href: "/stopover/usa-sau-ibn" },
      { name: "USA -> SAU -> TUR", href: "/stopover/usa-sau-tur" },
    ],
  },
  {
    label: "Contact Us",
    href: "/contact",
    dropdown: [],
  },
];

export function NavBar() {
  const [openMenu, setOpenMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [showGForm, setGShowForm] = useState(false);

  const [searchTerm, setSearchTerm] = useState("");
  const [showSearch, setShowSearch] = useState(false);

  const navRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setOpenMenu(null);
        setMobileOpen(false);
        setShowSearch(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // STOP BODY SCROLL WHEN MENU OPEN
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "auto";
  }, [mobileOpen]);

  const toggleMobileDropdown = (i) => {
    setMobileDropdown(mobileDropdown === i ? null : i);
  };

  const allLinks = navItems.flatMap((item) =>
    item.dropdown.length > 0
      ? item.dropdown
      : [{ name: item.label, href: item.href }],
  );

  const filteredResults = allLinks.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <>
      
      <div className="bg-teal-800 text-white w-full">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 md:px-10 lg:px-20 py-3">
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-3">
            <div className="flex flex-col sm:flex-row sm:justify-center lg:justify-start items-center gap-2 sm:gap-5">
              <p>
                <i className="fa-solid fa-envelope mr-1"></i>
                quotes@royalharmaintravel.com
              </p>
              <p>
                <i className="fa-solid fa-phone mr-1"></i>
                +1 773 300 3023
              </p>
            </div>

            <div className="flex flex-wrap justify-center lg:justify-end items-center gap-3">
              <a href="#">
              <div className="w-8 h-8 bg-teal-600 flex items-center justify-center rounded-full">
                
                <i className="fa-brands fa-facebook"></i>
              </div>
              </a>
              <a href="#">
              <div className="w-8 h-8 bg-teal-600 flex items-center justify-center rounded-full">
                <i className="fa-brands fa-instagram"></i>
              </div>
              </a>
              
              <a href="#">
                <div className="w-8 h-8 bg-teal-600 flex items-center justify-center rounded-full">
                <i className="fa-brands fa-linkedin"></i>
              </div>
              </a>
              <a href="#"><div className="w-8 h-8 bg-teal-600 flex items-center justify-center rounded-full">
                <i className="fa-brands fa-youtube"></i>
              </div></a>
              
              <a href="#">
                <div className="w-8 h-8 bg-teal-600 flex items-center justify-center rounded-full">
                <i className="fa-brands fa-x-twitter"></i>
              </div>

              </a>
              <img
                src={newZealandFlag}
                className="w-8 h-8 rounded-full object-cover"
              />
              <img
                src={americanFlag}
                className="w-8 h-8 rounded-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* NAVBAR */}
      <nav ref={navRef} className="w-full bg-white sticky top-0 z-50 shadow-sm">
        <div className="flex items-center justify-between px-6 py-3">
          {/* LOGO */}
          <Link to="/">
            <img src={Logo} className="w-32 h-16 object-contain" />
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item, i) => (
              <div
                key={i}
                className="relative"
                onMouseEnter={() => setOpenMenu(i)}
                onMouseLeave={() => setOpenMenu(null)}
              >
                {item.dropdown.length > 0 ? (
                  <button className="font-medium hover:text-teal-700">
                    {item.label}
                  </button>
                ) : (
                  <Link
                    to={item.href}
                    className="font-medium hover:text-teal-700"
                  >
                    {item.label}
                  </Link>
                )}

                {item.dropdown.length > 0 && openMenu === i && (
                  <div className="absolute top-full left-0 w-56 bg-white shadow-lg z-50 border-t-2 border-teal-700">
                    {item.dropdown.map((sub, j) => (
                      <Link
                        key={j}
                        to={sub.href}
                        className="block px-4 py-2 hover:bg-gray-100 text-sm"
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* BUTTONS */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={() => setShowForm(true)}
              className="bg-teal-800 text-white px-4 py-2 rounded-full"
            >
              Get Quote
            </button>

            <button
              onClick={() => setGShowForm(true)}
              className="bg-teal-800 text-white px-4 py-2 rounded-full"
            >
              Beat My Quote
            </button>

            <Link
              to="/free-session"
              className="bg-teal-800 text-white px-4 py-2 rounded-full"
            >
              Free Session
            </Link>
            <button onClick={() => setShowSearch(!showSearch)}>
              <i class="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>

          {/* HAMBURGER */}
          <button
            className="lg:hidden text-3xl relative z-50"
            onClick={() => setMobileOpen(true)}
          >
            ☰
          </button>
        </div>

        {/* SEARCH BOX */}
        {showSearch && (
          <div className="absolute right-10 top-20 w-72 bg-white shadow-lg p-3 rounded z-50">
            <input
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search..."
              className="w-full border p-2 rounded"
            />

            <div className="mt-2 max-h-60 overflow-y-auto">
              {filteredResults.length > 0 ? (
                filteredResults.map((item, i) => (
                  <Link
                    key={i}
                    to={item.href}
                    onClick={() => {
                      setShowSearch(false);
                      setSearchTerm("");
                    }}
                    className="block p-2 hover:bg-gray-100 text-sm"
                  >
                    {item.name}
                  </Link>
                ))
              ) : (
                <p className="text-gray-500 text-sm p-2">No results</p>
              )}
            </div>
          </div>
        )}

        {/* OVERLAY */}
        {mobileOpen && (
          <div
            className="fixed inset-0 bg-black/50 z-40"
            onClick={() => setMobileOpen(false)}
          />
        )}

        {/* MOBILE MENU */}
        <div
          className={`fixed top-0 left-0 h-full w-72 bg-white z-50 transition-transform duration-300 overflow-y-auto
          ${mobileOpen ? "translate-x-0" : "-translate-x-full"}`}
        >
          <div className="p-4 border-b flex justify-between">
            <h2 className="font-bold text-teal-800">Menu</h2>
            <button onClick={() => setMobileOpen(false)}>✕</button>
          </div>

          <div className="p-4 space-y-3">
            {navItems.map((item, i) => (
              <div key={i} className="border-b pb-2">
                {item.dropdown.length > 0 ? (
                  <button
                    onClick={() => toggleMobileDropdown(i)}
                    className="flex justify-between w-full font-medium"
                  >
                    {item.label}
                    <span>{mobileDropdown === i ? "−" : "+"}</span>
                  </button>
                ) : (
                  <Link
                    to={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="block w-full text-left font-medium py-2"
                  >
                    {item.label}
                  </Link>
                )}

                {mobileDropdown === i && item.dropdown.length > 0 && (
                  <div className="pl-3 mt-2">
                    {item.dropdown.map((sub, j) => (
                      <Link
                        key={j}
                        to={sub.href}
                        onClick={() => setMobileOpen(false)}
                        className="block py-1 text-sm hover:text-teal-700"
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </nav>

      {/* FORMS */}
      <QuoteForm show={showForm} close={() => setShowForm(false)} />
      <BeatMyQuote show={showGForm} close={() => setGShowForm(false)} />
    </>
  );
}
