import React from "react";
import "./ProductDetail.css";

const ProductDetail = () => {
  return (
    <div className="product-box">
      <div className="left-section">
        <div className="main-image"></div>
        <div className="detail-images"></div>
      </div>
      <div className="right-section">
        <div className="company">업체명</div>
        <div className="product">상품명</div>
        <div className="price">가격</div>
        <div className="pay-one">빠른페이》 결제시 </div>
        <div className="pay-two">1%적립(334원) </div>
        <div className="pay-three">★★★★★ 500개 리뷰보기 | 5,182개 구매중 </div>
      </div>
    </div>
  );
};

export default ProductDetail;
