import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // useNavigate 훅을 import 합니다.
import "./ShoppingBasket.css"; // CSS 파일을 가져옵니다.

const Price = 30780;
const discount = 0;

const ShoppingBasket = () => {
  const navigate = useNavigate(); // useNavigate 훅을 사용하여 navigate 함수를 가져옵니다.
  const [isChecked, setIsChecked] = useState(false);
  const [dcheckbox, setDCheckbox] = useState(false);
  const [info, setInfo] = useState(false);
  const [detail, setDetail] = useState(false);
  const [totalpayActive, setTotalpayActive] = useState(false); // 총 결제금액 버튼 활성화 상태

  const [quantity, setQuantity] = useState(1); // 상품의 수량체크 하기 위해서 넣을 거에요
  const totalPrice = Price - discount;

  const incrementQuantity = () => {
    setQuantity((qty) => qty + 1);
  };

  const decrementQuantity = () => {
    setQuantity((qty) => (qty > 1 ? qty - 1 : 1));
  };

  useEffect(() => {
    // 모든 체크박스가 체크되었는지 여부를 확인하여 총 결제금액 버튼 활성화 상태를 설정
    const allChecked = isChecked && dcheckbox && info && detail;
    setTotalpayActive(allChecked);
  }, [isChecked, dcheckbox, info, detail]);

  // 전체 선택/해제 시 모든 체크박스의 상태 변경
  const handleCheckboxChange = () => {
    const newCheckedState = !isChecked;
    setIsChecked(newCheckedState);
    setDCheckbox(newCheckedState);
    setInfo(newCheckedState);
    setDetail(newCheckedState);
  };

  // 각각의 체크박스 상태 변경
  const handleDCheckboxChange = () => {
    setDCheckbox(!dcheckbox);
  };

  const handleDetailCheckboxChange = () => {
    setDetail(!detail);
  };

  // "주문하기" 버튼 클릭 시 ProductOrder 페이지로 이동
  const handleOrderClick = () => {
    navigate("/order"); // useNavigate 훅을 사용하여 페이지 이동
  };

  // "구매하기" 버튼 클릭 시 ProductOrder 페이지로 이동
  const handlePurchaseClick = () => {
    navigate("/order"); // useNavigate 훅을 사용하여 페이지 이동
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
      </div>
      <div className="Basket_delivery">
        <input
          type="checkbox"
          className="Basket_dcheckbox"
          checked={isChecked && dcheckbox} // Basket_checkbox의 상태에 따라 dcheckbox 상태 설정
          onChange={handleDCheckboxChange}
        />
        일반배송
      </div>
      <div className="Basket_header">
        <input
          type="checkbox"
          className="Basket_info"
          checked={isChecked && info} // Basket_checkbox의 상태에 따라 info 상태 설정
          onChange={() => setInfo(!info)}
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
            onChange={handleDetailCheckboxChange}
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
          <div className="item-quantity-controls">
            <button onClick={decrementQuantity} className="decrementQuantity">
              -
            </button>
            <span className="item-quantity-numb">{quantity}</span>
            <button onClick={incrementQuantity} className="incrementQuantity">
              +
            </button>
          </div>
          <div className="item-price">
            {`${(Price * quantity).toLocaleString()}원`}
          </div>
        </div>
        <div className="price2">
          <div>{`${(Price * quantity).toLocaleString()}원`}</div>
          <button
            className={`Basket_request active`}
            onClick={handleOrderClick}
          >
            주문하기
          </button>
        </div>
      </div>
      <div className="Basket_total">
        <div>총 결제금액</div>
        <div className="total-price">
          <span className="total">{`${(
            totalPrice * quantity
          ).toLocaleString()}원`}</span>
        </div>
      </div>
      <div>
        <button
          className={`Basket_totalpay ${
            totalpayActive ? "active" : "inactive"
          }`}
          onClick={handlePurchaseClick}
        >
          구매하기
        </button>
      </div>
    </div>
  );
};

export default ShoppingBasket;
