import React from 'react';

import menu from '../img/menu.png';
import '../styles/Navbar.scss';

class Navbar extends React.Component{
    
    render(){
        function dropDownMenu() {
            var header__menu = document.getElementById('header__menu');
            if(header__menu.classList.contains("ocultarMenu")){
                header__menu.classList.remove("ocultarMenu");
            }else{
                header__menu.classList.add("ocultarMenu");
            }
        }
        return(
        <header className="header">
            <div className="header__logo">
                <p>Hiram Montesillo</p>
                <img src={menu} onClick={dropDownMenu} id="menu__png" alt="menu"/>
            </div>
            <div className="header__menu" id="header__menu">
                <ul>
                    <li><button onClick={dropDownMenu}>Acerca de mi</button></li>
                    <li><button onClick={dropDownMenu}>Habilidades</button></li>
                    <li><button onClick={dropDownMenu} >Proyectos</button></li>
                </ul>
            </div>
        </header>
        )
    }
}

export default Navbar;