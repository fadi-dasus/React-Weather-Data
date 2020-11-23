import dispatcher from '../appDispatcher'
import { interval } from 'rxjs'
import { ajax } from 'rxjs/ajax'
import actionTypes from './actionTypes'
import { filter, map, concatMap, tap, mergeMap } from 'rxjs/operators'

export const warningUrl = 'http://localhost:3001/warnings'

const ajaxObservable$ = interval(2000).pipe(mergeMap(() => ajax(warningUrl)), map(ajaxResponse => ajaxResponse.response.warnings))

let ajaxSubscriber$ = undefined

export function loadWarningsRxJSAction() {
    ajaxSubscriber$ = ajaxObservable$
        .subscribe(
            value => {
                dispatcher.dispatch({
                    actionType: actionTypes.LOAD_WARNING_RXJS,
                    records: value
                }
                )
            })
}


export function unsubscribbe() {
    console.log('unsubscribe ')
    if (ajaxSubscriber$ !== undefined)
        ajaxSubscriber$.unsubscribe()
}

export function setMinSeverityLevel(event) {
    console.log('the value you asked for is ', event.target.value)
    unsubscribbe()
    ajaxSubscriber$ = ajaxObservable$
        .subscribe(
            value => {
                dispatcher.dispatch({
                    actionType: actionTypes.FILTER_WARNING_RXJS,
                    records: value,
                    value: event.target.value
                }
                )
            })
}





