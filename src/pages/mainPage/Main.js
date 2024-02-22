import React, { useEffect, useState } from "react";
import "./Main.css";
import axios from "axios";
import { SliderData } from "./SliderData";
import ImageSlider from "./ImageSlider";
import { useNavigate } from "react-router-dom";

function Main() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productsResponse = await axios.get(
          "http://localhost:8080/v1/api/products-page"
        );
        console.log(productsResponse.data);
        setProducts(productsResponse.data.content);
      } catch (error) {
        console.error("데이터를 불러오지 못했어요", error);
      }
    };
    fetchData();
  }, []);

  const goToProductDetail = (productId) => {
    navigate(`/detail/${productId}`);
  };

  return (
    <>
      <div>
        <ImageSlider slides={SliderData} />
        <article id="slider"></article>
        <section id="list">
          <h2>오늘은 이 상품 어때요</h2>
          <div className="grid-container">
            {products.map((product, index) => (
              <div className="grid-item" key={index}>
                <a
                  href={`/detail/${product.product_id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    goToProductDetail(product.product_id);
                  }}
                >
                  {product.image_list && product.image_list.length > 0 ? (
                    <img
                      src={product.image_list[0].image}
                      alt={`${product.product_name} image`}
                    />
                  ) : (
                    <div className="no-image">No Image</div>
                  )}
                  <div className="product-info">
                    <span className="company-name">{product.company_name}</span>
                    <span className="product-name">{product.product_name}</span>
                    <span className="product-price">
                      {product.price.toLocaleString()}원
                    </span>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}

export default Main;
