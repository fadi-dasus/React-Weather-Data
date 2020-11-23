import React, { useEffect, useState } from 'react'
//  import { getWarningRxJS } from '../../api/ajaxHelper'
import { loadWarningsRxJSAction, unsubscribbe, setMinSeverityLevel, getWarningSinceTheLastUpdateAction } from '../../actions/warningsActions'
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


    return (
        <>
            <div className="d-flex flex-row"   >
                <input onChange={setMinSeverityLevel} className="form-control mr-sm-2" type="search" placeholder="Choose Severity Level"
                    style={{ width: 615 }} />
                <button className="btn btn-outline-success " onClick={unsubscribbe} style={{ width: 411 }}>Unsubscribe For Warnings</button>
                <button className="btn btn-outline-success " onClick={loadWarningsRxJSAction} style={{ width: 411 }}>Subscribbe For Warnings</button>
                <button className="btn btn-outline-success " onClick={getWarningSinceTheLastUpdateAction} style={{ width: 411 }}>Get Wrarnings Since The Last Update</button>

            </div>
            <WarningList data={warnings} />
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
