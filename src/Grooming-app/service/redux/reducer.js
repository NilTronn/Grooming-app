const initialState = {
    headerDesc: [],
    activeHeaderDesc: {
        "title": "чистка зубов",
        "text": "Важнейшим этапом ухода у животных является профессиональная гигиена ротовой полости. У нас в салоне эта процедура выполняется с помощью ультразвука. Без наркоза!",
        "id": 4
    }
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