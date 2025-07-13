import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can send this data using EmailJS or any backend/API
    console.log(formData);
    alert("Message sent!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="bg-black py-20 px-4 text-white scroll-mt-8" id="contact">
      <h2 className="text-4xl font-bold text-center mb-12">Contact Me</h2>

      <form
        onSubmit={handleSubmit}
        className="max-w-xl mx-auto bg-gray-900 p-8 rounded-lg shadow-lg"
      >
        <div className="mb-6">
          <label className="block mb-2 text-lg font-medium">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your name"
          />
        </div>

        <div className="mb-6">
          <label className="block mb-2 text-lg font-medium">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your email"
          />
        </div>

        <div className="mb-6">
          <label className="block mb-2 text-lg font-medium">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="5"
            className="w-full px-4 py-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Type your message..."
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 transition-colors text-white py-3 rounded font-semibold cursor-pointer"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
