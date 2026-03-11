// src/pages/Contact.jsx
import React from "react";

const Contact = () => {
  return (
    <div className="font-sans">
      {/* Header Section */}
      <header className="bg-white py-10 px-6 text-center">
        <h1 className="text-4xl font-bold mb-2">Contact Us</h1>
        <p className="text-gray-600">
          We'd love to talk about how we can work together
        </p>
      </header>

      {/* Main Section */}
      <main className="px-6 md:px-20 lg:px-40 py-10 space-y-10">
        {/* Left Image */}
        <div className="flex justify-center">
          <img
            src="/assets/fruit.png" // sizning rasmingizni assets papkaga qo'ying
            alt="Fruits"
            className="w-64 h-64 object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Contact Info Card */}
        <div className="bg-green-100 p-6 rounded-lg shadow-md max-w-md mx-auto">
          <h2 className="text-2xl font-bold mb-2">Our Farms</h2>
          <p className="text-gray-700 mb-4">
            123 Green Road, Tashkent, Uzbekistan
          </p>
          <p className="text-gray-700 mb-2">Email: info@organick.com</p>
          <p className="text-gray-700">Phone: +998 90 123 45 67</p>
        </div>

        {/* Contact Form */}
        <form className="max-w-lg mx-auto space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="Full Name"
              className="flex-1 border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-green-400"
            />
            <input
              type="email"
              placeholder="Email"
              className="flex-1 border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-green-400"
            />
          </div>
          <textarea
            placeholder="Message"
            className="w-full border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-green-400"
            rows="5"
          />
          <button
            type="submit"
            className="bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-600 transition"
          >
            Send Message
          </button>
        </form>
      </main>

      {/* Newsletter */}
      <section className="bg-blue-100 py-10 px-6 text-center">
        <h2 className="text-2xl font-bold mb-4">Subscribe to our Newsletter</h2>
        <div className="flex justify-center gap-2 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Your email"
            className="flex-1 border border-gray-300 p-3 rounded-l-md focus:ring-2 focus:ring-blue-400"
          />
          <button className="bg-blue-500 text-white px-4 rounded-r-md hover:bg-blue-600 transition">
            Subscribe
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 py-6 px-6 text-center text-gray-600">
        © 2026 Organick. All rights reserved.
      </footer>
    </div>
  );
};

export default Contact;