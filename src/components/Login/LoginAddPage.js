import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginAddPage.css";

function LoginAddPage() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [gender, setGender] = useState("");

  const [isAgeChecked, setIsAgeChecked] = useState(false);
  const [isTermsChecked, setIsTermsChecked] = useState(false);
  const [isPrivacyChecked, setIsPrivacyChecked] = useState(false);
  const [isSubscriptionChecked, setIsSubscriptionChecked] = useState(false);
  const [isAllChecked, setIsAllChecked] = useState(false);

  const isValidPhone = (phone) => /^\d{11}$/.test(phone);
  const isValidGender = (gender) => gender !== "";
  const isValidAddress = (address) => address.trim() !== "";

  useEffect(() => {
    setIsAllChecked(isAgeChecked && isTermsChecked && isPrivacyChecked);
  }, [isAgeChecked, isTermsChecked, isPrivacyChecked]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    // 백엔드와 일치하는 이메일 및 비밀번호 유효성 검사 정규식
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,6}$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,20}$/;

    if (!emailRegex.test(email)) {
      alert("이메일 형식에 맞지 않습니다.");
      return;
    }

    if (!passwordRegex.test(password)) {
      alert(
        "비밀번호는 영문자와 숫자의 조합으로 8자 이상 20자 이하여야 합니다."
      );
      return;
    }

    if (!username.trim() || !address.trim() || !gender.trim()) {
      alert("모든 필수 필드를 채워주세요.");
      return;
    }

    if (!isAgeChecked || !isTermsChecked || !isPrivacyChecked) {
      alert("필수 항목을 확인해주세요.");
      return;
    }

    const signUpData = {
      email,
      username,
      password,
      phone: phoneNumber,
      address,
      gender,
    };

    try {
      const response = await fetch(
        "http://localhost:8080/v1/api/sign/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(signUpData),
        }
      );

      if (response.ok) {
        alert("회원가입이 완료되었습니다.");
        navigate("/login");
      } else {
        alert("회원가입 실패. 이메일이 중복되었거나 서버 오류가 발생했습니다.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("오류가 발생했습니다. 다시 시도해주세요.");
    }
  };
  const handleClose = () => {
    navigate("/");
  };

  return (
    <>
      <div className="계정 추가">
        <div className="add-account-content">
          <div className="greeting-container">
            <span className="login-greeting">가입을 시작합니다!</span>
            <span className="login-description">
              브랜디 계정 하나로 브랜디, 하이버, 마미 서비스를 모두 이용할 수
              있어요.
            </span>
          </div>

          <div className="account-email">
            <div className="id">
              <div className="id-id">이름</div>
              <input
                type="text"
                className="input-id"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="이름을 입력하세요."
                required
              />
            </div>
            <div className="id">
              <div className="email">이메일</div>
              <input
                type="email"
                className="input-email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="이메일 입력해주세요"
                required
              />
            </div>
            <div className="id">
              <div className="pw">비밀번호</div>
              <input
                type="password"
                className="input-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="비밀번호 입력"
                required
              />
            </div>
            <div className="id">
              <div className="pwcf">비밀번호 확인</div>
              <input
                type="password"
                className="input-confirm-password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="비밀번호 재입력해 주세요"
                required
              />
            </div>
            <div className="id">
              <div className="phone">휴대폰 번호</div>
              <input
                type="text" // Changed from type number to text to allow for formatting
                className="input-phone"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder="휴대폰 번호 입력해 주세요"
                maxLength="11"
                required
              />
            </div>
            <div className="id">
              <div className="address">주소</div>
              <input
                type="text"
                className="input-address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="주소 입력"
                required
              />
            </div>

            <div className="id">
              <div className="gender">성별</div>
              <select
                className="input-gender"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                required
              >
                <option value="">성별 선택</option>
                <option value="MALE">남성</option>
                <option value="FEMALE">여성</option>
              </select>
            </div>
          </div>
          <div className="input-check">
            <div className="checkbox-item">
              <input
                type="checkbox"
                id="ageCheck"
                className="custom-checkbox"
                checked={isAgeChecked}
                onChange={(e) => setIsAgeChecked(e.target.checked)}
              />
              <label htmlFor="ageCheck" className="checkbox-label">
                만 14세 이상입니다 (필수)
              </label>
            </div>
            <div className="checkbox-item">
              <input
                type="checkbox"
                id="termsCheck"
                className="custom-checkbox"
                checked={isTermsChecked}
                onChange={(e) => setIsTermsChecked(e.target.checked)}
              />
              <label htmlFor="termsCheck" className="checkbox-label">
                브랜디 약관 동의 (필수)
              </label>
            </div>
            <div className="checkbox-item">
              <input
                type="checkbox"
                id="privacyCheck"
                className="custom-checkbox"
                checked={isPrivacyChecked}
                onChange={(e) => setIsPrivacyChecked(e.target.checked)}
              />
              <label htmlFor="privacyCheck" className="checkbox-label">
                개인정보수집 및 이용에 대한 안내 (필수)
              </label>
            </div>
            <div className="checkbox-item">
              <input
                type="checkbox"
                id="marketingCheck"
                className="custom-checkbox"
                checked={isSubscriptionChecked}
                onChange={(e) => setIsSubscriptionChecked(e.target.checked)}
              />
              <label htmlFor="marketingCheck" className="checkbox-label">
                이벤트/마케팅 수신 동의 (선택)
              </label>
            </div>
          </div>

          <div className="button-container">
            <button className="button" onClick={handleClose}>
              취소
            </button>
            <button
              type="submit"
              className={`button ${isAllChecked ? "active" : ""}`}
              disabled={!isAllChecked}
              onClick={handleSubmit}
            >
              가입하기
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginAddPage;
