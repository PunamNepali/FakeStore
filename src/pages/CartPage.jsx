// import { useContext, useState } from "react";
// import { CartContext } from "../components/CartContext";
// import { toast } from "react-toastify";

// function CartPage() {
//   const { cartItems, removeFromCart, increaseQty, decreaseQty } =
//     useContext(CartContext);

//   const [loading, setLoading] = useState(false);

//   if (cartItems.length === 0)
//     return <p className="text-center mt-10">No items in cart.</p>;

//   const totalPrice = cartItems.reduce(
//     (sum, item) => sum + item.price * item.quantity,
//     0
//   );

//   // ✅ Checkout & send email
//   const handleCheckout = async () => {
//     setLoading(true);
//     try {
//       const res = await fetch("http://localhost:5000/send-order", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ cartItems, totalPrice }),
//       });

//       const data = await res.json();

//       if (data.success) {
//         toast.success("✅ Order placed! Confirmation email sent.");
//       } else {
//         toast.error("❌ Failed to send order email!");
//       }
//     } catch (err) {
//       toast.error("⚠️ Something went wrong!");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
//       {cartItems.map((item) => (
//         <div
//           key={item.id}
//           className="border rounded-lg p-6 mb-6 flex justify-between items-center shadow-md bg-white hover:bg-gray-50 transition duration-300"
//         >
//           <div className="flex gap-4 items-center">
//             <img
//               src={item.image}
//               alt={item.title}
//               className="h-20 w-20 object-contain"
//             />
//             <div>
//               <p className="font-semibold">{item.title}</p>
//               <p>Price: Rs {item.price}</p>
//               <div className="flex items-center gap-2 mt-2">
//                 <button
//                   onClick={() => decreaseQty(item.id)}
//                   className="px-3 py-1 border rounded"
//                 >
//                   -
//                 </button>
//                 <span>{item.quantity}</span>
//                 <button
//                   onClick={() => increaseQty(item.id)}
//                   className="px-3 py-1 border rounded"
//                 >
//                   +
//                 </button>
//               </div>
//             </div>
//           </div>
//           <button
//             onClick={() => removeFromCart(item.id)}
//             className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
//           >
//             Remove
//           </button>
//         </div>
//       ))}
//       <p className="mt-4 font-bold text-lg">Total: Rs {totalPrice}</p>

//       <button
//         onClick={handleCheckout}
//         disabled={loading}
//         className="mt-4 bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
//       >
//         {loading ? "Processing..." : "Checkout & Send Email"}
//       </button>
//     </div>
//   );
// }

// export default CartPage;

import { useContext } from "react";
import { CartContext } from "../components/CartContext";
import axios from "axios";
import { toast } from "react-toastify";

function CartPage() {
  const { cartItems, removeFromCart, increaseQty, decreaseQty } =
    useContext(CartContext);

  if (cartItems.length === 0)
    return <p className="text-center mt-10">No items in cart.</p>;

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handlePlaceOrder = async () => {
    try {
      // Dummy customer details (later you can get from Auth context / form)
      const orderData = {
        name: "Punam Nepali",
        customerEmail: "customer@gmail.com",
        cartItems,
        total: totalPrice,
      };

      const res = await axios.post("http://localhost:5000/order-confirmation", orderData);

      if (res.data.success) {
        toast.success(" Order placed! Check your email.");
      } else {
        toast.error(" Failed to place order.");
      }
    } catch (error) {
      console.error(error);
      toast.error(" Something went wrong!");
    }
  };

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

      {/* Place Order button */}
      <button
        onClick={handlePlaceOrder}
        className="mt-6 w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600"
      >
        Place Order
      </button>
    </div>
  );
}

export default CartPage;
