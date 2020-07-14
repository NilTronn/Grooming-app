import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app'
import {GroomingServiceContext} from './service/contexts'
import GroomingService from './service/grooming-service'
import store from './store'
import {Provider} from 'react-redux'

const groomingService = new GroomingService()

ReactDOM.render(
    <Provider store={store}> 
        <GroomingServiceContext.Provider value={groomingService}>
            <App/>
        </GroomingServiceContext.Provider> 
    </Provider>
, document.getElementById('root'));
