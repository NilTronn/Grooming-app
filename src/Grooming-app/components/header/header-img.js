import React, {useContext, useEffect} from 'react'
import HeaderDesc from './header-desc'
import {GroomingServiceContext} from '../../service/contexts'

import mainImg from './img/head.png'
import iconFitness from './img/icon_fitness.png'
import iconGrooming from './img/icon_grooming.png'
import iconHandling from './img/icon_handling.png'
import iconTooth from './img/icon_tooth.png'

import {connect} from 'react-redux'
import {setHeaderDesc, setActiveHeaderDesc} from '../../service/redux/actions'

const mapStateToProps = ({activeHeaderDesc}) => {
    return {
        item: activeHeaderDesc
    }
}

const mapDispatchToProps = {setHeaderDesc, setActiveHeaderDesc}

export default connect(mapStateToProps, mapDispatchToProps)(function HeaderImg({item, setHeaderDesc, setActiveHeaderDesc}) {
    const groomingService = useContext(GroomingServiceContext)

    useEffect(() => {
        groomingService.getHeaderDesc()
            .then(items => {
                setHeaderDesc(items)
                console.log(items)
            })
    }, [])

    return (
        <div className="header_img">
            <img src={mainImg} alt="main_bg"/>
            <div className="header_img_wrapper">
                <div className="header_img_wrapper_border">
                    {/* <div className="header_link_block">
                        <div className="header_link" onMouseEnter={() => setActiveHeaderDesc(1)}>
                            <span className="plus_icon">
                                +
                            </span>
                            <img src={iconGrooming} alt="grooming" className="icon-main"/>
                        </div>
                        <div className="header_link" onMouseEnter={() => setActiveHeaderDesc(2)}>
                            <span className="plus_icon">
                                +
                            </span>
                            <img src={iconHandling} alt="handling" className="icon-main"/>
                        </div>
                        <div className="header_link" onMouseEnter={() => setActiveHeaderDesc(3)}>
                            <span className="plus_icon">
                                +
                            </span>
                            <img src={iconTooth} alt="tooth" className="icon-main"/>
                        </div>
                        <div className="header_link" onMouseEnter={() => setActiveHeaderDesc(4)}>
                            <span className="plus_icon">
                                +
                            </span>
                            <img src={iconFitness} alt="fitness" className="icon-main"/>
                        </div>
                    </div> */}
                </div>
                <HeaderDesc item={item}/>
            </div>
        </div>
    )
})