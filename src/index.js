import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Grooming-app/components/app'
import {GroomingServiceContext} from './Grooming-app/service/contexts'
import GroomingService from './Grooming-app/service/grooming-service'
import store from './Grooming-app/store'
import {Provider} from 'react-redux'

const groomingService = new GroomingService()

ReactDOM.render(
<Provider store={store}>
    <GroomingServiceContext.Provider value={groomingService}>
        <App/>
    </GroomingServiceContext.Provider>
</Provider>

, document.getElementById('root'));