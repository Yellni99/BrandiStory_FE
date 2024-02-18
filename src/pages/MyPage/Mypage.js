import React from "react";
import { useNavigate } from "react-router-dom";
import "./Mypage.css";

const Mypage = () => {
  const navigate = useNavigate();

  const goToMyPage = () => {
    navigate("/mypage"); // 혹은 원하는 경로로 변경
  };
  return (
    <div>
      <h1 onClick={goToMyPage}>마이페이지</h1>
      <div className="myPage_box">
        <div className="myPage_login" onClick={() => navigate("/login")}>
          <img
            src="https://www.brandi.co.kr/static/23.11.01/images/ic-myshopping-member-w-s@3x.png"
            alt="로그인/회원가입"
          />
          로그인/회원가입
        </div>

        <div className="myPage_basket" onClick={() => navigate("/basket")}>
          <img
            src="https://www.brandi.co.kr/static/23.11.01/images/ic-my-shoppingbasket-w-s@3x.png"
            alt="장바구니"
          />
          장바구니
        </div>
        <div className="mypage_FAQ" onClick={() => navigate("/faq")}>
          <img
            src="https://www.brandi.co.kr/static/23.11.01/images/ic-my-faq-w-s@3x.png"
            alt="FAQ"
          />
          FAQ
        </div>
        <div className="myPage_cs" onClick={() => navigate("/cs")}>
          <img
            src="https://www.brandi.co.kr/static/23.11.01/images/ic-my-customercenter-s@3x.png"
            alt="고객센터"
          />
          고객센터
        </div>
      </div>
    </div>
  );
};

export default Mypage;
