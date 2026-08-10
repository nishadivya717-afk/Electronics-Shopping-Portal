import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export default function CartProvider({ children }) {
  // ================= CART STATE =================

  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");

    return savedCart ? JSON.parse(savedCart) : [];
  });

  // ================= SAVE CART =================

  useEffect(() => {
    localStorage.setItem(
      "cart",
      JSON.stringify(cart)
    );
  }, [cart]);

  // ================= ADD TO CART =================

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find(
        (item) => item.id === product.id
      );

      // Product already exists
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        );
      }

      // New product
      return [
        ...prevCart,
        {
          ...product,
          quantity: 1,
        },
      ];
    });
  };

  // ================= INCREASE QUANTITY =================

  const increaseQuantity = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      )
    );
  };

  // ================= DECREASE QUANTITY =================

  const decreaseQuantity = (id) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === id
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  // ================= REMOVE PRODUCT =================

  const removeFromCart = (id) => {
    setCart((prevCart) =>
      prevCart.filter(
        (item) => item.id !== id
      )
    );
  };

  // ================= CLEAR CART =================

  const clearCart = () => {
    setCart([]);
  };

  // ================= CART COUNT =================

  const cartCount = cart.reduce(
    (total, item) =>
      total + (item.quantity || 1),
    0
  );

  // ================= CART TOTAL =================

  const cartTotal = cart.reduce(
    (total, item) =>
      total +
      Number(item.price || 0) *
        (item.quantity || 1),
    0
  );

  // ================= PROVIDER =================

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
        clearCart,
        cartCount,
        cartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}