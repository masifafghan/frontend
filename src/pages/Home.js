import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div style={styles.container}>
      <header style={styles.hero}>
        <h1 style={styles.title}>Welcome to Sentiments Electronics ⚡</h1>
        <p style={styles.subtitle}>
          Discover the latest gadgets, mobile phones, and accessories — all in one place!
        </p>
        <Link to="/store" style={styles.button}>
          Shop Now
        </Link>
      </header>

      <section style={styles.features}>
        <div style={styles.featureBox}>
          <h3>🚚 Fast Delivery</h3>
          <p>We deliver your electronics anywhere in Pakistan within 3-5 days.</p>
        </div>
        <div style={styles.featureBox}>
          <h3>💳 Secure Payment</h3>
          <p>All transactions are fully encrypted for your safety and confidence.</p>
        </div>
        <div style={styles.featureBox}>
          <h3>⭐ Quality Guaranteed</h3>
          <p>We only sell 100% original and tested products.</p>
        </div>
      </section>
    </div>
  );
}

const styles = {
  container: { textAlign: "center", padding: "50px" },
  hero: {
    backgroundColor: "#111",
    color: "#fff",
    padding: "80px 20px",
    borderRadius: "12px",
  },
  title: { fontSize: "2.5rem", marginBottom: "10px" },
  subtitle: { fontSize: "1.1rem", marginBottom: "30px" },
  button: {
    backgroundColor: "#007bff",
    color: "white",
    padding: "12px 30px",
    borderRadius: "8px",
    textDecoration: "none",
    fontWeight: "bold",
  },
  features: {
    display: "flex",
    justifyContent: "space-around",
    marginTop: "60px",
    flexWrap: "wrap",
  },
  featureBox: {
    background: "#f7f7f7",
    padding: "20px",
    borderRadius: "10px",
    width: "280px",
    margin: "10px",
  },
};

export default Home;
