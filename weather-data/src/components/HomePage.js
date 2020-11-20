import React from "react";
import sea from '../images/sea.jpg';


function HomePage() {

    const whiteColor = 'p-3 mb-2 bg-gradient-danger text-white'
    // p-3 mb-2 bg-gradient-danger text-white
    return (
        <div className="jumbotron" style={{ backgroundImage: "url(" + sea + ")", height: '200%', position: 'absolute', width: '98.5%' }}
        >
            <h1 >Course Assignment 3.1 "Flux Pattern With React"</h1>
            <p className={whiteColor}>One way data binding using flux facebook Api.</p>

            <h1>Course Assignment 4.1 "RxJS"</h1>
            <p className={whiteColor}> Display warnings and keeping them up to date using RxJs library.</p>

            <h1>Course Assignment 4.2 "WebSocket"</h1>
            <p className={whiteColor}> Display warnings and keeping them up to date using webSocket protocol.</p>



        </div >
    );
}

export default HomePage;
