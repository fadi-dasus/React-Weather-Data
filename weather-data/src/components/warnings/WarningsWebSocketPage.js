import React, { useEffect, useState } from 'react'
import { loadWarningsRxJSAction } from '../../actions/warningsSocketActions'
import WarningSocketList from '../list/warningSocketList'
import { ConnectToServer } from '../../api/socketHelper'


function WarningsWebSocketPage() {
    let warnings = [];
    return (
        <>

            <div>
                <button onClick={ConnectToServer}>Unsubscribe</button>
                <button onClick={ConnectToServer}>Subscribe</button>
                <WarningSocketList data={warnings} />
            </div>
        </>
    )
}
export default WarningsWebSocketPage