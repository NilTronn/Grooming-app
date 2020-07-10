import React from 'react'

export default function HeaderDesc({item}) {
    const {title, text} = item

    return (
        <div className="header_text">
        <h2>{title}</h2>
        <hr/>
        <p>{text}</p>
        </div>
    )

}