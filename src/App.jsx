import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "semantic-ui-css/semantic.min.css";
import Header from "./container/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductListing from "./container/ProductListing";
import ProductDetails from "./container/ProductDetails";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div className="pt-20">
          <Routes>
            <Route path="/" element={<ProductListing />} />
            <Route path="/product/:productId" element={<ProductDetails />} />
            <Route path="*" element={<h2>404 Not Found</h2>}></Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
