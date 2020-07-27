import React from 'react';
import ReactDOM from 'react-dom';

import Setings from './service/scripts'
import 'animate.css/animate.compat.css'
import './service/styles/index.min.css'


import App from './components/app'
import {GroomingServiceContext} from './service/contexts'
import GroomingService from './service/grooming-service'
import store from './store'
import {Provider} from 'react-redux'
const groomingService = new GroomingService()

class MainClass extends Setings {
    render() {
        return (
            <Provider store={store}> 
                <GroomingServiceContext.Provider value={groomingService}>
                    <App/>
                </GroomingServiceContext.Provider> 
            </Provider>
        )
    }
}

ReactDOM.render(<MainClass/>, document.getElementById('root'));