import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import MainBanner from "../../components/MainBanner/MainBanner";
import SecondaryBanner from "../../components/SecondaryBanner/SecondaryBanner";
import "./Home.css";

function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div>
      <div className="main">
        <Header />
        <MainBanner />
        <SecondaryBanner />
      </div>
    </div>
  );
}

export default Home;
