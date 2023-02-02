import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import celular from "../../assets/celular.png";
import "./Servicos.css";

type Props = {
    color: string;
    row: boolean;
    title: string;
    text: string;
    img: string
}

function GradientBanner(props: Props) {
  return (
    <div className="main-secondary">
      <div className={`container-servicos flex ${ props.row ? 'flex-row' : 'flex-row-reverse'}`}>
        <div className="flex-none w-96">
          <img src={props.img} />
        </div>
        <div className="flex-initial w-128 flex-col padding-10">
          <h1 className="sec-banner-title mb-5 col" style={{ 'color': props.color }}>
            { props.title }
          </h1>
          <p className="sec-banner-text col mb-5">
            { props.text }
          </p>
          <button className="sec-banner-btn col" style={{ 'background': props.color }}>
            Saiba Mais
          </button>
        </div>
      </div>
    </div>
  );
}

export default GradientBanner;

