import React from 'react'
import Logo from './img/logo.png'

export default function HeaderMenu() {
    return (
        <div className="header_menu">
            <div className="header_menu_left">
                <img src={Logo} alt="logo" className="header_menu_left_logo"/>
                <div className="header_menu_left_title">Салон Собачьего Совершенства</div>
                <a href="tel:+79852856855" className="phone">
                    <img src={process.env.PUBLIC_URL + '/images/phone.png'} alt="phone"/>
                    <div>+7 (985) 285-68-55</div>
                </a>
            </div>
            <div className="header_menu_right">
                <ul className="header_menu_right_ul">
                    <li className="header_menu_right_li">Главная</li>
                    <li className="header_menu_right_li">Услуги</li>
                    <li className="header_menu_right_li">Клиентам</li>
                    <li className="header_menu_right_li">О нас</li>
                    <li>Контакты</li>
                </ul>
            </div>
        </div>
    )
}