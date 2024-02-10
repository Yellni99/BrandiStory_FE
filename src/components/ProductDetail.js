import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { CartCheck } from "react-bootstrap-icons";
import "./ProductDetail.css";

const ProductDetail = () => {
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(0);
  const [viewOptions, setViewOptions] = useState(false);

  // 이펙트를 사용하여 백엔드에서 금액 값 받아오기
  useEffect(() => {
    // 가격 값 API 받아오기
    setPrice();
  }, [color, size, quantity]);

  const handleRemoveButton = () => {
    setColor("");
    setSize("");
    setQuantity(1);
    setViewOptions(false);
  };

  return (
    <div className="product-box">
      <div className="left-section">
        <div className="main-image"></div>
        <div className="detailed-image"></div>
      </div>
      <div className="right-section">
        <div className="company">업체명</div>
        <div className="product">상품명</div>
        <div className="price">가격</div>
        <div className="detail">
          <div className="pay-post1">
            빠른페이》 <span style={{ color: "gray" }}>결제시</span>
          </div>
          <div className="pay-post2">1%적립 (200원)</div>
          <div className="pay-post3">
            ★★★★★{" "}
            <span style={{ textDecoration: "underline" }}>500개 리뷰보기</span>{" "}
            | 520개 구매중
          </div>
        </div>
        <div className="delivery">
          <span className="delivery-1">배송정보</span>
          <span className="delivery-2">내일(수) 도착 예정</span>
          <span className="delivery-3">무료배송</span>
        </div>

        <div>
          <select
            className="colorSelect"
            value={color}
            onChange={(e) => {
              setColor(e.target.value);
              setSize("");
            }}
          >
            <option value="">색상을 선택하세요.</option>
            <option value="화이트">화이트</option>
            <option value="그레이">그레이</option>
            <option value="블랙">블랙</option>
          </select>
          <br />
          <select
            className="sizeSelect"
            value={size}
            onChange={(e) => {
              setSize(e.target.value);
              setViewOptions(true);
            }}
            disabled={!color}
          >
            <option value="">사이즈를 선택하세요.</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
          </select>
        </div>
        <br />
        {viewOptions && (
          <div className="option-box">
            <p>
              {color}/{size}
            </p>
            <p>
              <input
                type="number"
                value={quantity}
                onClick={(e) => setQuantity(parseInt(e.target.value))}
                min={1}
              />
            </p>
            <p>{price}원</p>
            <button className="remove-button" onClick={handleRemoveButton}>
              X
            </button>
          </div>
        )}
        <div className="total-price">
          <span>총금액</span>
          <span>가격 0원</span>
        </div>
        <button className="buyNow">구매하기</button>
        <button className="addToCart">
          <CartCheck />
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
