// // src/components/Navbar.jsx
// import { useState, useContext, useEffect } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import { CartContext } from "./CartContext";
// import { ShoppingCart } from "lucide-react";
// import { useAuth } from "./AuthContext"; // Correct relative path

// function Navbar() {
//   const [categories, setCategories] = useState([]);
//   const [dropdownOpen, setDropdownOpen] = useState(false);

//   const { cartItems } = useContext(CartContext);

//   // Safe access to auth context
//   const auth = useAuth();
//   const currentUser = auth?.currentUser;
//   const logout = auth?.logout;

//   useEffect(() => {
//     axios
//       .get("https://fakestoreapi.com/products/categories")
//       .then((res) => setCategories(res.data))
//       .catch((err) => console.error(err));
//   }, []);

//   return (
//     <nav className="bg-sky-500 p-4 flex justify-between items-center w-full top-0 left-0 z-50 fixed">
//       {/* Logo */}
//       <Link to="/" className="text-white font-bold text-4xl">
//         MyFakeStore
//       </Link>

//       <div className="flex items-center gap-6">
//         {/* Categories Dropdown */}
//         <div className="relative">
//           <button
//             onClick={() => setDropdownOpen(!dropdownOpen)}
//             className="text-white font-semibold px-4 py-2 bg-sky-600 rounded-lg hover:bg-sky-700"
//           >
//             Categories
//           </button>

//           {dropdownOpen && (
//             <ul className="absolute right-0 mt-2 bg-gray-200 shadow-lg rounded w-48 z-50">
//               <li>
//                 <Link
//                   to="/"
//                   className="block px-4 py-2 hover:bg-white"
//                   onClick={() => setDropdownOpen(false)}
//                 >
//                   All
//                 </Link>
//               </li>
//               {categories.map((cat) => (
//                 <li key={cat}>
//                   <Link
//                     to={`/category/${encodeURIComponent(cat)}`}
//                     className="block px-4 py-2 capitalize hover:bg-white"
//                     onClick={() => setDropdownOpen(false)}
//                   >
//                     {cat}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           )}
//         </div>

//         {/* Login/Signup or Profile */}
//         <div className="flex items-center gap-4 text-white">
//           {!currentUser ? (
//             <Link to="/auth" className="hover:underline">
//               Login / Signup
//             </Link>
//           ) : (
//             <>
//               <span>Hi, {currentUser.username}</span>
//               <button
//                 onClick={logout}
//                 className="bg-red-500 px-2 py-1 rounded"
//               >
//                 Logout
//               </button>
//             </>
//           )}
//         </div>

//         {/* Cart Icon */}
//         <Link to="/cart" className="relative text-white">
//           <ShoppingCart size={28} />
//           {cartItems.length > 0 && (
//             <span className="absolute -top-2 -right-3 bg-red-500 text-xs rounded-full px-2">
//               {cartItems.length}
//             </span>
//           )}
//         </Link>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;

// src/components/Navbar.jsx
import { useState, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { CartContext } from "./CartContext";
import { ShoppingCart } from "lucide-react";
import { useAuth } from "./AuthContext"; // Correct relative path

function Navbar() {
  const [categories, setCategories] = useState([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [search, setSearch] = useState(""); // 🔍 search state

  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  // Safe access to auth context
  const auth = useAuth();
  const currentUser = auth?.currentUser;
  const logout = auth?.logout;

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products/categories")
      .then((res) => setCategories(res.data))
      .catch((err) => console.error(err));
  }, []);

  // 🔍 Handle Search
  const handleSearch = (e) => {
    e.preventDefault();
    if (search.trim()) {
      navigate(`/products?search=${search}`);
    }
  };

  return (
    <nav className="bg-sky-500 p-4 flex justify-between items-center w-full top-0 left-0 z-50 fixed">
      {/* Logo */}
      <Link to="/" className="text-white font-bold text-3xl">
        MyFakeStore
      </Link>

      <div className="flex items-center gap-6">
        {/* 🔍 Search Bar */}
        <form onSubmit={handleSearch} className="flex">
          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="px-3 py-1 rounded-l-lg text-black"
          />
          <button
            type="submit"
            className="bg-white text-sky-600 px-3 py-1 rounded-r-lg font-semibold"
          >
            🔍
          </button>
        </form>

        {/* Categories Dropdown */}
        <div className="relative">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="text-white font-semibold px-4 py-2 bg-sky-600 rounded-lg hover:bg-sky-700"
          >
            Categories
          </button>

          {dropdownOpen && (
            <ul className="absolute right-0 mt-2 bg-gray-200 shadow-lg rounded w-48 z-50">
              <li>
                <Link
                  to="/"
                  className="block px-4 py-2 hover:bg-white"
                  onClick={() => setDropdownOpen(false)}
                >
                  All
                </Link>
              </li>
              {categories.map((cat) => (
                <li key={cat}>
                  <Link
                    to={`/category/${encodeURIComponent(cat)}`}
                    className="block px-4 py-2 capitalize hover:bg-white"
                    onClick={() => setDropdownOpen(false)}
                  >
                    {cat}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Login/Signup or Profile */}
        <div className="flex items-center gap-4 text-white">
          {!currentUser ? (
            <Link to="/auth" className="hover:underline">
              Login / Signup
            </Link>
          ) : (
            <>
              <span>Hi, {currentUser.username}</span>
              <button
                onClick={logout}
                className="bg-red-500 px-2 py-1 rounded"
              >
                Logout
              </button>
            </>
          )}
        </div>

        {/* Cart Icon */}
        <Link to="/cart" className="relative text-white">
          <ShoppingCart size={28} />
          {cartItems.length > 0 && (
            <span className="absolute -top-2 -right-3 bg-red-500 text-xs rounded-full px-2">
              {cartItems.length}
            </span>
          )}
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
