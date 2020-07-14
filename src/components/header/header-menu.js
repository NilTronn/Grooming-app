import React from 'react'
import Logo from './img/logo.png'
import {connect} from 'react-redux'
import {onToggleMenu} from '../../service/redux/actions'

const mapStateToProps = ({headerMenu}) => {
    return {
        headerMenu
    }
}

export default connect(mapStateToProps, {onToggleMenu})(function HeaderMenu({headerMenu, onToggleMenu}) {
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
                <div className="header_menu_right_875">
                    <a href="tel:+79852856855" className="phone">
                        <img src={process.env.PUBLIC_URL + '/images/phone.png'} alt="phone"/>
                        <div>+7 (985) 285-68-55</div>
                    </a>
                    <div className="header_menu_right_menu">
                        <div id="menuToggle">
                            <input type="checkbox" onChange={onToggleMenu}/>
                            <span id="span1"></span>
                            <span id="span2"></span>
                            <span id="span3"></span>
                        </div>
                    </div>
                    <div className={"header_menu_fade_ul " + (headerMenu ? "fade_1_9" : "unFade_1_9")}>
        
                    </div>
                </div>
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
})