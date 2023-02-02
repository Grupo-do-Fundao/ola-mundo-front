import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import cosmonaut from "../../assets/cosmonaut.png";
import "./MainBanner.css"

function MainBanner() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="flex flex-row main-banner">
      <div className="cosmonaut">
        <img src={cosmonaut} alt="" />
      </div>
      <div className="main-text">
        <span><strong>THE</strong> BEGGINING ALL THE IS <strong>HERE!</strong></span>
      </div>
      <div className="banner-details">
        <div className="border-round flex flex-col">
          <h1>A Software House</h1>
          <h2>Com a melhor experiência</h2>
          <span className="span-details">Em serviços e suporte que <strong>sua empresa pode ter</strong></span>
          <button type="button" className="call-action mt-4 ml-auto mr-auto">Ver serviços</button>
        </div>
      </div>
    </div>
  );
}

export default MainBanner;
