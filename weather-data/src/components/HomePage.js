import React from "react";
import sea from '../images/sea.jpg';


function HomePage() {

    const whiteColor = 'p-3 mb-2 bg-gradient-danger text-white'
    // p-3 mb-2 bg-gradient-danger text-white
    return (
        <div className="jumbotron" style={{ backgroundImage: "url(" + sea + ")", height: '200%', position: 'absolute', width: '98.5%' }}   >
            <h1 >Course Assignment 3.1 "Flux Pattern With React"</h1>
            <p className={whiteColor}>One way data binding using flux facebook Api.</p>

            <h1>Course Assignment 4.1 "RxJS"</h1>
            <p className={whiteColor}> Display warnings and keeping them up to date using RxJs library.</p>

            <h1>Course Assignment 4.2 "WebSocket"</h1>

            <p className={whiteColor}>•display current warnings when the page load and update them without reloading the page when they are updated on the server. </p>
            <p className={whiteColor}>•display changes in warnings since last update. </p>
            <p className={whiteColor}>•allow the user to set a minimal severity level to only display some of the warnings. Don't reload the warnings when the user changes the minimal severity level.</p>
            <p className={whiteColor}>•allow the user to complete turn off warnings. Do not receive warnings from the server while they are turned off, but reload them when they are turned on again.</p>





        </div >
    );
}

export default HomePage;
