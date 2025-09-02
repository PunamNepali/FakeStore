// import { useEffect, useState } from "react";
// import axios from "axios";

// function Carousel() {
//   const [products, setProducts] = useState([]);
//   const [current, setCurrent] = useState(0);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     axios
//       .get("https://fakestoreapi.com/products?limit=5")
//       .then((res) => {
//         setProducts(res.data);
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.error("Carousel API Error:", err.response || err);
//         setError("Failed to load carousel products.");
//         setLoading(false);
//       });
//   }, []);

//   const nextSlide = () =>
//     setCurrent((prev) => (prev + 1) % products.length);
//   const prevSlide = () =>
//     setCurrent((prev) => (prev - 1 + products.length) % products.length);

//   if (loading) return <p className="text-center my-4">Loading carousel...</p>;
//   if (error) return <p className="text-center my-4 text-red-500">{error}</p>;
//   if (!products.length) return null;

//   return (
//     <div className="relative w-full max-w-5xl mx-auto mb-6 overflow-hidden rounded shadow-lg h-64">
//       {/* Slides */}
//       {products.map((product, index) => (
//         <div
//           key={product.id}
//           className="absolute top-0 left-0 w-full h-full transition-transform duration-500"
//           style={{ transform: `translateX(${100 * (index - current)}%)` }}
//         >
//           <img
//             src={product.image}
//             alt={product.title}
//             className="w-full h-full object-contain bg-white"
//           />
//           <div className="p-4 bg-gray-100 absolute bottom-0 w-full">
//             <h2 className="text-lg font-semibold">{product.title}</h2>
//             <p className="text-orange-600 font-medium">Rs {product.price}</p>
//           </div>
//         </div>
//       ))}

//       {/* Buttons */}
//       <button
//         onClick={prevSlide}
//         className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full hover:bg-gray-900"
//       >
//         &#8592;
//       </button>
//       <button
//         onClick={nextSlide}
//         className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full hover:bg-gray-900"
//       >
//         &#8594;
//       </button>
//     </div>
//   );
// }

// export default Carousel;

import { useEffect, useState } from "react";
import axios from "axios";

function Carousel() {
  const [products, setProducts] = useState([]);
  const [current, setCurrent] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch top 5 products
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products?limit=8")
      .then((res) => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Carousel API Error:", err.response || err);
        setError("Failed to load carousel products.");
        setLoading(false);
      });
  }, []);

  // Auto-slide after products are loaded
  useEffect(() => {
    if (products.length === 0) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % products.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [products]);

  const nextSlide = () =>
    setCurrent((prev) => (prev + 1) % products.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + products.length) % products.length);

  if (loading) return <p className="text-center my-4">Loading carousel...</p>;
  if (error) return <p className="text-center my-4 text-red-500">{error}</p>;
  if (!products.length) return null;

  return (
    <div className="relative w-full max-w-5xl mx-auto mb-8 overflow-hidden rounded-lg shadow-lg min-h-[16rem] sm:min-h-[20rem] md:min-h-[24rem]">
      {/* Slides */}
      {products.map((product, index) => (
        <div
          key={product.id}
          className="absolute top-0 left-0 w-full h-full transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(${100 * (index - current)}%)` }}
        >
          {/* Image */}
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-contain bg-gray-100 hover:scale-105 transition-transform duration-500"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          {/* Text Overlay */}
          <div className="absolute bottom-0 p-4 text-white">
            <h2 className="text-lg sm:text-xl font-bold">{product.title}</h2>
            <p className="text-orange-400 font-semibold">Rs {product.price}</p>
          </div>
        </div>
      ))}

      {/* Buttons */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-2 -translate-y-1/2 bg-gray-700/70 text-white p-3 rounded-full hover:bg-gray-900 transition"
      >
        &#8592;
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-2 -translate-y-1/2 bg-gray-700/70 text-white p-3 rounded-full hover:bg-gray-900 transition"
      >
        &#8594;
      </button>
    </div>
  );
}

export default Carousel;
