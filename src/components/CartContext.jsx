// import { createContext, useState, useEffect } from "react";

// export const CartContext = createContext();

// export function CartProvider({ children }) {
//   const [cartItems, setCartItems] = useState([]);

//   // Function to load cart for a specific user
//   const loadCart = (user) => {
//     if (user) {
//       const savedCart = localStorage.getItem(`cart_${user.username}`);
//       setCartItems(savedCart ? JSON.parse(savedCart) : []);
//     } else {
//       setCartItems([]);
//     }
//   };

//   // Load cart on mount
//   useEffect(() => {
//     const currentUser = JSON.parse(localStorage.getItem("currentUser"));
//     loadCart(currentUser);
//   }, []);

//   // Subscribe to storage changes (login/logout in other tabs)
//   useEffect(() => {
//     const handleStorageChange = () => {
//       const currentUser = JSON.parse(localStorage.getItem("currentUser"));
//       loadCart(currentUser);
//     };
//     window.addEventListener("storage", handleStorageChange);
//     return () => window.removeEventListener("storage", handleStorageChange);
//   }, []);

//   // Save cart whenever it changes
//   useEffect(() => {
//     const currentUser = JSON.parse(localStorage.getItem("currentUser"));
//     if (currentUser) {
//       localStorage.setItem(`cart_${currentUser.username}`, JSON.stringify(cartItems));
//     }
//   }, [cartItems]);

//   const addToCart = (product) => {
//     setCartItems((prev) => {
//       const existing = prev.find((item) => item.id === product.id);
//       if (existing) {
//         return prev.map((item) =>
//           item.id === product.id
//             ? { ...item, quantity: item.quantity + (product.quantity || 1) }
//             : item
//         );
//       } else {
//         return [...prev, { ...product, quantity: product.quantity || 1 }];
//       }
//     });
//   };

//   const removeFromCart = (id) =>
//     setCartItems((prev) => prev.filter((item) => item.id !== id));

//   const increaseQty = (id) =>
//     setCartItems((prev) =>
//       prev.map((item) =>
//         item.id === id ? { ...item, quantity: item.quantity + 1 } : item
//       )
//     );

//   const decreaseQty = (id) =>
//     setCartItems((prev) =>
//       prev.map((item) =>
//         item.id === id && item.quantity > 1
//           ? { ...item, quantity: item.quantity - 1 }
//           : item
//       )
//     );

//   return (
//     <CartContext.Provider
//       value={{ cartItems, addToCart, removeFromCart, increaseQty, decreaseQty }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// }

import { createContext, useState, useEffect, useContext } from "react";
import { useAuth } from "./AuthContext"; // your AuthContext

export const CartContext = createContext();

export function CartProvider({ children }) {
  const { currentUser } = useAuth(); // get current logged-in user
  const [cartItems, setCartItems] = useState([]);

  // Load cart whenever the logged-in user changes
  useEffect(() => {
    if (currentUser) {
      const savedCart = localStorage.getItem(`cart_${currentUser.username}`);
      setCartItems(savedCart ? JSON.parse(savedCart) : []);
    } else {
      setCartItems([]); // user logged out
    }
  }, [currentUser]);

  // Save cart whenever it changes
  useEffect(() => {
    if (currentUser) {
      localStorage.setItem(`cart_${currentUser.username}`, JSON.stringify(cartItems));
    }
  }, [cartItems, currentUser]);

  const addToCart = (product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + (product.quantity || 1) }
            : item
        );
      } else {
        return [...prev, { ...product, quantity: product.quantity || 1 }];
      }
    });
  };

  const removeFromCart = (id) =>
    setCartItems((prev) => prev.filter((item) => item.id !== id));

  const increaseQty = (id) =>
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );

  const decreaseQty = (id) =>
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, increaseQty, decreaseQty }}
    >
      {children}
    </CartContext.Provider>
  );
}
