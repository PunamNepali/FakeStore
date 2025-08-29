import React from "react";

function PrivacyPolicyPage() {
  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center text-sky-600">
        Privacy Policy
      </h1>

      <p className="text-gray-700 mb-4">
        At MyFakeStore, we value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your data.
      </p>

      <section className="mb-4">
        <h2 className="text-2xl font-semibold mb-2">Information We Collect</h2>
        <p className="text-gray-700">
          We may collect information such as your name, email address, shipping address, and payment details when you make a purchase or contact us.
        </p>
      </section>

      <section className="mb-4">
        <h2 className="text-2xl font-semibold mb-2">How We Use Your Information</h2>
        <p className="text-gray-700">
          Your information is used to process orders, provide customer support, improve our services, and communicate updates or promotions. We do not sell your personal information to third parties.
        </p>
      </section>

      <section className="mb-4">
        <h2 className="text-2xl font-semibold mb-2">Cookies</h2>
        <p className="text-gray-700">
          Our website uses cookies to enhance user experience, remember preferences, and track website usage. You can disable cookies in your browser settings.
        </p>
      </section>

      <section className="mb-4">
        <h2 className="text-2xl font-semibold mb-2">Security</h2>
        <p className="text-gray-700">
          We implement industry-standard measures to protect your personal information from unauthorized access, alteration, or disclosure.
        </p>
      </section>

      <section className="mb-4">
        <h2 className="text-2xl font-semibold mb-2">Contact Us</h2>
        <p className="text-gray-700">
          If you have any questions or concerns about this Privacy Policy, please contact us via our <a href="/contact" className="text-sky-600 hover:underline">Contact Page</a>.
        </p>
      </section>

      <p className="text-center text-gray-800 font-medium mt-8">
        Thank you for trusting MyFakeStore. We respect your privacy and aim to provide a safe shopping experience.
      </p>
    </div>
  );
}

export default PrivacyPolicyPage;
