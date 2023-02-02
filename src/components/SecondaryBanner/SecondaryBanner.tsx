import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import celular from "../../assets/celular.png";
import "./SecondaryBanner.css";

function GradientBanner() {
  return (
    <div className="main-secondary">
      <div className="container-banner flex">
        <div className="flex-none w-96">
          <img src={celular} />
        </div>
        <div className="flex-initial w-128 flex-col padding-10">
          <h1 className="sec-banner-title mb-5 col">
            Tenha um atendimento 100x mais rápido
          </h1>
          <h2 className="sec-banner-subtitle mb-5 col">
            Automatize os processos de atendimento do seu negócio de forma
            simples e dinâmica.
          </h2>
          <p className="sec-banner-text col mb-5">
            Faça como mais de 9.000 pequenos negócios pelo brasil e o mundo e se
            destaque dos seus concorrentes
          </p>
          <button className="sec-banner-btn col">
            Experimente Grátis
          </button>
        </div>
      </div>
    </div>
  );
}

export default GradientBanner;
