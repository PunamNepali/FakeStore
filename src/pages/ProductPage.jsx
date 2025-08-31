import { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { CartContext } from "../components/CartContext";
import { useAuth } from "../components/AuthContext"; // adjust path

function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const { addToCart } = useContext(CartContext);
  const { currentUser } = useAuth(); //check logged-in user
  const navigate = useNavigate();

  useEffect(() => {
    if (!id) return;
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.error(err));
  }, [id]);

  if (!product) return <p className="text-center mt-10">Loading...</p>;

  const increaseQty = () => setQuantity((prev) => prev + 1);
  const decreaseQty = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const handleAddToCart = () => {
    if (!currentUser) {
      // Redirect to login if not logged in
      navigate("/auth");
      return;
    }

    addToCart({
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.image,
      quantity,
    });

    alert(`${product.title} added to cart!`);
  };

  return (
    <div className="flex justify-center p-4">
      <div className="w-full sm:w-3/4 md:w-1/2 lg:w-1/3 border rounded shadow hover:shadow-lg transition flex flex-col md:flex-row p-6 gap-10">
        {/* Product Image */}
        <div className="flex justify-center items-center w-full md:w-1/2">
          <img
            src={product.image ? encodeURI(product.image) : "/placeholder.png"}
            alt={product.title}
            className="h-60 w-full object-contain mb-4"
          />
        </div>

        {/* Product Details */}
        <div className="flex flex-col justify-center w-full md:w-1/2 text-left self-center">
          <h1 className="font-semibold text-sm md:text-base">{product.title}</h1>
          <p className="text-orange-600 font-medium mt-2">Rs {product.price}</p>
          <p className="text-xs text-black mt-2">{product.category}</p>
          <p className="text-xs text-yellow-600 mt-1">
            ⭐ {product.rating?.rate || 0} ({product.rating?.count || 0})
          </p>

          {/* Quantity */}
          <div className="flex items-center gap-4 mt-6">
            <span className="font-medium">Quantity:</span>
            <div className="flex items-center border rounded-lg">
              <button
                onClick={decreaseQty}
                className="px-3 py-1 text-lg font-bold border-r"
              >
                -
              </button>
              <span className="px-4">{quantity}</span>
              <button
                onClick={increaseQty}
                className="px-3 py-1 text-lg font-bold border-l"
              >
                +
              </button>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 pb-12 mt-4">
            <button className="flex-1 bg-sky-500 hover:bg-sky-600 text-white font-semibold py-2 px-4 rounded-lg">
              Buy Now
            </button>
            <button
              onClick={handleAddToCart}
              className="flex-1 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-lg"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
