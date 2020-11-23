import React, { useEffect, useState } from 'react'
import WarningList from '../list/warningList'
import {unsubscribe} from '../../api/socketHelper'
import { loadWarningsSocketData} from '../../actions/warningsSocketActions'
import SocketStor from '../../stores/SocketStore'

function WarningsWebSocketPage() {
    
 //let warnings =[];
   const [warnings, setWarnings] = useState(SocketStor.getWarnings())

   useEffect(() => {
    
    SocketStor.addChangeListener(onChange);
       if (warnings.length === 0) {

           SocketStor.getWarnings()
           loadWarningsSocketData()
       }
       return () => SocketStor.removeChangeListener(onChange)
   }, [warnings.length])


   function onChange() {
       setWarnings(SocketStor.getWarnings())
   }

    
    return (
        <>

            <div>
            <div className="d-flex flex-row"   >
                <input onChange={loadWarningsSocketData} className="form-control mr-sm-2" type="search" placeholder="Choose Severity Level"
                    style={{ width: 615 }} />
                <button className="btn btn-outline-success " onClick={unsubscribe} style={{ width: 411 }}>Unsubscribe For Warnings</button>
                <button className="btn btn-outline-success " onClick={loadWarningsSocketData} style={{ width: 411 }}>Subscribe For Warnings</button>
                <button className="btn btn-outline-success " onClick={loadWarningsSocketData} style={{ width: 411 }}>Get Wrarnings Since The Last Update</button>
                <button className="btn btn-outline-success " onClick={ warnings.map(x=> console.log(x.severity))} style={{ width: 411 }}>Get adasdasdads Since The Last Update</button>

            </div>
            </div>
        </>
    )
}
export default WarningsWebSocketPage
{/* <WarningList data={warnings} /> */}