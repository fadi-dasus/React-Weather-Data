import { EventEmitter } from 'events'
import dispatcher from '../appDispatcher'
import actionTypes from '../actions/actionTypes'

const CHANGE_EVENT = 'change'
let _warnings = []

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

        return _warnings;
    }

    // getForPeriod(_date) {
    //     return _warnings.filter(x => _date.contains(x.time))
    // }

}

const store = new HistoricalDataStore()

dispatcher.register(action => {
    switch (action.actionType) {
        case actionTypes.LOAD_WARNING_RXJS:
            _warnings.push(action.records)
            store.emitChange()
            break;
        default:
            break;
    }
})





export default store