import React from "react";
import logo from "../../assets/Logo_Netflix.png"
import userIcon from "../../assets/User_Netflix.png"
import "./Header.css";

export type Props = {
    isBlack: boolean;
}

export default ({ isBlack }: Props) => {

    return (
        <header className={isBlack ? 'black' : ''}>
            <div className="header--logo">
                <a href="">
                    <img src={logo} alt="Netflix" />
                </a>
            </div>
            <div className="header--nav">
                <nav>
                    <li>
                        <ul><a href="#">Início</a></ul>
                        <ul><a href="#">Séries</a></ul>
                        <ul><a href="#">Filmes</a></ul>
                        <ul><a href="#">Bombando</a></ul>
                        <ul><a href="#">Minha lista</a></ul>
                        <ul><a href="#">Navegar por idiomas</a></ul>
                    </li>
                </nav>
            </div>
            <div className="header--user">
                <a href="">
                    <img src={userIcon} alt="Perfil" />
                </a>
            </div>
        </header>
    );
}