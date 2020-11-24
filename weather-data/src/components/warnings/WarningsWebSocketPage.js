import React, { useEffect, useState } from 'react'
import WarningSocketList from '../list/warningSocketList'
import { ConnectToServer, unsubscribe } from '../../api/socketHelper'
import SocketStor from '../../stores/SocketStore'

function WarningsWebSocketPage() {

    //let warnings =[];
    const [warnings, setWarnings] = useState(SocketStor.getWarnings())

    useEffect(() => {
        SocketStor.addChangeListener(onChange);
        if (warnings.length === 0) ConnectToServer()
        return () => SocketStor.removeChangeListener(onChange)
    }, [warnings.length])



    function onChange() {
        setWarnings(SocketStor.getWarnings())
    }
  
    
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
