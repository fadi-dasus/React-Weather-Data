import React, { useEffect, useState } from 'react'
import { loadWarningsRxJSAction } from '../../actions/warningsSocketActions'
import WarningSocketList from '../list/warningSocketList'



function WarningsWebSocketPage() {
let warnings =[];
    return (
        <>
            
            <div>

                <WarningSocketList  data= {warnings}/>
            </div>
        </>
    )
}
export default WarningsWebSocketPage