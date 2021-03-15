import React from "react";
import "./style.css";
import mail from "../Imagens/mail.png";
import headset from "../Imagens/headset.png";
import corebiz from "../Imagens/corebiz.png";
import vtex from "../Imagens/vtex.png";
export default function Footer(){
    return(
        <div className="footer">
            <section className="address">
            <h3>Localização</h3>
            <p>Avenida Andrômeda, 200. Bloco 6 e 8</p>
            <p>Alphaville</p>
            <p><a href="mailto:brasil@corebiz.ag">brasil@corebiz.ag</a></p>
            <p><a href="tell:+551130901039">+55 11 3090 1039</a></p>
            </section>
            <section className="contact">
                <ul>
                    <li>
                        <a href="#">
                            <img src={mail} alt=" "></img>
                            <p>Entre em contato</p>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src={headset} alt=" "></img>
                            <p>Fale com o nosso consultor online</p>
                        </a>
                    </li>
                </ul>
            </section>
            <section className="created">
                <div>
                    <p>Created by</p>
                    <img src={corebiz} alt="COREBIZ"></img>
                </div>
                <div>
                    <p>Powered by</p>
                    <img src={vtex} alt="VTEX"></img>
                </div>
            </section>
        </div>
    )
}