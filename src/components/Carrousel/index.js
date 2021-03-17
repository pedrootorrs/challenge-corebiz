import React from "react";
import "./style.css";
import sapato from "../Imagens/sapato.png";
import sandalia from "../Imagens/sandalia.png";
import bota from "../Imagens/bota.png";
import cinto from "../Imagens/cinto.png";
import left from "../Imagens/left.png";
import right from "../Imagens/right.png";
import poligon from "../Imagens/Polygon.png";

export default function Carrousel(){
    return (
        <div className="carrousel">
            <div className="title--carrousel">
                <h3>Mais Vendidos</h3>
            </div>
            <div className="row">
                <img src={left} className="row--left" alt="left"></img>
                <div class="col-1-of-4">
                    <div className="product__box">
                        <img src={sapato} className="product__box--imagem" alr="sapato"></img>
                        <h3 className="product__box--name">Sapato floater preto</h3>
                        <spam className="product__box--star">
                        &#9733; &#9734; &#9734; &#9734; &#9734;
                        </spam>
                        <h2 className="product__box--price">por R$ 259,90</h2>
                        <h4 className="product__box--price2">ou em 9x de R$ 28,87</h4>
                        <button className="product__box--button">comprar</button>
                    </div>
                </div>
                <div className="col-1-of-4">
                <div className="product__box">
                    <div className="box--imagem">
                        <img src={sandalia} className="product__box--imagem product__box--imagem--off" alt="sandalia"></img>
                        <img src={poligon} className="product__off" alt="polygon"></img>
                        <spam className="product__off--name">OFF</spam>
                    </div>
                        <h3 className="product__box--name">Sandália linho brown</h3>
                        <spam className="product__box--star">
                        &#9733; &#9733; &#9733; &#9733; &#9734; 
                        </spam>
                        <h4 className="product__box--pricedescripton">de R$ 299,00</h4>
                        <h2 className="product__box--price"> por R$ 199,00</h2>
                        <h4 className="product__box--price2">ou em 4x de R$ 49,75</h4>
                        <div className="product__box-button-content">
                        <button className="product__box--button">comprar</button>
                        </div>
                </div>
                </div>
                <div className="col-1-of-4">
                <div className="product__box">
                    <div className="box--imagem">
                        <img src={bota} className="product__box--imagem product__box--imagem--off" alt="bota"></img>
                        <img src={poligon} className="product__off" alt="pilygon"></img>
                        <spam className="product__off--name">OFF</spam>
                    </div>
                        <h3 className="product__box--name">Bota mustang preto</h3>
                        <spam className="product__box--star">
                        &#9733; &#9733; &#9734; &#9734; &#9734; 
                        </spam>
                        <h4 className="product__box--pricedescripton">de R$ 329,00</h4>
                        <h2 className="product__box--price"> por R$ 299,00</h2>
                        <h4 className="product__box--price2">ou em 10x de R$ 29,90</h4>
                        <button className="product__box--button">comprar</button>
                </div>
                </div>
                <div className="col-1-of-4">
                <div className="product__box">
                        <img src={cinto} className="product__box--imagem" alt="cinto"></img>
                        <h3 className="product__box--name">Cinto semicromo preto 40MM</h3>
                        <spam className="product__box--star">
                        &#9733; &#9733; &#9733; &#9734; &#9734; 
                        </spam>
                        <h2 className="product__box--price"> por R$ 79,00</h2>                       
                        <button className="product__box--button">comprar</button>
                </div>
                </div>
                <img src={right} className="row--right" alt="right"></img>
            </div>
        </div>
   
    )
}