import React from "react";
import ProductDetail from "./components/ProductDetail";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/ProductDetail" element={<ProductDetail />} />
        {/* <Route path="/order" element={<ProductOrder />} /> */}
        {/* <Route path="/basket" element={<ShoppingBasket />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
