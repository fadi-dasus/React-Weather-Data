import React from 'react';
import HomePage from './HomePage';
import Header from './common/Header';
import WeatherDataPage from './WeatherDataPage'
import WarningsRxJsPage from './warnings/WarningsRxJsPage'
import WarningsWebSocketPage from './warnings/WarningsWebSocketPage'


import AddMeasurementPage from './AddMeasurementPage'
import { Route, Switch } from 'react-router-dom';
import NotFoundPage from './NotFoundPage';
import { ToastContainer } from 'react-toastify';
import ForecastPage from './ForecastPage'
import 'react-toastify/dist/ReactToastify.css';


function App() {
    return (
        <div className='container-fluid'  >
            <ToastContainer autoClose={3000} hideProgressBar />
            <Header />
            <Switch>
                <Route path='/' exact component={HomePage} />
                <Route path='/weatherData' component={WeatherDataPage} />
                <Route path='/forecast' component={ForecastPage} />
                <Route path='/addMeasurementPage' component={AddMeasurementPage} />
                <Route path='/RxJs' component={WarningsRxJsPage} />
                <Route path='/webSocket' component={WarningsWebSocketPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div >
    );
}

export default App;
