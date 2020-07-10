import React from 'react'
import './header.css'
import Logo from './img/logo.png'

export default function Header() {
    return (
        <div className="header_wrapper">
            <div className="header">
                <div className="container">
                    <img className="logo" src={Logo} alt="logo"/>
                    <span className="title">WordPress интенсив</span>
                    <h1>Создать свой сайт на WordPress </h1>
                    <hr/>
                    <h2>это просто!</h2>
                    <hr/>
                    <h1>Куда сложнее сделать это правильно!</h1>
                </div>
            </div>
        </div>
    )
}