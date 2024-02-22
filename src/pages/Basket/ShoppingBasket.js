import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import "./ShoppingBasket.css";

const ShoppingBasket = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { cartItem } = location.state || {};

  const [isChecked, setIsChecked] = useState(false);
  const [dcheckbox, setDCheckbox] = useState(false);
  const [info, setInfo] = useState(false);
  const [totalpayActive, setTotalpayActive] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState(0);
  const [option, setOption] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://ec2-3-35-217-174.ap-northeast-2.compute.amazonaws.com:8080/v1/api/products/${cartItem.productId}`
        );
        const { CartItems, productName, price, option } = response.data;
        setCartItems(CartItems);
        setProductName(productName);
        setPrice(price);
        setOption(option);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    if (cartItem) {
      fetchData();
    }
  }, [cartItem]);

  useEffect(() => {
    const allChecked =
      isChecked && dcheckbox && info && cartItems.every((item) => item.detail);
    setTotalpayActive(allChecked);
  }, [isChecked, dcheckbox, info, cartItems]);

  const incrementQuantity = () => {
    setQuantity((qty) => qty + 1);
  };

  const decrementQuantity = () => {
    setQuantity((qty) => (qty > 1 ? qty - 1 : 1));
  };

  const handleCheckboxChange = () => {
    const newCheckedState = !isChecked;
    setIsChecked(newCheckedState);
    setDCheckbox(newCheckedState);
    setInfo(newCheckedState);
    setCartItems(
      cartItems.map((item) => ({ ...item, detail: newCheckedState }))
    );
  };

  const handleDetailCheckboxChange = (index) => {
    setCartItems(
      cartItems.map((item, i) =>
        i === index ? { ...item, detail: !item.detail } : item
      )
    );
  };

  const handleOrderClick = () => {
    navigate("/order");
  };

  const handlePurchaseClick = () => {
    navigate("/order");
  };

  return (
    <div>
      <h1 className="Basket_h1">장바구니</h1>
      <div className="Basket_choice">
        <label>
          <input
            type="checkbox"
            className="Basket_checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
          전체선택(1/1)
        </label>
      </div>
      <div className="Basket_delivery">
        <input
          type="checkbox"
          className="Basket_dcheckbox"
          checked={isChecked && dcheckbox}
          onChange={() => setDCheckbox(!dcheckbox)}
        />
        일반배송
      </div>
      <div className="Basket_header">
        <input
          type="checkbox"
          className="Basket_info"
          checked={isChecked && info}
          onChange={() => setInfo(!info)}
        />
        <span className="info">상품정보</span>
        <span className="option">옵션</span>
        <span className="price">상품금액</span>
      </div>

      {cartItems &&
        cartItems.length > 0 &&
        cartItems.map((item, index) => (
          <div className="Basket_infomation" key={item.cart_items_id}>
            <div className="info1">
              <input
                type="checkbox"
                className="Basket_detail"
                checked={item.detail}
                onChange={() => handleDetailCheckboxChange(index)}
              />
              <span className="Basket_img">{item.cart_items_id}</span>
            </div>
            <div className="info2">
              <div>{item.productName}</div> {/* 상품명 */}
              <div>{item.price.toLocaleString()}원</div> {/* 가격 */}
            </div>
            <div className="option2">
              <div>{item.option}</div> {/* 옵션 */}
              <div className="item-quantity-controls">
                <button
                  onClick={decrementQuantity}
                  className="decrementQuantity"
                >
                  -
                </button>
                <span className="item-quantity-numb">{quantity}</span>
                <button
                  onClick={incrementQuantity}
                  className="incrementQuantity"
                >
                  +
                </button>
              </div>
              <div className="item-price">
                {`${(price * quantity).toLocaleString()}원`}{" "}
                {/* 상품 가격 * 수량 */}
              </div>
            </div>
            <div className="price2">
              <div>{`${(price * quantity).toLocaleString()}원`}</div>{" "}
              {/* 상품 가격 * 수량 */}
              <button
                className={`Basket_request active`}
                onClick={handleOrderClick}
              >
                주문하기
              </button>
            </div>
          </div>
        ))}
      <div className="Basket_total">
        <div>총 결제금액</div>
        <div>{`${(totalPrice * quantity).toLocaleString()}원`}</div>{" "}
        {/* 총 가격 * 수량 */}
      </div>
      <div>
        <button
          className={`Basket_totalpay ${
            totalpayActive ? "active" : "inactive"
          }`}
          onClick={handlePurchaseClick}
        >
          구매하기
        </button>
      </div>
    </div>
  );
};

export default ShoppingBasket;
