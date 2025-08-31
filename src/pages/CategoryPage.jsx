
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

function CategoryPage() {
  const { category } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const categoryDecoded = category ? decodeURIComponent(category) : "";
    const url = categoryDecoded
      ? `https://fakestoreapi.com/products/category/${categoryDecoded}`
      : "https://fakestoreapi.com/products";

    axios
      .get(url)
      .then((res) => {
        console.log(res.data); 
        setProducts(res.data);
      })
      .catch((err) => console.error(err));
  }, [category]);

  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <Link key={product.id} to={`/product/${product.id}`}>
          <div className="border p-4 rounded shadow hover:shadow-lg transition flex flex-col h-full">
            <img
              src={product.image ? encodeURI(product.image) : "/placeholder.png"} 
              alt={product.title}
              className="h-40 w-full object-contain mb-2"
            />
            <h2 className="font-semibold text-sm md:text-base">
              {product.title}
            </h2>
            <p className="text-orange-600 font-medium mt-1">Rs {product.price}</p>
            <p className="text-xs text-black mt-1">{product.category}</p>
            <p className="text-xs text-yellow-600 mt-1">
              ⭐ {product.rating?.rate || 0} ({product.rating?.count || 0})
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default CategoryPage;
