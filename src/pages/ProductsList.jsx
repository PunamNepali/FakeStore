import { useEffect, useState } from "react";
import { Link, useParams, useLocation } from "react-router-dom";
import axios from "axios";
import Carousel from "../components/Carousel"; //  Import Carousel

function ProductsList() {
  const { category } = useParams(); // e.g. /category/electronics
  const location = useLocation();

  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);

  //  Get search query from URL
  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get("search") || "";

  // Fetch products (all or by category)
  useEffect(() => {
    const categoryDecoded = category ? decodeURIComponent(category) : "";
    const url = categoryDecoded
      ? `https://fakestoreapi.com/products/category/${categoryDecoded}`
      : "https://fakestoreapi.com/products";

    axios
      .get(url)
      .then((res) => {
        setProducts(res.data);
        setFiltered(res.data);
      })
      .catch((err) => console.error(err));
  }, [category]);

  // Apply search filter when query changes
  useEffect(() => {
    if (searchQuery) {
      const results = products.filter((p) =>
        p.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFiltered(results);
    } else {
      setFiltered(products);
    }
  }, [searchQuery, products]);

  return (
    <div className="p-4">
      {/*  Carousel added */}
      <Carousel />

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
        {filtered.length > 0 ? (
          filtered.map((product) => (
            <Link key={product.id} to={`/product/${product.id}`}>
              <div className="border p-4 rounded shadow hover:shadow-lg transition flex flex-col h-full">
                <img
                  src={product.image ? encodeURI(product.image) : "/placeholder.png"} 
                  alt={product.title}
                  className="h-40 w-full object-contain mb-2"
                />
                <h2 className="font-semibold text-sm md:text-base">{product.title}</h2>
                <p className="text-orange-600 font-medium mt-1">Rs {product.price}</p>
                <p className="text-xs text-black mt-1">{product.category}</p>
                <p className="text-xs text-yellow-600 mt-1">
                  ⭐ {product.rating?.rate || 0} ({product.rating?.count || 0})
                </p>
              </div>
            </Link>
          ))
        ) : (
          <p className="col-span-4 text-center text-gray-500">
            No products found {searchQuery && <>for "<b>{searchQuery}</b>"</>}
          </p>
        )}
      </div>
    </div>
  );
}

export default ProductsList;


// import { useEffect, useState } from "react";
// import { Link, useParams, useLocation } from "react-router-dom";
// import axios from "axios";
// import Carousel from "../components/Carousel";

// function ProductsList() {
//   const { category } = useParams();
//   const location = useLocation();

//   const [products, setProducts] = useState([]);
//   const [filtered, setFiltered] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const queryParams = new URLSearchParams(location.search);
//   const searchQuery = queryParams.get("search") || "";

//   // Fetch products
//   useEffect(() => {
//     setLoading(true);
//     setError(null);

//     const categoryDecoded = category ? decodeURIComponent(category) : "";
//     const url = categoryDecoded
//       ? `https://fakestoreapi.com/products/category/${categoryDecoded}`
//       : "https://fakestoreapi.com/products";

//     axios
//       .get(url)
//       .then((res) => {
//         setProducts(res.data);
//         setFiltered(res.data);
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.error("Products API Error:", err.response || err);
//         setError("Failed to load products. Please try again later.");
//         setLoading(false);
//       });
//   }, [category]);

//   // Apply search filter
//   useEffect(() => {
//     if (searchQuery) {
//       const results = products.filter((p) =>
//         p.title.toLowerCase().includes(searchQuery.toLowerCase())
//       );
//       setFiltered(results);
//     } else {
//       setFiltered(products);
//     }
//   }, [searchQuery, products]);

//   if (loading) return <p className="text-center mt-10">Loading products...</p>;
//   if (error) return <p className="text-center mt-10 text-red-500">{error}</p>;

//   return (
//     <div className="p-4">
//       {/* Carousel */}
//       <Carousel />

//       {/* Products Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
//         {filtered.length > 0 ? (
//           filtered.map((product) => (
//             <Link key={product.id} to={`/product/${product.id}`}>
//               <div className="border p-4 rounded shadow hover:shadow-lg transition flex flex-col h-full">
//                 <img
//                   src={product.image ? encodeURI(product.image) : "/placeholder.png"}
//                   alt={product.title}
//                   className="h-40 w-full object-contain mb-2"
//                 />
//                 <h2 className="font-semibold text-sm md:text-base">{product.title}</h2>
//                 <p className="text-orange-600 font-medium mt-1">Rs {product.price}</p>
//                 <p className="text-xs text-black mt-1">{product.category}</p>
//                 <p className="text-xs text-yellow-600 mt-1">
//                   ⭐ {product.rating?.rate || 0} ({product.rating?.count || 0})
//                 </p>
//               </div>
//             </Link>
//           ))
//         ) : (
//           <p className="col-span-4 text-center text-gray-500">
//             No products found {searchQuery && <>for "<b>{searchQuery}</b>"</>}
//           </p>
//         )}
//       </div>
//     </div>
//   );
// }

// export default ProductsList;

