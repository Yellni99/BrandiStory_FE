import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Cart } from "react-bootstrap-icons";
import { Heart } from "react-bootstrap-icons";
import "./ProductDetail.css";

const ProductDetail = () => {
  const [mainImage, setMainImage] = useState("");
  const [detailedImage, setDetailedImage] = useState([]);
  const [companyName, setCompanyName] = useState("");
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState(0);
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [viewOptions, setViewOptions] = useState(false);
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");

  // 이펙트를 사용하여 백엔드에서 금액 값 받아오기
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("API주소");
        if (!response.ok) {
          throw new Error("데이터를 불러오는데 문제 발생");
        }
        const Data = await response.json();
        setMainImage(Data.mainImage);
        setDetailedImage(Data.detailedImage);
        setCompanyName(Date.companyName);
        setProductName(Date.productName);
        setPrice(Date.price);
      } catch (error) {
        console.error("데이터를 불러오는 중 오류가 발생:", error);
      }
    };
    fetchData();
  }, []);

  const handleRemoveButton = () => {
    setColor("");
    setSize("");
    setQuantity(1);
    setViewOptions(false);
    setSelectedColor("");
    setSelectedSize("");
  };

  const handleIncrement = () => {
    setQuantity((prevQantity) => prevQantity + 1);
  };
  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prevQantity) => prevQantity - 1);
    }
  };

  const handleColorChange = (e) => {
    setColor(e.target.value);
    setSize("");
    setViewOptions(false);
    setSelectedColor(e.target.value);
    setSelectedSize("");
  };

  const handleSizeChange = (e) => {
    setSize(e.target.value);
    setViewOptions(true);
    setSelectedSize(e.target.value);
    setColor(" ");
    setSize("");
  };

  return (
    <div className="product-box">
      <div className="left-section">
        <div className="main-image">
          <img src={mainImage} alt="Main" />
        </div>
        <div className="detailed-image">
          <div className="detailed-image1">
            <img src={detailedImage[0]} alt="Detail 1" />
          </div>
          <div className="detailed-image2">
            <img src={detailedImage[1]} alt="Detail 2" />
          </div>
          <div className="detailed-image3">
            <img src={detailedImage[2]} alt="Detail 3" />
          </div>
        </div>
      </div>
      <div className="right-section">
        <div className="company">{companyName}업체명</div>
        <div className="product">{productName}상품명</div>
        <div className="product-price">{price}원</div>
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
            onChange={handleColorChange}
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
            onChange={handleSizeChange}
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
            <div className="options-1">
              <div>
                {selectedColor} / {selectedSize}
                <div className="standard-delivery">일반배송</div>
              </div>
              <div className="quantity-option">
                <button
                  onClick={handleDecrement}
                  style={{ border: "1px solid gray", background: "white" }}
                >
                  -
                </button>
                <input
                  className="quantity-Check"
                  value={quantity}
                  min={1}
                  onChange={(e) => setQuantity(e.target.value)}
                />
                <button
                  onClick={handleIncrement}
                  style={{ border: "1px solid gray", background: "white" }}
                >
                  +
                </button>
              </div>
            </div>
            <div className="options-2">
              <div className="total">{price}원</div>
              <button className="remove-button" onClick={handleRemoveButton}>
                X
              </button>
            </div>
          </div>
        )}

        <div className="total-price">
          <span>총 상품 금액</span>
          <span>
            {"     "}
            {price}원
          </span>
        </div>
        <button className="buyNow">바로 구매</button>
        <button className="naverPay">네이버페이 구매</button>
        <button className="addToCart">
          <Cart />
        </button>
        <button className="wish">
          <Heart />
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
