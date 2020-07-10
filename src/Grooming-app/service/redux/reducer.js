const initialState = {
    headerDesc: [],
    activeHeaderDesc: {
        "title": "хендлинг",
        "text": "Вам необходимы услуги хендлера? Ждем Вас! Наши хендлеры профессионалы своего дела. С нами вы достигнете наилучшего результата.",
        "id": 1
    },
}

export default function Reducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_HEADER_DESC':
            return {
                ...state,
                headerDesc: action.items
            }
        case 'SET_ACTIVE_HEADER_DESC':
            return {
                ...state,
                activeHeaderDesc: state.headerDesc.filter(({id}) => (id === action.id))[0]
            }
        default:
            return state
    }
}