import React from "react";
import phoneImg from "./images/phone.svg";
import { useGlobalContext} from "./context";

const Hero = () => {
  const {closeSubmenu} = useGlobalContext();
  
  return <section className="hero" onMouseOver={closeSubmenu}>
  <div className="hero-center">
    <article className="hero-info">
      <h1>Lorem ipsum dolor sit amet</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati saepe hic ipsum cupiditate aliquid, perferendis, officiis, error quae perspiciatis deleniti vel rem explicabo officia porro!</p>
    <button className="btn">
        Start now
    </button>
    </article>

    <article className="hero-images">
      <img src={phoneImg} classeName="phone-img" alt="phone"/>
    </article>
  </div>
  </section>
};

export default Hero;
