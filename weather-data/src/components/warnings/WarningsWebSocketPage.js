import React, { useEffect, useState } from 'react'
import WarningSocketList from '../list/warningSocketList'
import { ConnectToServer, unsubscribeToWarnigs, onMessage, subscribe, filterBySeverityLevlForNewRecords } from '../../api/socketHelper'
import SocketStor from '../../stores/SocketStore'
import { useRefresh } from 'react-tidy'
import { getWarningSinceTheLastUpdateAction } from '../../actions/warningsSocketActions'
import Spinner from '../common/Spinner'

function WarningsWebSocketPage() {


    const [warnings, setWarnings] = useState(SocketStor.getWarnings())
    ConnectToServer()

    const refresh = useRefresh()
    useEffect(() => {
        SocketStor.addChangeListener(onChange);
        if (warnings.length === 0) {
            onMessage()
        }
        return () => SocketStor.removeChangeListener(onChange)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [warnings.length])



    function onChange() {
        refresh()
        setWarnings(SocketStor.getWarnings())
    }

    function subscibe() {
        console.log('cliked')
        subscribe()
        onMessage()
    }


    return (
        <>

            <div>
                <div className="d-flex flex-row"   >
                    <input onChange={filterBySeverityLevlForNewRecords} className="form-control mr-sm-2" type="search" placeholder="Choose Severity Level"
                        style={{ width: 615 }} />
                    <button className="btn btn-outline-success " onClick={unsubscribeToWarnigs} style={{ width: 411 }}>Unsubscribe For Warnings</button>
                    <button className="btn btn-outline-success " onClick={subscibe} style={{ width: 411 }}>Subscribe For Warnings</button>
                    <button className="btn btn-outline-success " onClick={getWarningSinceTheLastUpdateAction} style={{ width: 411 }}>Get Wrarnings Since The Last Update</button>


                </div>
                <WarningSocketList data={warnings} />
                <Spinner />
            </div>
        </>
    )
}
export default WarningsWebSocketPage
