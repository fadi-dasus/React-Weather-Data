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