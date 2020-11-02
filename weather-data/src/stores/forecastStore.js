import { EventEmitter } from 'events'
import dispatcher from '../appDispatcher'
import actionTypes from '../actions/actionTypes'

const CHANGE_EVENT = 'change'
let _records = []

class ForecastStore extends EventEmitter {

    addChangeListener(callback) {
        this.on(CHANGE_EVENT, callback);
    }

    removeChangeListener(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }

    emitChange() {
        this.emit(CHANGE_EVENT);
    }

    getRecords() {
        return _records;
    }

    getForPeriod(_date) {
        return _records.filter(x => _date.contains(x.time))
    }

}
const forecastStore = new ForecastStore()
dispatcher.register(action => {

    switch (action.actionType) {
        
        case actionTypes.LOAD_FORECAST_RECORDS:
            _records = action.records
            forecastStore.emitChange()
            break;

        case actionTypes.FORECASTDATE_FILTER:
            _records = forecastStore.getForPeriod(action.date)
            forecastStore.emitChange()
            break;

        default:
            break;
    }
})





export default forecastStore