import React from "react";

function TermsAndConditionsPage() {
  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center text-sky-600">
        Terms and Conditions
      </h1>

      <section className="mb-4">
        <h2 className="text-2xl font-semibold mb-2">Introduction</h2>
        <p className="text-gray-700">
          Welcome to MyFakeStore. By using our website, you agree to comply with
          these terms and conditions. Please read them carefully before using
          our services.
        </p>
      </section>

      <section className="mb-4">
        <h2 className="text-2xl font-semibold mb-2">Use of Website</h2>
        <p className="text-gray-700">
          You may use our website only for lawful purposes. You must not use it
          in any way that could damage or interfere with the website's operation
          or security.
        </p>
      </section>

      <section className="mb-4">
        <h2 className="text-2xl font-semibold mb-2">Products and Orders</h2>
        <p className="text-gray-700">
          All products shown on MyFakeStore are for demonstration purposes. We
          aim to display product information accurately, but we cannot guarantee
          that all details are error-free.
        </p>
      </section>

      <section className="mb-4">
        <h2 className="text-2xl font-semibold mb-2">Payment and Transactions</h2>
        <p className="text-gray-700">
          All payments made on MyFakeStore are simulated. No real transactions
          occur. This store is for educational and demo purposes only.
        </p>
      </section>

      <section className="mb-4">
        <h2 className="text-2xl font-semibold mb-2">Limitation of Liability</h2>
        <p className="text-gray-700">
          MyFakeStore is not responsible for any damages or losses resulting
          from the use of this website. Use the website at your own risk.
        </p>
      </section>

      <section className="mb-4">
        <h2 className="text-2xl font-semibold mb-2">Contact Us</h2>
        <p className="text-gray-700">
          If you have any questions regarding these terms, please contact us
          via our <a href="/contact" className="text-sky-600 hover:underline">Contact Page</a>.
        </p>
      </section>

      <p className="text-center text-gray-800 font-medium mt-8">
        Thank you for visiting MyFakeStore. By using this site, you accept our terms and conditions.
      </p>
    </div>
  );
}

export default TermsAndConditionsPage;
