import React from "react";
import emailjs from "emailjs-com";

function ContactPage() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_fnwnjtf", // Replace with your Service ID
        "template_3wvxh4u", // Replace with your Template ID
        e.target,
        "jAoRTEH8gtHsLnzbm" // Replace with your User ID
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
        },
        (error) => {
          alert("Failed to send message: " + error.text);
        }
      );

    e.target.reset(); // clear the form
  }

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center text-sky-600">Contact Us</h1>

      <form onSubmit={sendEmail} className="max-w-lg mx-auto bg-white p-6 rounded shadow-md">
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Name</label>
          <input
            type="text"
            name="name"
            className="w-full border rounded px-3 py-2"
            placeholder="Your Name"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Email</label>
          <input
            type="email"
            name="email"
            className="w-full border rounded px-3 py-2"
            placeholder="Your Email"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Message</label>
          <textarea
            name="message"
            className="w-full border rounded px-3 py-2"
            placeholder="Your Message"
            rows="5"
            required
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
