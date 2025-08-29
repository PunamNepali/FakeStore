import { useContext } from "react";
import { CartContext } from "../components/CartContext";


function CartPage() {
  const { cartItems, removeFromCart, increaseQty, decreaseQty } =
    useContext(CartContext);

  if (cartItems.length === 0)
    return <p className="text-center mt-10">No items in cart.</p>;

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      {cartItems.map((item) => (
        <div
          key={item.id}
          className="border rounded-lg p-6 mb-6 flex justify-between items-center shadow-md bg-white hover:bg-gray-50 transition duration-300"
        >
          <div className="flex gap-4 items-center">
            <img
              src={item.image}
              alt={item.title}
              className="h-20 w-20 object-contain"
            />
            <div>
              <p className="font-semibold">{item.title}</p>
              <p>Price: Rs {item.price}</p>
              <div className="flex items-center gap-2 mt-2">
                <button
                  onClick={() => decreaseQty(item.id)}
                  className="px-3 py-1 border rounded"
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  onClick={() => increaseQty(item.id)}
                  className="px-3 py-1 border rounded"
                >
                  +
                </button>
              </div>
            </div>
          </div>
          <button
            onClick={() => removeFromCart(item.id)}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Remove
          </button>
        </div>
      ))}
      <p className="mt-4 font-bold text-lg">Total: Rs {totalPrice}</p>
    </div>
  );
}

export default CartPage;
