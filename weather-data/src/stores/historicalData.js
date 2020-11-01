import { EventEmitter } from 'events'
import dispatcher from '../appDispatcher'
import actionTypes from '../actions/actionTypes'

const CHANGE_EVENT = 'change'
let _records = []

class HistoricalDataStore extends EventEmitter {

    // this allows react comonents to subscribe to the store 
    addChangeListener(callback) {
        this.on(CHANGE_EVENT, callback);
    }

    //this will remove a linstener from the array of listeners
    removeChangeListener(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }
    //call each registered listener whenever the state has changed(records array in this case)
    emitChange() {
        this.emit(CHANGE_EVENT);
    }
    // publish the state to public
    getRecords() {
        return _records;
    }
}
const store = new HistoricalDataStore()
dispatcher.register(action => {
    switch (action.actionType) {
        case actionTypes.ADD_RECORD:
            console.log('//////////////')
            console.log(action.record)
            console.log('//////////////')

            _records.push(action.record)
            store.emitChange()
            break;
        default:
            break;
    }
})
export default store