import React from "react";
import { useCart } from "../context/CartContext";

function Cart() {
  const { cartItems, removeFromCart, clearCart } = useCart();

  const total = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>🛒 Your Cart</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div style={styles.list}>
            {cartItems.map((item) => (
              <div key={item.id} style={styles.item}>
                <img src={item.image} alt={item.name} style={styles.image} />
                <div>
                  <h4>{item.name}</h4>
                  <p>PKR {item.price.toLocaleString()}</p>
                  <button
                    style={styles.removeBtn}
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <h3 style={styles.total}>Total: PKR {total.toLocaleString()}</h3>

          <button style={styles.clearBtn} onClick={clearCart}>
            Clear Cart
          </button>
        </>
      )}
    </div>
  );
}

const styles = {
  container: { textAlign: "center", padding: "50px" },
  heading: { marginBottom: "30px" },
  list: { display: "flex", flexDirection: "column", alignItems: "center" },
  item: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "400px",
    marginBottom: "20px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "10px",
  },
  image: { width: "70px", borderRadius: "8px" },
  removeBtn: {
    background: "red",
    color: "white",
    border: "none",
    padding: "5px 10px",
    borderRadius: "5px",
    cursor: "pointer",
  },
  clearBtn: {
    background: "#444",
    color: "white",
    padding: "10px 20px",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    marginTop: "20px",
  },
  total: { marginTop: "30px" },
};

export default Cart;
