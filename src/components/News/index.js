import React from "react";
import "./style.css";

export default function News(){
    return (
        <div className="NewsCore">
            <div>
                <form action="#" className="newsBox">
                    <h2>Participe de nossas news com promoções e novidades!</h2>
                    <div className="newsItens">
                        <div clasname="boxs">
                        <input className="nome" placeholder="Digite seu nome" type="name"></input>
                        <input className="email" placeholder="Digite seu e-mail" type="email"></input>
                        
                        </div>
                        <button className="buttonNews">Eu quero !</button>
                    </div>
                    
                </form>

            </div>
        </div>
    )
}