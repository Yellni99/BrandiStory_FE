import React from "react";
import "./ProductDetail.css";
const ProductDetail = () => {
  return (
    <div className="product-box">
      <div className="left-section">
        <div className="main-image"></div>
        <div className="detailed-images"></div>
      </div>
      <div className="right-section">
        <div className="company">업체명</div>
        <div className="product">상품명</div>
        <div className="price">가격</div>

        <div className="pay-post1">빠른페이》 결제시</div>
        <div className="pay-post2">1%적립 (200원)</div>
        <div className="pay-post3">★★★★★ 500개 리뷰보기 | 520개 구매중</div>
      </div>
    </div>
  );
};

export default ProductDetail;
