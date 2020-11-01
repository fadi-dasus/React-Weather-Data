import dispatcher from '../appDispatcher'
import * as api from '../api/apiHelper'
import actionTypes from './actionTypes'

//action creator
export function saveDataForm(record) {

    return api.saveObservation(record).then(savedRecord => {
        // tell all the stores that a record has just been added  
        dispatcher.dispatch({
            actionType: actionTypes.ADD_RECORD,
            record: record
        })
    })

}