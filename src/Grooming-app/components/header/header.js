import React from 'react'
import HeaderMenu from './header-menu'
import HeaderImg from './header-img'

import MainBG from './img/bg.png'

import './header.sass'

export default function Header() {
    return (
        <div className="header" style={{background: `url(${MainBG})`}}>
            <HeaderMenu/>
            <HeaderImg/>
        </div>
    )
}