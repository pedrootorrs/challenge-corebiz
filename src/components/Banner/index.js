import React from "react";
import "./style.css";

import banner from "../Imagens/banner.png"

export default function Banner(){
    return (
        <div className="banner">
            <div className="background-image">
                <div className="title">
                    <h3>Olá, o que você está buscando?</h3>
                    <h2>Criar ou migrar seu e-commerce?</h2>           
                </div> 
                <img src={banner} alt="banner"></img> 
            </div> 
        </div>
    )
}