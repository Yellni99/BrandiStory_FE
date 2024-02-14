import React from "react";
import ProductDetail from "./components/ProductDetail";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./pages/mainPage/Main";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import ChartMenu from "./components/ChartMenu/ChartMenu";
import ProductOrder from "./components/ProductOrder"; // ProductOrder 컴포넌트를 가져옵니다.
import ShoppingBasket from "./components/ShoppingBasket";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Header />
              <ChartMenu />
              <Main />
              <Footer />
            </div>
          }
        />
        <Route
          path="/ProductDetail"
          element={
            <div>
              <Header />
              <ChartMenu />
              <ProductDetail />
            </div>
          }
        />
        <Route
          path="/order"
          element={
            <div>
              <Header />
              <ChartMenu />
              <ProductOrder />
              <Footer />
            </div>
          }
        />
        <Route
          path="/basket"
          element={
            <div>
              <Header />
              <ChartMenu />
              <ShoppingBasket />
              <Footer />
            </div>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
