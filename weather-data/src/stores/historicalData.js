import { EventEmitter } from 'events'
import dispatcher from '../appDispatcher'
import actionTypes from '../actions/actionTypes'

const CHANGE_EVENT = 'change'
let _records = []

class HistoricalDataStore extends EventEmitter {

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

const store = new HistoricalDataStore()

dispatcher.register(action => {
    switch (action.actionType) {
        case actionTypes.ADD_RECORD:
            _records.push(action.record)
            store.emitChange()
            break;
            
        case actionTypes.LOAD_RECORDS:
            _records = action.records
            store.emitChange()
            break;

        case actionTypes.CITY_FILTER:
            _records = action.records
            store.emitChange()
            break;

        case actionTypes.DATE_FILTER:

            _records = store.getForPeriod(action.date)
            store.emitChange()
            break;

        default:
            break;
    }
})





export default store