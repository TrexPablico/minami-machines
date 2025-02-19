import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Products from "./components/Products";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ProductDetails from "./components/ProductDetails";
import products from "./data/products";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About />
              <Products products={products} />
              {/* <Services /> */}
              <Contact />
            </>
          }
        />
        <Route
          path="/products/:productName"
          element={
            <>
              <ProductDetails products={products} />
              <Contact />
            </>
          }
        />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
