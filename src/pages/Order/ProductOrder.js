import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./ProductOrder.css";

const ProductOrder = () => {
  const [name, setName] = useState(""); // 이름을 상태로 관리합니다.
  const [name2, setName2] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [phoneNumber2, setPhoneNumber2] = useState("");
  const [email, setEmail] = useState("");
  const [email2, setEmail2] = useState("");
  const [selectedMemo, setSelectedMemo] =
    useState("배송시 요청사항을 선택해주세요");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // 드롭다운 메뉴의 상태 추가
  const [isChecked, setIsChecked] = useState(false);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);
  const [agreementAll, setAgreementAll] = useState(false);
  const [agreementInfo, setAgreementInfo] = useState(false);
  const [agreementInfo2, setAgreementInfo2] = useState(false);
  const [agreementPro, setAgreementPro] = useState(false);

  useEffect(() => {
    const isAllAgreed = agreementInfo && agreementInfo2 && agreementPro;
    setAgreementAll(isAllAgreed);
  }, [agreementInfo, agreementInfo2, agreementPro]);

  useEffect(() => {
    // 모든 동의 상태가 변경될 때마다 결제 버튼 활성화 상태 업데이트
    const totalPayButton = document.querySelector(".totalPay");
    if (agreementAll) {
      totalPayButton.disabled = false;
    } else {
      totalPayButton.disabled = true;
    }
  }, [agreementAll]);

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

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen); // 드롭다운 메뉴를 열고 닫음
  };

  const handleDropdownItemClick = (memo) => {
    setSelectedMemo(memo); // 클릭한 항목을 선택된 항목으로 설정
    setIsDropdownOpen(false); // Dropdown 안의 항목을 클릭하면 Dropdown이 닫힘
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked); // 상태를 반전시킵니다.
  };

  const handlePaymentMethodChange = (method) => {
    setSelectedPaymentMethod(method);
  };

  const handleAgreementAllChange = () => {
    const newAgreementAll = !agreementAll;
    setAgreementAll(newAgreementAll);
    setAgreementInfo(newAgreementAll);
    setAgreementInfo2(newAgreementAll);
    setAgreementPro(newAgreementAll);
  };

  const handleAgreementInfoChange = () => {
    const newAgreementInfo = !agreementInfo;
    setAgreementInfo(newAgreementInfo);
    if (newAgreementInfo && agreementPro) {
      setAgreementAll(true);
    } else {
      setAgreementAll(false);
    }
  };

  const handleAgreementInfo2Change = () => {
    const newAgreementInfo2 = !agreementInfo2;
    setAgreementInfo2(newAgreementInfo2);
    if (newAgreementInfo2 && agreementPro) {
      setAgreementAll(true);
    } else {
      setAgreementAll(false);
    }
  };

  const handleAgreementProChange = () => {
    const newAgreementPro = !agreementPro;
    setAgreementPro(newAgreementPro);
    if (newAgreementPro && agreementInfo) {
      setAgreementAll(true);
    } else {
      setAgreementAll(false);
    }
  };
  const navigate = useNavigate(); // useNavigate 훅을 사용하여 navigate 함수를 가져옵니다.

  const handlePaymentButtonClick = () => {
    alert("결제가 완료되었습니다."); // 결제 버튼 클릭 시 알림창 표시
    navigate("/");
  };

  return (
    <div>
      <h1 className="Order_header">주문하기 뀻</h1>
      <div className="Order_info">
        <div className="Order_h1">주문상품 정보 뀨ㅜㅅ</div>
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
          <div className="memo_h1">배송지 정보</div>
          <div className="memo_name">
            <label>수령인</label>
            <input
              type="text"
              value={name2}
              onChange={handleName2Change}
              placeholder="이름" // 입력란에 힌트를 추가합니다.
              className="Orderer_nameput"
            />
          </div>
          <div className="memo_phone">
            <label>휴대폰</label>
            <input
              type="tel" // 전화번호 형식으로 입력할 수 있도록 타입을 tel로 지정합니다.
              value={phoneNumber2}
              onChange={handlePhoneNumber2Change}
              placeholder="핸드폰 번호를 입력하세요" // 입력란에 힌트를 추가합니다.
              className="Orderer_phonenumber"
            />
          </div>
          <div className="memo_address">
            <label>배송 주소</label>
            <input
              type="email"
              value={email2}
              onChange={handleEmail2Change}
              placeholder="이메일을 입력하세요"
              className="Orderer_address"
            />
          </div>
          <div className="memo_select">
            <label>배송메모</label>
            <div className="dropdown">
              <button className="memo_button" onClick={toggleDropdown}>
                {selectedMemo}
                {isDropdownOpen ? "▲" : "▼"}
              </button>
              {isDropdownOpen && (
                <div className="memo_message">
                  <span
                    onClick={() =>
                      handleDropdownItemClick("배송시 요청사항을 선택해주세요")
                    }
                  >
                    배송시 요청사항을 선택해주세요
                  </span>
                  <span
                    onClick={() =>
                      handleDropdownItemClick("문 앞에 놓아 주세요.")
                    }
                  >
                    문 앞에 놓아 주세요.
                  </span>
                  <span
                    onClick={() =>
                      handleDropdownItemClick("경비(관리)실에 맡겨 주세요.")
                    }
                  >
                    경비(관리)실에 맡겨 주세요.
                  </span>
                  <span
                    onClick={() =>
                      handleDropdownItemClick("택배함에 넣어 주세요.")
                    }
                  >
                    택배함에 넣어 주세요.
                  </span>
                  <span
                    onClick={() => handleDropdownItemClick("직접 받겠습니다.")}
                  >
                    직접 받겠습니다.
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
        <div>
          <div class="totalPrice_h1">최종 결제 금액</div>
          <div class="totalPrice_price">
            <span>총 상품금액</span>
            <span>30,780원</span>
          </div>
          <div class="totalPrice_delivery">
            <span>총 배송비</span>
            <span>0원</span>
          </div>
          <div class="totalPrice_total">
            <span>결제 예상 금액</span>
            <span class="totalPrice_total__price">30,780원</span>
          </div>
        </div>
        <div>
          <div className="payment_h1">결제수단</div>
          <div className="payment_anotherSelect">
            <input
              type="checkbox"
              className="checkbox-custom"
              checked={isChecked} // 상태에 따라 체크 여부를 결정합니다.
              onChange={handleCheckboxChange} // 체크박스 상태 변경 핸들러 연결
            />
            다른 결제 수단
          </div>
          <div className="payment_card">
            <div
              className={`payment_method ${
                selectedPaymentMethod ===
                "https://www.brandi.co.kr/static/23.11.01/images/icon_pay_naver.svg"
                  ? "active"
                  : ""
              }`}
              onClick={() =>
                handlePaymentMethodChange(
                  "https://www.brandi.co.kr/static/23.11.01/images/icon_pay_naver.svg"
                )
              }
            >
              <img
                src="https://www.brandi.co.kr/static/23.11.01/images/icon_pay_naver.svg"
                alt=""
              />
            </div>
            <div
              className={`payment_method ${
                selectedPaymentMethod ===
                "https://www.brandi.co.kr/static/23.11.01/images/icon_pay_kakao.svg"
                  ? "active"
                  : ""
              }`}
              onClick={() =>
                handlePaymentMethodChange(
                  "https://www.brandi.co.kr/static/23.11.01/images/icon_pay_kakao.svg"
                )
              }
            >
              <img
                src="https://www.brandi.co.kr/static/23.11.01/images/icon_pay_kakao.svg"
                alt=""
              />
            </div>
            <div
              className={`payment_method ${
                selectedPaymentMethod ===
                "https://www.brandi.co.kr/static/23.11.01/images/icon_pay_toss_new.svg"
                  ? "active"
                  : ""
              }`}
              onClick={() =>
                handlePaymentMethodChange(
                  "https://www.brandi.co.kr/static/23.11.01/images/icon_pay_toss_new.svg"
                )
              }
            >
              <img
                src="https://www.brandi.co.kr/static/23.11.01/images/icon_pay_toss_new.svg"
                alt=""
              />
            </div>
            <div
              className={`payment_method2 ${
                selectedPaymentMethod === "신용/체크카드" ? "active" : ""
              }`}
              onClick={() => handlePaymentMethodChange("신용/체크카드")}
            >
              <span>신용/체크카드</span>
            </div>
            <div
              className={`payment_method2 ${
                selectedPaymentMethod === "무통장 입금" ? "active" : ""
              }`}
              onClick={() => handlePaymentMethodChange("무통장 입금")}
            >
              <span>무통장 입금</span>
            </div>
            <div
              className={`payment_method2 ${
                selectedPaymentMethod === "휴대폰 결제" ? "active" : ""
              }`}
              onClick={() => handlePaymentMethodChange("휴대폰 결제")}
            >
              <span>휴대폰 결제</span>
            </div>
          </div>
        </div>
        <div className="agreement">
          <div className="agreement_h1">
            비회원 구매조건/약관 및 개인정보 이용 동의
          </div>
          <div className="agreement_agree">
            <input
              type="checkbox"
              className="agreement_agree__check"
              checked={agreementAll}
              onChange={handleAgreementAllChange}
            />
            전체 동의하기
          </div>
          <div className="agreement_info">
            <input
              type="checkbox"
              className="agreement_agree__check"
              checked={agreementInfo}
              onChange={handleAgreementInfoChange}
            />
            브랜디 약관 동의
          </div>
          <div className="agreement_info2">
            <input
              type="checkbox"
              className="agreement_agree__check"
              checked={agreementInfo2}
              onChange={handleAgreementInfo2Change}
            />
            개인정보수집 및 이용에 대한 안내
          </div>
          <div className="agreement_pro">
            <input
              type="checkbox"
              className="agreement_agree__check"
              checked={agreementPro}
              onChange={handleAgreementProChange}
            />
            구매조건 및 개인정보 제3자 제공
          </div>
          <div className="agreement_all">
            위 상품의 구매 조건을 확인하였으며, 결제 및 개인 정보 제3자 제공에
            모두 동의합니다.
          </div>
        </div>
        <div>
          <button className="totalPay" onClick={handlePaymentButtonClick}>
            결제하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductOrder;
