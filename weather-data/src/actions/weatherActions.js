import dispatcher from '../appDispatcher'
import * as api from '../api/apiHelper'
import actionTypes from './actionTypes'
import { DateInterval } from './dateUtil'

export function saveDataForm(record) {

    return api.saveObservation(record).then(savedRecord => {
        dispatcher.dispatch({
            actionType: actionTypes.ADD_RECORD,
            record
        })
    })

}

export function loadTable() {
    return api.getHistoricalData().then(records => {
        dispatcher.dispatch({
            actionType: actionTypes.LOAD_RECORDS,
            records
        })
    })

}

export function filterByCity(city) {
    return api.getDataByCity(city).then(records => {

        dispatcher.dispatch({
            actionType: actionTypes.CITY_FILTER,
            records
        })
    })

}

export function filterByDate(date) {
    const _date = DateInterval(date.from, date.to)
    dispatcher.dispatch({
        actionType: actionTypes.DATE_FILTER,
        date: _date
    })
}

