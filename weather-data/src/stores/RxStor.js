import { EventEmitter } from 'events'
import dispatcher from '../appDispatcher'
import actionTypes from '../actions/actionTypes'

const CHANGE_EVENT = 'change'
let _warnings = []

class RxStor extends EventEmitter {

    addChangeListener(callback) {
        this.on(CHANGE_EVENT, callback);
    }

    removeChangeListener(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }

    emitChange() {
        this.emit(CHANGE_EVENT);
    }

    getWarnings() {

        return _warnings;
    }

    getTimeFromTheLastRecord() {
        if (_warnings.length !== 0)
            return _warnings[_warnings.length - 1].prediction.time
    }


}

const RxJSStore = new RxStor()

dispatcher.register(action => {
  
    switch (action.actionType) {
        case actionTypes.LOAD_WARNING_RXJS:
            loadWarningActionHelper(action)
            break;
        case actionTypes.FILTER_WARNING_RXJS:
            filterWarningActionHelper(action)
            break;
        case actionTypes.GET_UPDATES_SINCE_LAST:
            loadWarningActionHelper(action)
            break;
        default:
            break;
    }
})


function loadWarningActionHelper(action) {
    _warnings.push(...[].concat(action.records))
    RxJSStore.emitChange()
}

function filterWarningActionHelper(action) {
    _warnings.push(...[].concat(action.records.filter(x => x.severity > action.value)))
    RxJSStore.emitChange()
}


export default RxJSStore