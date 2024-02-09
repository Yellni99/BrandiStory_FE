import React, { useState } from "react";

const ProductOrder = () => {
  const [name, setName] = useState(""); // 이름을 상태로 관리합니다.
  const [name2, setName2] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [phoneNumber2, setPhoneNumber2] = useState("");
  const [email, setEmail] = useState("");
  const [email2, setEmail2] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value); // 입력된 이름을 상태에 업데이트합니다.
  };
  const handleName2Change = (event) => {
    setName2(event.target.value); // 입력된 새로운 이름을 상태에 업데이트
  };

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value); // 입력된 핸드폰 번호를 상태에 업데이트합니다.
  };
  const handlePhoneNumber2Change = (event) => {
    setPhoneNumber2(event.target.value); // 입력된 핸드폰 번호를 상태에 업데이트합니다.
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value); // 입력된 이메일을 상태에 업데이트합니다.
  };

  const handleEmail2Change = (event) => {
    setEmail2(event.target.value); // 입력된 이메일을 상태에 업데이트합니다.
  };

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
      <div>
        <div className="Orderer_info">주문자 정보</div>
        <div className="Orderer_name">
          <label>이름</label>
          <input
            type="text"
            value={name}
            onChange={handleNameChange}
            placeholder="이름" // 입력란에 힌트를 추가합니다.
            className="Orderer_nameput"
          />
        </div>
        <div className="Orderer_phone">
          <label>휴대폰</label>
          <input
            type="tel" // 전화번호 형식으로 입력할 수 있도록 타입을 tel로 지정합니다.
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
            placeholder="핸드폰 번호를 입력하세요" // 입력란에 힌트를 추가합니다.
            className="Orderer_phonenumber"
          />
        </div>
        <div className="Orderer_email">
          <label>이메일</label>
          <input
            type="email" // 이메일 형식으로 입력할 수 있도록 타입을 email로 지정합니다.
            value={email}
            onChange={handleEmailChange}
            placeholder="이메일을 입력하세요" // 입력란에 힌트를 추가합니다.
            className="Orderer_address"
          />
        </div>
        <div>
          <div>배송지 정보</div>
          <div>
            <label>수령인</label>
            <input
              type="text"
              value={name2}
              onChange={handleName2Change}
              placeholder="이름" // 입력란에 힌트를 추가합니다.
              className="Orderer_nameput"
            />
          </div>
          <div>
            <label>휴대폰</label>
            <input
              type="tel" // 전화번호 형식으로 입력할 수 있도록 타입을 tel로 지정합니다.
              value={phoneNumber2}
              onChange={handlePhoneNumber2Change}
              placeholder="핸드폰 번호를 입력하세요" // 입력란에 힌트를 추가합니다.
              className="Orderer_phonenumber"
            />
          </div>
          <div>
            <label>배송 주소</label>
            <input
              type="email"
              value={email2}
              onChange={handleEmail2Change}
              placeholder="이메일을 입력하세요"
              className="Orderer_address"
            />
          </div>
          <div>
            <label>배송메모</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductOrder;
