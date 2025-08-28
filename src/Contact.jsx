import React from "react";

function ContactPage() {
  return (
    <div className="max-w-5xl mx-auto p-6 ">
      <h1 className="text-3xl font-bold mb-6 text-center text-sky-600">
        Contact Us
      </h1>

      <p className="text-gray-700 mb-6 text-center">
        Have questions or feedback? We’d love to hear from you! Fill out the form below and we’ll get back to you as soon as possible.
      </p>

      <form className="max-w-lg mx-auto bg-white p-6 rounded shadow-md">
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">
            Name
          </label>
          <input
            type="text"
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-400"
            placeholder="Your Name"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">
            Email
          </label>
          <input
            type="email"
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-400"
            placeholder="Your Email"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">
            Message
          </label>
          <textarea
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-400"
            placeholder="Your Message"
            rows="5"
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-sky-500 text-white font-semibold px-6 py-2 rounded hover:bg-sky-600"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

export default ContactPage;
