import dispatcher from '../appDispatcher'
import * as api from '../api/apiHelper'
import actionTypes from './actionTypes'


export function loadWarningsRxJS() {
    return api.getWarningsRxJs().then(records => {
        dispatcher.dispatch({
            actionType: actionTypes.LOAD_WARNING_RXJS,
            records
        })
    })
}