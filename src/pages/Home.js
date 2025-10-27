import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
    <nav className="navbar navbar-expand-sm text-light bg-dark">
        <div className="container-fluid">
          <button className="navbar-toggler"  type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mb-2 mb-lg-0 m-auto">
              <li className="nav-item">
                <Link className="nav-link text-white" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/store">Store</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/about">About</Link>
              </li>
            </ul>
            <span className="navbar-brand m-auto text-white">Sentiments</span>
          </div>
        </div>
      </nav>
    <div className="bg-dark">
      <section className="d-block m-1">
        <div className="w-100 border border-dark ms-1">
         <img className="w-100 h-100 rounded" src="\pic\bg1.jpg" alt="Background" />            
        </div>
      </section>
      <section className="d-flex m-1">
         <div className="w-50 border border-white ms-1 text-white">
           <h3>About</h3>
            <p>
            Refers to the feelings, opinions, or attitudes that people hold toward a
            particular topic, person, or issue.
            </p>
         </div>
         <div className="w-50 border border-warning">
           <img className="w-100 h-100 rounded" src="\pic\bg1.jpg" alt="About" />
         </div>
       </section>
       <section className="d-flex m-1">
        <div className="w-50 border border-warning ms-1">
         <img className="w-100 h-100 rounded" src="\pic\bg1.jpg" alt="Gallery" />
        </div>
        <div className="w-50 border border-white"></div>
        </section>
        <section className="d-flex" id="dev">
          <h1 className="text-white mx-auto mt-5">Asif</h1>
            <div className="mx-auto mt-5">
              <Link className="nav-link text-white" to="/store">Shop</Link>
              <Link className="nav-link text-white" to="/">About</Link>
              <Link className="nav-link text-white" to="/">Contact</Link>
            </div>
            <div className="w-10 mx-auto mt-5 text-white">
            <p>
               Privacy Policy <br />
               Accessibility <br />
               Terms & Conditions <br />
               Refund Policy
             </p>
            </div>
            <div className="w-10 mx-auto mt-5 text-white d-block">
              <p>0312-7278576</p>
              <p>Asif@gmail.com</p>
              <p>Dera Ghazi Khan</p>
            </div>
         </section>
      </div>
    </>
  );
}
export default Home;
