// App.js

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // 라우터 및 라우터 컴포넌트를 가져옵니다.
import ProductOrder from "./components/ProductOrder"; // ProductOrder 컴포넌트를 가져옵니다.
import ShoppingBasket from "./components/ShoppingBasket"; // ShoppingBasket 컴포넌트를 가져옵니다.

function App() {
  return (
    <Router>
      <Routes>
        {" "}
        {/* 이 부분이 추가되어야 함 */}
        <Route path="/order" element={<ProductOrder />} />
        <Route path="/basket" element={<ShoppingBasket />} />
      </Routes>
    </Router>
  );
}

export default App;
