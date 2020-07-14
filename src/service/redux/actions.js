const setHeaderDesc = (items) => {
    return {
        type: 'SET_HEADER_DESC',
        items
    }
}

const setActiveHeaderDesc = (id) => {
    return {
        type: 'SET_ACTIVE_HEADER_DESC',
        id
    }
}

const onToggleMenu = () => {
    return {
        type: 'TOGGLE_HEADER_MENU'
    }
}

export { setHeaderDesc, setActiveHeaderDesc, onToggleMenu }