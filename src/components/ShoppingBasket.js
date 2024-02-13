import React, { useState } from "react";
import "./ShoppingBasket.css"; // CSS 파일을 가져옵니다.

const ShoppingBasket = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [dcheckbox, setdcheckbox] = useState(false);
  const [info, setinfo] = useState(false);
  const [detail, setdetail] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked); // 체크박스 상태를 반전시킵니다.
  };
  const handledcheckboxChange = () => {
    setdcheckbox(!dcheckbox); // 체크박스 상태를 반전시킵니다.
  };
  const handledinfoChange = () => {
    setinfo(!info); // 체크박스 상태를 반전시킵니다.
  };
  const handleddetailChange = () => {
    setdetail(!detail); // 체크박스 상태를 반전시킵니다.
  };

  return (
    <div>
      <h1 className="Basket_h1">장바구니</h1>
      <div className="Basket_choice">
        <label>
          <input
            type="checkbox"
            className="Basket_checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
          전체선택(1/1)
        </label>
        <button
          className={`Basket_select ${isChecked ? "active" : "inactive"}`}
        >
          선택삭제
        </button>
      </div>
      <div className="Basket_delivery">
        <input
          type="checkbox"
          className="Basket_dcheckbox"
          checked={dcheckbox}
          onChange={handledcheckboxChange}
        />
        일반배송
      </div>
      <div className="Basket_header">
        <input
          type="checkbox"
          className="Basket_info"
          checked={info}
          onChange={handledinfoChange}
        />
        <span className="info">상품정보</span>
        <span className="option">옵션</span>
        <span className="price">상품금액</span>
      </div>
      <div className="Basket_infomation">
        <div className="info1">
          <input
            type="checkbox"
            className="Basket_detail"
            checked={detail}
            onChange={handleddetailChange}
          />
          <img
            className="Basket_img"
            src="https://image.brandi.me/cproduct/BRANDI/2024/02/05/cfb0a7bc-f0aa-4d8d-b186-a4d91961a6b4/SB000000000116831999_1707101587_image1_S.jpeg"
            alt=""
          ></img>
        </div>
        <div className="info2">
          <div>상품명</div>
          <div>30,780원</div>
        </div>
        <div className="option2">
          <div>연청/기본/s</div>
          <div>30,780원</div>
        </div>
        <div className="price2">
          <div>30,780원</div>
          <button>주문하기</button>
        </div>
      </div>
      <div className="Basket_total">
        <div>총 결제금액</div>
        <div clasName="Basket_total__price">30,780원</div>
      </div>
      <div>
        <button className="Basket_totalpay">구매하기</button>
      </div>
    </div>
  );
};

export default ShoppingBasket;
