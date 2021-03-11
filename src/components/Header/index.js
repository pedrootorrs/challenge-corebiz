import React from "react";
import "./style.css";
import logo from "../Imagens/logo.png";
import search from "../Imagens/search.png";
import user from "../Imagens/user.png";
import cart from "../Imagens/cart.png";


export default function Header(){
  return(
     
   <div className="header">
      
      <img src={logo} className="logo" alt="logo"></img>
      <form action="#" className="searchCore" method="post">
         <input className="search" placeholder="O que você está procurando?" type="text" ></input>
         <a href="#" >
         <img src={search} className="search-icon" alt="search"></img>
         </a>
      </form>
      <section className="profile">
         <a href="#">
            <img src={user} className="user"></img>
            <p>Minha Conta</p>
         </a>
         </section>
         <div className="cart">
            <a href="#">
            <img src={cart}></img>
            </a>
            <spam className="cart-notfication">1</spam>
         </div>
      
   </div>
  )}

 
  