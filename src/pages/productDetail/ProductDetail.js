import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Cart } from "react-bootstrap-icons";
import { Heart } from "react-bootstrap-icons";
import "./ProductDetail.css";
import axios from "axios";

const ProductDetail = () => {
  const navigate = useNavigate();

  const [mainImage, setMainImage] = useState("");
  const [detailedImage, setDetailedImage] = useState([]);
  const [companyName, setCompanyName] = useState("");
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState(0);
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [viewOptions, setViewOptions] = useState([]);
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");

  // 이펙트를 사용하여 백엔드에서 금액 값 받아오기
  useEffect(() => {
    const productData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/v1/api/products-page"
        );
        const { mainImage, detailedImage, companyName, productName, price } =
          response.data;
        setMainImage(mainImage);
        setDetailedImage(detailedImage);
        setDetailedImage(detailedImage || []);
        setCompanyName(companyName);
        setProductName(productName);
        setPrice(price);
        setPrice(price || 0);
      } catch (error) {
        console.error("Error fetching product detail:", error);
      }
    };

    productData();
  }, []);

  const handleRemoveButton = (indexToRemove) => {
    setViewOptions(viewOptions.filter((_, index) => index !== indexToRemove));
  };

  const handleIncrement = (index) => {
    const updatedViewOptions = [...viewOptions];
    updatedViewOptions[index].quantity += 1;
    setViewOptions(updatedViewOptions);
  };

  const handleDecrement = (index) => {
    const updatedViewOptions = [...viewOptions];
    if (updatedViewOptions[index].quantity > 1) {
      updatedViewOptions[index].quantity -= 1;
      setViewOptions(updatedViewOptions);
    }
  };

  const handleColorChange = (e) => {
    const newColor = e.target.value;
    setColor(newColor);
    setSize("");
    setSelectedColor(newColor);
    setSelectedSize("");
    if (newColor && size) {
      setViewOptions([...viewOptions, { color: newColor, size, quantity }]);
    }
  };

  const handleSizeChange = (e) => {
    //새로운 크기 값을 가져옴
    const newSize = e.target.value;
    //선택된 사이즈가 이전과 다른 경우에만 실행
    if (newSize !== size) {
      //선택된 사이즈 업데이트
      setSize(newSize);
      //선택한 사이즈 설정
      setSelectedSize(newSize);
      setColor("");
      setSize("");
      //viewOptions 배열에서 이미 선택된 색상과 새로운 사이즈를 가진 객체가 있는지 확인
      const selectOption = viewOptions.findIndex(
        (option) => option.color === color && option.size === newSize
      );
      // 이미 선택된 색상과 새로운 사이즈를 가진 객체가 있는 경우
      if (selectOption !== -1) {
        const updatedViewOptions = [...viewOptions];
        updatedViewOptions[selectOption].quantity += 1;
        setViewOptions(updatedViewOptions);
      } else {
        setViewOptions([...viewOptions, { color, size: newSize, quantity }]);
      }
    }
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
        <div>
          {viewOptions.map((option, index) => (
            <div className="option-box" key={index}>
              <div className="options-1">
                <div>
                  {option.color} / {option.size}
                  <div className="standard-delivery">일반배송</div>
                </div>
                <div className="quantity-option">
                  <button
                    onClick={() => handleDecrement(index)}
                    style={{
                      border: "1px solid gray",
                      background: "white",
                      width: "20px",
                      height: "28px",
                    }}
                  >
                    -
                  </button>
                  <input
                    className="quantity-Check"
                    value={option.quantity}
                    min={1}
                    onChange={(e) => {
                      const updatedViewOptions = [...viewOptions];
                      updatedViewOptions[index].quantity = parseInt(
                        e.target.value
                      );
                      setViewOptions(updatedViewOptions);
                    }}
                    style={{ paddingLeft: "8px" }}
                  />
                  <button
                    onClick={() => handleIncrement(index)}
                    style={{
                      border: "1px solid gray",
                      background: "white",
                      width: "20px",
                      height: "28px",
                    }}
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="options-2">
                <div className="total">{price * option.quantity}원</div>
                <button
                  className="remove-button"
                  onClick={() => handleRemoveButton(index)}
                >
                  X
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="total-price">
          <span>총 상품 금액</span>
          <span>
            {"     "}
            {viewOptions.reduce(
              (total, option) => total + price * option.quantity,
              0
            )}
            원
          </span>
        </div>
        <button className="buyNow" onClick={() => navigate("/order")}>
          바로 구매
        </button>
        <button className="naverPay">네이버페이 구매</button>
        <button className="addToCart" onClick={() => navigate("/basket")}>
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
