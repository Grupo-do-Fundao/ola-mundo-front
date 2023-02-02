import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import MainBanner from "../../components/MainBanner/MainBanner";
import SecondaryBanner from "../../components/SecondaryBanner/SecondaryBanner";
import Servicos from '../../components/Servicos/Servicos';
import Footer from "../../components/Footer/Footer";
import "./Home.css";
import { servicos } from "../../services/servicosList";


function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div>
      <div className="main">
        <Header />
        <MainBanner />
        <SecondaryBanner />
        {servicos.map((s, i) => <Servicos color={ s.color } title={ s.title } img={s.img} text={ s.text } row={ i % 2 === 0}/>)}
        <Footer />
      </div>
    </div>
  );
}

export default Home;
