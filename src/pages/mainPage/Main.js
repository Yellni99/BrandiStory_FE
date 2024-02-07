import React from "react";
import {image1} from "../../assets/images";

function Main () {
    return (
        <>
            <div>
                <article id="slider"></article>
                <section id="list">
                    <ul className="main_image">
                        <li>
                            <a href="#">
                                <img src={image1} alt="이미지1" />
                            </a>
                        </li>
                        {/*<li>*/}
                        {/*    <a href="#">*/}
                        {/*        <img src={image2} alt="이미지2" />*/}
                        {/*    </a>*/}
                        {/*</li>*/}
                        {/*<li>*/}
                        {/*    <a href="#">*/}
                        {/*        <img src={image3} alt="이미지3" />*/}
                        {/*    </a>*/}
                        {/*</li>*/}
                    </ul>
                </section>
            </div>
        </>
    );
}

export default Main;