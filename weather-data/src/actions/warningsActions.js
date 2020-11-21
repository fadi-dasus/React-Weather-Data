import dispatcher from '../appDispatcher'
import { getWarning } from '../api/ajaxHelper'
import actionTypes from './actionTypes'


export function loadWarningsRxJSAction() {
    getWarning().subscribe(
        value => {
            return dispatcher.dispatch({
                actionType: actionTypes.LOAD_WARNING_RXJS,
                records: value.response.warnings
            },
                error => console.log("my error"),
                complete => console.log('""""""""complete""""""""')
            )
        })
}