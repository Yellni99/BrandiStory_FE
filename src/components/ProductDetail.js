import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { CartCheck } from "react-bootstrap-icons";
import "./ProductDetail.css";

const ProductDetail = () => {
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");

  return (
    <div className="product-box">
      <div className="left-section">
        <div className="main-image"></div>
        <div className="detailed-image"></div>
      </div>
      <div className="right-section">
        <div className="company">업체명</div>
        <div className="product">상품명</div>
        <div className="price">가격</div>
        <div className="detail">
          <div className="pay-post1">빠른페이》 결제시</div>
          <div className="pay-post2">1%적립 (200원)</div>
          <div className="pay-post3">
            ★★★★★{" "}
            <span style={{ textDecoration: "underline" }}>500개 리뷰보기</span>{" "}
            | 520개 구매중
          </div>
        </div>
        <div className="delivery">
          <span className="delivery-1">배송정보</span>
          <span className="delivery-2">내일(수) 도착 예정</span>
          <span className="delivery-3">무료배송</span>
        </div>

        <div>
          <select
            className="colorSelect"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          >
            <option value="">색상을 선택하세요.</option>
            <option value="white">화이트</option>
            <option value="gray">그레이</option>
            <option value="black">블랙</option>
          </select>
          <br />
          <select
            className="sizeSelect"
            value={size}
            onChange={(e) => setSize(e.target.value)}
          >
            <option value="">사이즈를 선택하세요.</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
          </select>
        </div>
        <br />
        <div className="total-price">
          <span>총금액</span>
          <span>가격 0원</span>
        </div>
        <button className="buyNow">구매하기</button>
        <button className="addToCart">
          <CartCheck />
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
