import React from "react";
import sea from '../images/sea.jpg';


function HomePage() {
    return (
        // backgroundImage: "url(" + Background + ")"
        <div className="jumbotron" style={{ backgroundImage: "url(" + sea + ")" }}>
            <h1>Course Assignment 3 "Flux Pattern With React"</h1>
            <p>One way data binding using flux facebook Api.</p>
        </div >
    );
}

export default HomePage;
