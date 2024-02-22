import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./ShoppingBasket.css";
import { useAuth } from "../../AuthContext";

const ShoppingBasket = () => {
  const navigate = useNavigate();
  const { authToken } = useAuth();

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
        const response = await axios.get("http://localhost:8080/carts", {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        });
        setCartItems(response.data);
        calculateTotalPrice(response.data);
      } catch (error) {
        console.error("Error fetching cart data", error);
      }
    };

    fetchData();
  }, [authToken, navigate]);

  const calculateTotalPrice = async (items) => {
    try {
      const response = await axios.post(
        "http://localhost:8080/carts/total-price",
        items,
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      );
      setTotalPrice(parseInt(response.data.replace(/[^\d]/g, "")));
    } catch (error) {
      console.error("Error calculating total price", error);
    }
  };

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

  const handleCheckboxChange = (e) => {
    const newCheckedState = e.target.checked;
    setIsChecked(newCheckedState);
    setDCheckbox(newCheckedState);
    setInfo(newCheckedState);
    setCartItems(
      cartItems.map((item) => ({ ...item, detail: newCheckedState }))
    );
  };

  const handleDetailCheckboxChange = (index) => {
    const updatedItems = cartItems.map((item, i) =>
      i === index ? { ...item, detail: !item.detail } : item
    );
    setCartItems(updatedItems);
  };

  const handleOrderClick = () => {
    navigate("/order");
  };

  const handlePurchaseClick = () => {
    navigate("/order", {
      state: { totalPrice, cartItems },
    });
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
              <div>{item.productName}</div>
              <div>{item.price.toLocaleString()}원</div>
            </div>
            <div className="option2">
              <div>{item.option}</div>
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
              </div>
            </div>
            <div className="price2">
              <div>{`${(price * quantity).toLocaleString()}원`}</div>{" "}
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
