import React from 'react'
import { fromEvent, interval } from 'rxjs'
import { ajax } from 'rxjs/ajax'
import { concatMap } from 'rxjs/operators'


function WarningsRxJsPage() {

    const observable$ = interval(1000).subscribe(
        value => ajax('http://localhost:3001/warnings')
            .subscribe(
                response => console.log(response.response),
                error => console.log("my error"),
                complete => console.log('""""""""complete""""""""')
            )
    )


    function observableFunc() {
        console.log('unsubscribing')
        observable$.unsubscribe()
    }


    return (
        <>
            <h2>WarningsRxJsPage</h2>
            <h4>•	display current warnings when the page load and update them without reloading the page when they are updated on the server. </h4>
            <h4>•	display changes in warnings since last update. </h4>
            <h4>•	allow the user to set a minimal severity level to only display some of the warnings. Don't reload the warnings when the user changes the minimal severity level.</h4>
            <h4>•	allow the user to complete turn off warnings. Do not receive warnings from the server while they are turned off, but reload them when they are turned on again.</h4>
            <div>

                <button onClick={observableFunc}>unsubscribe Warnings</button>

            </div>
        </>
    )
}
export default WarningsRxJsPage