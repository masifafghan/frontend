import { Link } from "react-router-dom";

function Home() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Welcome to Sentiments Electronics 🛒</h1>
      <p>Your one-stop shop for the latest gadgets and electronics!</p>
      <Link to="/store" style={{ background: "#007bff", color: "white", padding: "10px 20px", borderRadius: "8px", textDecoration: "none" }}>
        Go to Store
      </Link>
    </div>
  );
}

export default Home;
