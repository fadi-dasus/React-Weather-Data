import React, { useEffect, useState } from 'react'
import { loadWarningsRxJSAction } from '../../actions/warningsSocketActions'
import WarningSocketList from '../list/warningSocketList'
import { ConnectToServer, unsubscribe} from '../../api/socketHelper'


function WarningsWebSocketPage() {
    let warnings = [];


    
    return (
        <>

            <div>
            <div className="d-flex flex-row"   >
                <input onChange={ConnectToServer} className="form-control mr-sm-2" type="search" placeholder="Choose Severity Level"
                    style={{ width: 615 }} />
                <button className="btn btn-outline-success " onClick={unsubscribe} style={{ width: 411 }}>Unsubscribe For Warnings</button>
                <button className="btn btn-outline-success " onClick={ConnectToServer} style={{ width: 411 }}>Subscribe For Warnings</button>
                <button className="btn btn-outline-success " onClick={ConnectToServer} style={{ width: 411 }}>Get Wrarnings Since The Last Update</button>

            </div>
                <WarningSocketList data={warnings} />
            </div>
        </>
    )
}
export default WarningsWebSocketPage