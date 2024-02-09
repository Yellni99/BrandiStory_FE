import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <ul className="info">
        <li>
          <a href="#">이용약관</a>
        </li>
        <li>
          <a href="#">개인정보처리방침</a>
        </li>
        <li>
          <a href="#">사업자정보확인</a>
        </li>
        <li>
          <a href="#">인재채용</a>
        </li>
      </ul>

      <ul className="footer_icons">
        <li>
          <a href="#">자주묻는 질문</a>
        </li>
        <li>
          <a href="#">플러스친구</a>
        </li>
        <li>
          <a href="#">페이스북</a>
        </li>
        <li>
          <a href="#">인스타그램</a>
        </li>
      </ul>
      <h3 className="newnex">(주)뉴넥스</h3>
      <p className="newnex_write">
        대표이사 : 이혜원 | 사업자등록번호 : 220-88-93187 | 통신판매업신고 :
        2023-서울성동-1739 <br />
        호스팅사업자 : (주)뉴넥스 | 주소 : 서울 성동구 왕십리로 125,
        11층(성수동1가, 케이디타워) <br />
        (주)뉴넥스는 결제정보의 중개서비스 또는 통신판매시스템의 제공자로서
        통신판매의 당사자가 아니며, 상품의 주문, 배송 및 환불 등과 관련한 의무와
        책임은 각 판매자에게 있습니다.
      </p>
    </div>
  );
}

export default Footer;
