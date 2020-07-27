import React from 'react'
import HeaderMenu from './header-menu'
import HeaderImg from './header-img'

import MainBG from './img/bg.png'

export default () => (
    <div className="header">
        <HeaderMenu/>
        <HeaderImg/>
        <div className="main_bg_block" style={{backgroundImage: `url(${MainBG})`}}></div>
    </div>
)