import React from 'react'

export default function HeaderDesc({items, item}) {
    const {title, text} = item

    return (
        <>
            {
                items.map((elem, i) => {
                    let classNames = ""

                    if (elem.id !== item.id) {
                        classNames += " display_none"
                    } else {
                        classNames += " fade"
                    }

                    return (
                        <div key={i} className="header_text_block">
                            <h2 className={classNames}>{title}</h2>
                            <hr className={classNames}/>
                            <p className={classNames}>{text}</p>
                        </div>
                    )
                })
            }
        </>
    )

}