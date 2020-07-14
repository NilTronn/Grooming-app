import React from 'react'

export default function HeaderDesc({items, item}) {
    const {title, text} = item

    return (
        <>
            {
                items.map((elem, i) => {
                    let displayClass = ""
                    let fadeClass = ""

                    if (elem.id !== item.id) {
                        displayClass += " display_none"
                    } else {
                        fadeClass += " fade"
                    }

                    return (
                        <div key={i} className={"header_text_block" + displayClass}>
                            <h2 className={fadeClass}>{title}</h2>
                            <hr/>
                            <p className={fadeClass}>{text}</p>
                        </div>
                    )
                })
            }
        </>
    )

}