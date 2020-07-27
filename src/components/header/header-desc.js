import React from 'react'

export default ({items, item}) => {
    const {title, text} = item

    return (
        <>
            {
                items.map((elem, i) => {
                    if (elem.id === item.id) {
                        return (
                            <div key={i} className={"header_text_block"}>
                                <h2 className="fade">{title}</h2>
                                <hr/>
                                <p className="fade">{text}</p>
                            </div>
                        )
                    }
                })
            }
        </>
    )

}