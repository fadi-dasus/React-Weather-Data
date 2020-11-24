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

    getTimeFromTheLastRecord() {
        if (_warnings.length !== 0)
            return _warnings[_warnings.length - 1].prediction.time
    }


}

const SocketStor = new SocketStore()

dispatcher.register(action => {
    
    switch (action.actionType) {
        case actionTypes.LOAD_SOCKET_RECORDS:
            _warnings.push(...[].concat(action.records))
            SocketStor.emitChange()
         
            break
           
        default:
            break;
    }
})




export default SocketStor


