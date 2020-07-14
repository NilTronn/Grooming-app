import {createStore} from 'redux'
import Reducer from './service/redux/reducer'

const store = createStore(Reducer)

export default store