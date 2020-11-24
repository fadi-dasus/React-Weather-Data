import dispatcher from '../appDispatcher'
import * as api from '../api/socketHelper'
import actionTypes from './actionTypes'
import { fromEvent } from 'rxjs'

let severityFilterValue = 0;
export function setupWarningSeveritySelection() {
    let severityFilter = document.getElementById('severitySelect')

    // create an observable of selecting different filter value
    const myObservable = fromEvent(severityFilter, 'change');

    // subscribe to the obsevable
    myObservable.subscribe(event => selectedSeverityChanged(event.target.value)).then(records => {
        dispatcher.dispatch({
            actionType: actionTypes.FILTER_WARNING_SOCKET,
            records
        })
    })
}


export function selectedSeverityChanged(newValue) {
    severityFilterValue = newValue;
}



// export function loadWarningsSocketData() {
//      api.ConnectToServer().then(records => {
//         dispatcher.dispatch({
//             actionType: actionTypes.LOAD_SOCKET_RECORDS,
//             records
//         })
//     })
// }