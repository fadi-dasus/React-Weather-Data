import { EventEmitter } from 'events'
import dispatcher from '../appDispatcher'
import actionTypes from '../actions/actionTypes'

const CHANGE_EVENT = 'change'
let _warnings = []

class SocketStore extends EventEmitter {

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


}

const SocketStor = new SocketStore()

dispatcher.register(action => {

    switch (action.actionType) {
        case actionTypes.LOAD_SOCKET_RECORDS:
            loadWarningActionHelper(action)
            break
        case actionTypes.FILTER_WARNING_SOCKET:
            filterWarningActionHelper(action)
            break;
        

        default:
            break;
    }
})

function loadWarningActionHelper(action) {
    _warnings.push(...[].concat(action.records))
    SocketStor.emitChange()
}

function filterWarningActionHelper(action) {
    _warnings.push(...[].concat(action.records).filter(x => x.severity > action.value))
    SocketStor.emitChange()
}




export default SocketStor


