import React, { useState } from "react";
import {NavLink, useNavigate} from 'react-router-dom';
import "./LoginPage.css";
import axios from 'axios';
import {apple, facebook, google, kakao, leftArrowIcon, naver} from "../../assets/images";

function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLoginFormSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(`http://localhost:8080/v1/api/sign/login`, {
                email: email,
                password: password,
            });

            if (response.status === 200) {
                const token = response.data;
                sessionStorage.setItem('authToken', token);
                navigate('/'); 
            } else {
                alert("로그인에 실패하였습니다. 서버 상태를 확인해 주세요.");
            }
        } catch (error) {
            if (error.response) {
                console.error('서버 응답 오류:', error.response.status);
                alert(error.response.data.message || "로그인에 실패하였습니다.");
            } else if (error.request) {
                console.error('응답을 받지 못함:', error.request);
            } else {
                console.error('Error', error.message);
            }
            console.error('요청 설정 중 오류 발생:', error.config);
        }
    };


    return (
        <main className="login-main-content">
            <section className="login-container">
                <NavLink className="back-arrow" to="/mypage">
                    <img src={leftArrowIcon} alt="leftArrowIcon" />
                </NavLink>
                <h1 className="login-greeting">안녕하세요<br />브랜드입니다</h1>
                <p className="login-description">
                    브랜드, 아이디, 센터, 서울스튜어디 통합 관리로 효율적인 가스를 합니다.
                </p>
                <form className="login-form" onSubmit={handleLoginFormSubmit}>
                    <div className="input-field">
                        <input
                            type="text"
                            id="email"
                            name="email"
                            value={email}
                            placeholder="아이디 입력"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="input-field">
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={password}
                            placeholder="비밀번호 입력"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="login-button">로그인</button>
                </form>
                <div className="login-footer">
                    <a href="#">아이디 찾기</a> |
                    <a href="#">비밀번호 찾기</a> |
                    <NavLink to="/loginAdd">회원가입</NavLink>
                </div>
                <div className="sns-login">
                    <p>SNS 계정으로 로그인</p>
                    <div className="sns-icons">
                        <NavLink to="/auth/kakao" className="sns-icon">
                            <img src={kakao} alt="Kakao"/>
                        </NavLink>
                        <NavLink to="/auth/facebook" className="sns-icon">
                            <img src={facebook} alt="Facebook"/>
                        </NavLink>
                        <NavLink to="/auth/google" className="sns-icon">
                            <img src={google} alt="Google"/>
                        </NavLink>
                        <NavLink to="/auth/naver" className="sns-icon">
                            <img src={naver} alt="Naver"/>
                        </NavLink>
                        <NavLink to="/auth/apple" className="sns-icon">
                            <img src={apple} alt="Apple"/>
                        </NavLink>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default LoginPage;