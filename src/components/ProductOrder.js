import React from "react";

const ProductOrder = () => {
  return (
    <div>
      <h1 className="Order_header">주문하기</h1>
      <div className="Order_info">
        <div className="Order_h1">주문상품 정보</div>
        <div className="Order_date">
          <div>
            <img
              src="https://www.brandi.co.kr/static/23.11.01/images/ic-baro-l@3x.png"
              alt=""
            ></img>
          </div>
          <div>02/14(수) 도착 예정</div>
        </div>
        <div className="Order_mid">
          <div className="Order_mid__left">복플레이스</div>
          <div className="Order_mid__right">주문금액</div>
        </div>
        <div className="Order_product">
          <div>
            <img
              className="Order_product__img"
              src="https://image.brandi.me/cproduct/BRANDI/2024/02/05/cfb0a7bc-f0aa-4d8d-b186-a4d91961a6b4/SB000000000116831999_1707101587_image1_S.jpeg"
              alt=""
            ></img>
          </div>
          <div className="Order_product__name">
            <div>
              2Col[복플MADE/기장선택]자체제작 골반 탄력 왕스판 세미 부츠컷
              데님팬츠_복플레이스
            </div>
            <div>연청/기본/s</div>
            <div>1개</div>
          </div>

          <div className="Order_product__price">30,780원</div>
        </div>
        <span className="Order_totalPrice">
          <span className="Order_totalPrice__text">총 주문금액</span>
          <span className="Order_totalPrice__price"> 30,780원</span>
        </span>
      </div>
    </div>
  );
};

export default ProductOrder;
