import dispatcher from '../appDispatcher'
import * as api from '../api/apiHelper'
import actionTypes from './actionTypes'

//action creator
export function saveDataForm(record) {

    return api.saveObservation(record).then(savedRecord => {
        // tell all the stores that a record has just been added 
        dispatcher.dispatch({
            actionType: actionTypes.ADD_RECORD,
            record
        })
    })

}

export function loadTable() {
    //4 we load the data from the  server 
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

function DateInterval(_from, _to, date) {

    const from = () => new Date(_from)
    const to = () => new Date(_to)
    const contains = function (date) {
        if (date > _from && date < _to)
            return true
        else
            return false
    }
    return {
        from,
        to,
        contains
    }
}