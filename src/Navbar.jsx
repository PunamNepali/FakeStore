import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { CartContext } from "./CartContext"; // ✅ Import context
import { ShoppingCart } from "lucide-react"; // ✅ Cart icon

function Navbar() {
  const [categories, setCategories] = useState([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const { cartItems } = useContext(CartContext); // ✅ Get cart items

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products/categories")
      .then((res) => setCategories(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <nav className="bg-sky-500 p-4 flex justify-between items-center w-full top-0 left-0 z-50 fixed">
      {/* Logo */}
      <Link to="/" className="text-white font-bold text-4xl">
        MyFakeStore
      </Link>

      <div className="flex items-center gap-6">
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
