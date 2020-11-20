import React from 'react'
function WarningsRxJsPage() {

    return (
        <div>
            <h2>WarningsRxJsPage</h2>
            <h4>•	display current warnings when the page load and update them without reloading the page when they are updated on the server. </h4>
            <h4>•	display changes in warnings since last update. </h4>
            <h4>•	allow the user to set a minimal severity level to only display some of the warnings. Don't reload the warnings when the user changes the minimal severity level.</h4>
            <h4>•	allow the user to complete turn off warnings. Do not receive warnings from the server while they are turned off, but reload them when they are turned on again.</h4>

        </div>
    )
}
export default WarningsRxJsPage