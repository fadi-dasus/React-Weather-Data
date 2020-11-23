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
    console.log(event.target.value)
    unsubscribbe()
    ajaxObservable$.pipe(
        filter(data => {
            console.log('Hello')

            console.log(data[0])
            return data.severity > event.target.value
        })

        // , tap(data => console.log(data[0].severity)),
    )

        .subscribe(
            value => {
                dispatcher.dispatch({
                    actionType: actionTypes.LOAD_WARNING_RXJS,
                    records: value
                }
                )
            }
        )
}





