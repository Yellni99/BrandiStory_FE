import React from "react";
import "./Footer.css";

function Footer() {
    return (
        <div className="footer">
            <p>이용약관 개인정보처리방침 사업자정보확인 인재채용</p>
            <ul className="footer_icons">
                <li>
                    <a href="#">?</a>
                </li>
                <li>
                    <a href="#">인스타</a>
                </li>
                <li>
                    <a href="#">페북</a>
                </li>
                <li>
                    <a href="#">다른 아이콘?</a>
                </li>
            </ul>
        </div>
    );
}

export default Footer;
