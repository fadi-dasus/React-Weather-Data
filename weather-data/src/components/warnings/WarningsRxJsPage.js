import React, { useEffect, useState } from 'react'
//  import { getWarningRxJS } from '../../api/ajaxHelper'
import { loadWarningsRxJSAction, unsubscribbe } from '../../actions/warningsActions'
import RxJSStore from '../../stores/RxStor'
import WarningList from '../list/warningRxJsList'

function WarningsRxJsPage() {

    const [warnings, setWarnings] = useState(RxJSStore.getWarnings())

    useEffect(() => {
        RxJSStore.addChangeListener(onChange);
        if (warnings.length === 0) loadWarningsRxJSAction()
        return () => RxJSStore.removeChangeListener(onChange)
    }, [warnings.length])


    function onChange() {
        setWarnings(RxJSStore.getWarnings())
    }
    function log() {
        // console.log(warnings[0][0])
    }

    return (
        <>
            <h2>WarningsRxJsPage</h2>
            <WarningList data={warnings} />
            <button onClick={unsubscribbe}>Unsubscribe</button>
            <button onClick={log}>Log</button>
        </>
    )
}
export default WarningsRxJsPage


/*
 <h4>•display current warnings when the page load and update them without reloading the page when they are updated on the server. </h4>
<h4>•display changes in warnings since last update. </h4>
<h4>•allow the user to set a minimal severity level to only display some of the warnings. Don't reload the warnings when the user changes the minimal severity level.</h4>
<h4>•allow the user to complete turn off warnings. Do not receive warnings from the server while they are turned off, but reload them when they are turned on again.</h4>
*/





    // const observable$ = getWarningRxJS()


    // function unsubscribeClickHandler() {
    //     console.log('unsubscribing')
    //     observable$.unsubscribe()
    // }
