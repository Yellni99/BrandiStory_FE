import React from "react";
import ProductDetail from "./components/ProductDetail";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeaderLayout from "./pages/HeaderLayout";
import Main from "./pages/mainPage/Main";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HeaderLayout />} />
        <Route path="/main" element={<Main />} />
        <Route path="/ProductDetail" element={<ProductDetail />} />
        {/* 추가적으로 필요한 다른 라우트 설정 */}
      </Routes>
    </Router>
  );
};

export default App;

