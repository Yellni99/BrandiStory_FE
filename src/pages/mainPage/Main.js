import React, { useState } from "react";
import {
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
} from "../../assets/images";
import "../mainPage/Main.css";
import { SliderData } from "./SliderData";
import ImageSlider from "./ImageSlider";

function Main() {
  return (
    <>
      <div>
        <ImageSlider slides={SliderData} />
        <div className="today">오늘은 이 상품 어때요?</div>
        <section id="list">
          <ul className="main_image1">
            <li>
              <a href="#">
                <img src={image1} alt="이미지1" />
              </a>
              <h4>베이델리</h4>
              <p>벨리드made/3ps/단독구매</p>
              <p>33,900원</p>
            </li>
            <li>
              <a href="#">
                <img src={image2} alt="이미지2" />
              </a>
              <h4>바이영</h4>
              <p>(숏/롱 기장선택 2col) 스판쫀</p>
              <p>31,680원</p>
            </li>
            <li>
              <a href="#">
                <img src={image3} alt="이미지3" />
              </a>
              <h4>슈가파우더</h4>
              <p>[퀄리티/무조건봄까지!] 캐시 </p>
              <p>29,790원</p>
            </li>
            <li>
              <a href="#">
                <img src={image4} alt="이미지4" />
              </a>
              <h4>미닛마켓</h4>
              <p>6col 봄신상 [언발포인트! 여리]</p>
              <p>24,210원</p>
            </li>
          </ul>

          <ul className="main_image2">
            <li>
              <a href="#">
                <img src={image5} alt="이미지5" />
              </a>
              <h4>니드어린</h4>
              <p>멜리 봄 스퀘어넥 스카시 벌룬 </p>
              <p>26,100원</p>
            </li>
            <li>
              <a href="#">
                <img src={image6} alt="이미지6" />
              </a>
              <h4>베이델리</h4>
              <p>벨리드made/3ps/단독구매</p>
              <p>33,900원</p>
            </li>
            <li>
              <a href="#">
                <img src={image7} alt="이미지7" />
              </a>
              <h4>바이영</h4>
              <p>발레코어 리본 니트 4col_바이영</p>
              <p>33,850원</p>
            </li>
            <li>
              <a href="#">
                <img src={image8} alt="이미지8" />
              </a>
              <h4>프렌치오브</h4>
              <p>포그니 봄 파스텔 꽈배기 셔링 반팔 니트</p>
              <p>27,900원</p>
            </li>
          </ul>
        </section>
      </div>
    </>
  );
}

export default Main;
