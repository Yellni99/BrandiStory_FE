import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./pages/mainPage/Main";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import ChartMenu from "./components/ChartMenu/ChartMenu";
import ProductDetail from "./components/DetailPage/ProductDetail";
import ProductOrder from "./components/Order/ProductOrder";
import ShoppingBasket from "./components/Basket/ShoppingBasket";
import MyPage from "./components/MyPage/myPage"; // 경로 수정
import Cs from "./components/MyPage/cs";
import Faq from "./components/MyPage/faq";
import { Reset } from "styled-reset";

const App = () => {
  <Reset />;
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
        <Route
          path="/myPage"
          element={
            <div>
              <Header />
              <ChartMenu />
              <MyPage />
              <Footer />
            </div>
          }
        />
        <Route
          path="/faq"
          element={
            <div>
              <Header />
              <ChartMenu />
              <Faq />
              <Footer />
            </div>
          }
        />
        <Route
          path="/cs"
          element={
            <div>
              <Header />
              <ChartMenu />
              <Cs />
              <Footer />
            </div>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
