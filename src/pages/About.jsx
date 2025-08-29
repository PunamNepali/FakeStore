import React from "react";
function AboutPage() {
  return (
    <div className="max-w-5xl mx-auto p-4 ">
      <h1 className="text-3xl font-bold mb-6 text-center text-sky-600">
        Welcome to MyFakeStore
      </h1>

      {/* Who We Are */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Who We Are</h2>
        <p className="text-gray-700">
          MyFakeStore is your one-stop online shop for all your needs. We
          offer a wide range of products from electronics, fashion, home
          essentials, and more. Our goal is to make shopping easy, fun, and
          convenient for everyone.
        </p>
      </section>

      {/* What We Do */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">What We Do</h2>
        <p className="text-gray-700">
          At MyFakeStore, we carefully curate products from around the world to
          provide quality and variety. Whether you’re looking for the latest
          gadgets, trendy apparel, or unique gifts, we have something for
          everyone.
        </p>
      </section>

      {/* Our Mission */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Our Mission</h2>
        <p className="text-gray-700">
          Our mission is to bring a seamless online shopping experience to
          users everywhere. We focus on providing intuitive navigation, secure
          checkout, and excellent customer service, so shopping is hassle-free.
        </p>
      </section>

      {/* Why Choose Us */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Why Choose Us</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>Wide variety of products</li>
          <li>Easy and secure checkout</li>
          <li>Responsive customer support</li>
          <li>Fast and reliable service</li>
        </ul>
      </section>

      {/* Closing Line */}
      <p className="text-center text-gray-800 font-medium mt-8">
        Thank you for visiting MyFakeStore We hope you enjoy your shopping
        experience and come back often.
      </p>
    </div>
  );
}

export default AboutPage;
