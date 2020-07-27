import React from 'react'

import WOW from 'wowjs'

export default class Setings extends React.Component {
    componentDidMount() {
        new WOW.WOW({
            live: false
        }).init()
    }
}