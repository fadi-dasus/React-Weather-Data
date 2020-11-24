import React, { useEffect, useState } from 'react'
import { loadWarningsRxJSAction, unsubscribbe, setMinSeverityLevel, getWarningSinceTheLastUpdateAction } from '../../actions/warningsActions'
import RxJSStore from '../../stores/RxStor'
import WarningList from '../list/warningList'
import { useRefresh } from 'react-tidy'
import Spinner from '../common/Spinner'

function WarningsRxJsPage() {

    const refresh = useRefresh()
    const [warnings, setWarnings] = useState(RxJSStore.getWarnings())
    useEffect(() => {
        RxJSStore.addChangeListener(onChange);
        if (warnings.length === 0)
            loadWarningsRxJSAction()
        return () => RxJSStore.removeChangeListener(onChange)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [warnings.length])


    function onChange() {
        setWarnings(RxJSStore.getWarnings())
        refresh()
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
            <Spinner />
        </>
    )
}
export default WarningsRxJsPage



