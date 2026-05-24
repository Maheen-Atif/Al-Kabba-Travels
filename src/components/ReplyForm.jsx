import { useState } from "react";

export function ReplyForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Request Submitted Successfully!");

    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  return (
    <>
      <div className="py-10 px-4 sm:px-6 md:px-10 lg:px-20">
        <h1 className="text-2xl font-bold mb-3 text-center">
          We’d Love to Hear From You
        </h1>

        <p className=" text-center mb-6 text-gray-600">
          Whether you have questions, feedback, or just want to say hello, we’re
          here to connect.
        </p>

        <form
          onSubmit={handleSubmit}
          className="
    bg-gray-200
    p-4 sm:p-6 md:p-8
    grid
    grid-cols-1 sm:grid-cols-2
    gap-5
    rounded-lg
    max-w-4xl
    mx-auto
  "
        >
          <input
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
            placeholder="First Name*"
            className="p-4 rounded bg-white w-full"
          />
          <input
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
            placeholder="Last Name*"
            className="p-4 rounded bg-white w-full"
          />
          <input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Email*"
            className="p-4 rounded bg-white w-full"
          />

          <input
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            placeholder="Phone*"
            className="p-4 rounded bg-white w-full"
          />

          <input
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            placeholder="Subject*"
            className="p-4 rounded bg-white w-full sm:col-span-2"
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            placeholder="Write Your Message..."
            rows="5"
            className="p-4 rounded bg-white w-full sm:col-span-2 resize-none"
          />

          <button
            type="submit"
            className="bg-teal-700 py-4 rounded-full font-bold w-full sm:col-span-2 hover:bg-teal-800 transition"
          >
            Submit Request
          </button>
        </form>
      </div>
    </>
  );
}
