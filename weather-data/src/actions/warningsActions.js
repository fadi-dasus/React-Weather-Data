import dispatcher from '../appDispatcher'
import { interval } from 'rxjs'
import { ajax } from 'rxjs/ajax'
import actionTypes from './actionTypes'
import { map, mergeMap } from 'rxjs/operators'
import RxJSStore from '../stores/RxStor'
import { toast } from 'react-toastify'


export const warningUrl = 'http://localhost:3001/warnings'
export const warningUpdateUrl = 'http://localhost:3001/warnings/since/'


const ajaxObservable$ = (url) => interval(2000).pipe(mergeMap(() => ajax(url)), map(ajaxResponse => ajaxResponse.response.warnings))
let ajaxSubscriber$ = undefined

export function loadWarningsRxJSAction() {
    ajaxSubscriber$ = ajaxObservable$(warningUrl)
        .subscribe(
            value => dispatchAction(actionTypes.LOAD_WARNING_RXJS, value)
        )
}

export function getWarningSinceTheLastUpdateAction() {
    const time = RxJSStore.getTimeFromTheLastRecord()
    unsubscribbe()
    ajaxSubscriber$ = ajaxObservable$(warningUpdateUrl + time)
        .subscribe(
            value => dispatchAction(actionTypes.GET_UPDATES_SINCE_LAST, value),
            error => toast.success('You have no data since the last update'))
}

export function unsubscribbe() {
    if (ajaxSubscriber$ !== undefined)
        ajaxSubscriber$.unsubscribe()
}

function dispatchAction(action, response) {
    dispatcher.dispatch({
        actionType: action,
        records: response
    }
    )
}

export function setMinSeverityLevel(event) {
    unsubscribbe()
    ajaxSubscriber$ = ajaxObservable$(warningUrl)
        .subscribe(
            value => {
                dispatcher.dispatch({
                    actionType: actionTypes.FILTER_WARNING_RXJS,
                    records: value,
                    value: event.target.value
                }
                )
            },
            error => toast.error('Sorry an error has occured'),

        )
}


