import React from "react";
import sea from '../images/sea.jpg';


function HomePage() {


    return (
        <div className="jumbotron" style={{ backgroundImage: "url(" + sea + ")", height: '100%', position: 'absolute', width: '98%' }}
        >
            <h1>Course Assignment 3 "Flux Pattern With React"</h1>
            <p>One way data binding using flux facebook Api.</p>
        </div >
    );
}

export default HomePage;
