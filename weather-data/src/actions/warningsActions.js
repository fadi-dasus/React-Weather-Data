import dispatcher from '../appDispatcher'
import { interval } from 'rxjs'
import { ajax } from 'rxjs/ajax'
import actionTypes from './actionTypes'

export const warningUrl = 'http://localhost:3001/warnings'


export function loadWarningsRxJSAction() {

    interval(4000).subscribe(
        value => ajax(warningUrl).subscribe(
            value => {
                return dispatcher.dispatch({
                    actionType: actionTypes.LOAD_WARNING_RXJS,
                    records: value
                },

                    error => console.log(error),
                    complete => console.log('""""""""completed""""""""')
                )
            }))
}

