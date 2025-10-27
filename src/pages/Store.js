import React from "react";
import { useCart } from "../context/CartContext";

const sampleProducts = [
  {
    id: 1,
    name: "Oud Brown",
    price: 12000,
  },
  {
    id: 2,
    name: "Desire",
    price: 3200,
  },
  {
    id: 3,
    name: "Janan",
    price: 7500,
  },
];

function Store() {
  const { addToCart } = useCart();

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>🛍️ Our Products</h2>
      <div style={styles.grid}>
        {sampleProducts.map((product) => (
          <div key={product.id} style={styles.card}>
            <img src={product.image} alt={product.name} style={styles.image} />
            <h4>{product.name}</h4>
            <p>PKR {product.price.toLocaleString()}</p>
            <button
              style={styles.button}
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: { textAlign: "center", padding: "40px" },
  heading: { fontSize: "2rem", marginBottom: "30px" },
  grid: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "20px",
  },
  card: {
    border: "1px solid #ddd",
    borderRadius: "10px",
    padding: "20px",
    width: "250px",
    background: "#fff",
    boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
  },
  image: { width: "100%", borderRadius: "10px", marginBottom: "10px" },
  button: {
    background: "#007bff",
    color: "white",
    border: "none",
    padding: "8px 15px",
    borderRadius: "6px",
    cursor: "pointer",
  },
};

export default Store;
