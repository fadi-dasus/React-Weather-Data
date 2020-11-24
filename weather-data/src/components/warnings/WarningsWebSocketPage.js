import React, { useEffect, useState } from 'react'
import WarningSocketList from '../list/warningSocketList'
import { ConnectToServer, unsubscribe } from '../../api/socketHelper'
import SocketStor from '../../stores/SocketStore'
import { useRefresh } from 'react-tidy'
import { setMinSeverityLevel, getWarningSinceTheLastUpdateAction } from '../../actions/warningsSocketActions'
import Spinner from '../common/Spinner'

function WarningsWebSocketPage() {


    const [warnings, setWarnings] = useState(SocketStor.getWarnings())
    const refresh = useRefresh()
    useEffect(() => {
        SocketStor.addChangeListener(onChange);
        if (warnings.length === 0) ConnectToServer()
        return () => SocketStor.removeChangeListener(onChange)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [warnings.length])



    function onChange() {
        refresh()
        setWarnings(SocketStor.getWarnings())
    }


    return (
        <>

            <div>
                <div className="d-flex flex-row"   >
                    <input onChange={setMinSeverityLevel} className="form-control mr-sm-2" type="search" placeholder="Choose Severity Level"
                        style={{ width: 615 }} />
                    <button className="btn btn-outline-success " onClick={unsubscribe} style={{ width: 411 }}>Unsubscribe For Warnings</button>
                    <button className="btn btn-outline-success " onClick={ConnectToServer} style={{ width: 411 }}>Subscribe For Warnings</button>
                    <button className="btn btn-outline-success " onClick={getWarningSinceTheLastUpdateAction} style={{ width: 411 }}>Get Wrarnings Since The Last Update</button>


                </div>
                <WarningSocketList data={warnings} />
                <Spinner />
              </div>
        </>
    )
}
export default WarningsWebSocketPage
