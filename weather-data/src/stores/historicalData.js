import { EventEmitter } from 'events'
import dispatcher from '../appDispatcher'
import actionTypes from '../actions/actionTypes'

const CHANGE_EVENT = 'change'
let _records = []

class HistoricalDataStore extends EventEmitter {

    // this allows react comonents to subscribe to the store 
    addChangeListener(callback) {
        //2 this is the second call
        this.on(CHANGE_EVENT, callback);
    }

    //this will remove a linstener from the array of listeners
    removeChangeListener(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }
    //call each registered listener whenever the state has changed(records array in this case)
    emitChange() {
        // 6 we emit the change that the data has been loaded from the server 
        //note we emit changes for all cases 
        this.emit(CHANGE_EVENT);
    }
    // publish the state to public
    getRecords() {

        //8 this will be called again when the change has happend
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
            //5 we hit this case 
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