import dispatcher from '../appDispatcher'
import { interval } from 'rxjs'
import { ajax } from 'rxjs/ajax'
import actionTypes from './actionTypes'
import { filter, map, concatMap } from 'rxjs/operators'

export const warningUrl = 'http://localhost:3001/warnings'

const ajaxObservable$ = interval(2000).pipe(concatMap(() => ajax(warningUrl)))
let ajaxSubscriber$ = undefined

export function loadWarningsRxJSAction() {
    ajaxSubscriber$ = ajaxObservable$.subscribe(
        value => {
            dispatcher.dispatch({
                actionType: actionTypes.LOAD_WARNING_RXJS,
                records: value
            }
            )
        })
}
export function unsubscribbe() {
    if (ajaxSubscriber$ !== undefined)
        ajaxSubscriber$.unsubscribe()
}


    // export function loadWarningsRxJSAction() {

    //     interval(4000).subscribe(
    //         value => ajax(warningUrl).subscribe(
    //             value => {
    //                 return dispatcher.dispatch({
    //                     actionType: actionTypes.LOAD_WARNING_RXJS,
    //                     records: value
    //                 },
    //                     error => console.log(error),
    //                     complete => console.log('""""""""completed""""""""')
    //                 )
    //             }))
    // }

