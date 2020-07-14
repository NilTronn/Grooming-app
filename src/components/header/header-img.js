import React, {useContext, useEffect} from 'react'
import HeaderDesc from './header-desc'
import {GroomingServiceContext} from '../../service/contexts'

// import mainImg from './img/Attachments_m_kazanceva@mail.ru_2020-07-10_19-55-38/veHvz_2i6dc.jpg'
import mainImg from './img/head_no_bg.png'

import {connect} from 'react-redux'
import {setHeaderDesc, setActiveHeaderDesc} from '../../service/redux/actions'

const mapStateToProps = ({activeHeaderDesc, headerDesc}) => {
    return {
        item: activeHeaderDesc,
        items: headerDesc
    }
}

const mapDispatchToProps = {setHeaderDesc, setActiveHeaderDesc}

export default connect(mapStateToProps, mapDispatchToProps)(function HeaderImg({item, items, setHeaderDesc, setActiveHeaderDesc}) {
    const groomingService = useContext(GroomingServiceContext)

    let indexSlide = 1
    let intervalID

    // const [slideIndex, setSlideIndex] = useState(1)

    useEffect(() => {
        groomingService.getHeaderDesc()
            .then(items => {
                setHeaderDesc(items)
                intervalID = setInterval(() => {
                    setActiveItem(items)
                }, 10000)
            })
    }, [])

    function setActiveItem(items) {
        indexSlide = nextID(indexSlide, items)
        setActiveHeaderDesc(indexSlide)
    }

    function setActiveItemBtn(id) {
        clearInterval(intervalID)
        // indexSlide = id
        // intervalID = setInterval(() => {
        //     setActiveItem(items)
        // }, 5000)
        setActiveHeaderDesc(id)
    }

    function nextID(id, items) {
        if (id === items.length) {
            return 1
        }
        return id+1
    }

    return (
        <div className="header_img">
            <img src={mainImg} alt="main_bg"/>
            <div className="header_img_wrapper">
                <div className="header_img_wrapper_border"></div>
                <div className="header_text">
                    <div className="header_slider">
                        {
                            items.map((elem, i) => {
                                let classNames = ["header_slider_block", "header_slider_in_block"]

                                if (elem.id === item.id) {
                                    classNames[0] += " active_list_item"
                                    classNames[1] += " active_list_item"
                                }

                                return (
                                    <div 
                                        className={classNames[0]}
                                        key={elem.id}
                                        onClick={() => setActiveItemBtn(i + 1)}
                                    ><div className={classNames[1]}></div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <button className="header_order_670">Заказать услугу</button>
                    <HeaderDesc items={items} item={item}/>
                </div>
                <button className="header_order">Заказать услугу</button>
            </div>
        </div>
    )
})