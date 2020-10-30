import React from "react";
import HomePage from "./HomePage";
import Header from "./common/Header";
import WeatherDataPage from './WeatherDataPage'
import { Route, Switch, Redirect } from "react-router-dom";
import NotFoundPage from "./NotFoundPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
    return (
        <div className="container-fluid">
            <ToastContainer autoClose={3000} hideProgressBar />
            <Header />
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/weatherData" exact component={WeatherDataPage} />


                <Route component={NotFoundPage} />
            </Switch>
        </div>
    );
}

export default App;
