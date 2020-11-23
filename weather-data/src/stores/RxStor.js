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


}

const RxJSStore = new RxStor()

dispatcher.register(action => {
    switch (action.actionType) {
        case actionTypes.LOAD_WARNING_RXJS:
            _warnings.push(...[].concat(action.records))
            RxJSStore.emitChange()
            break;
        case actionTypes.FILTER_WARNING_RXJS:
            _warnings.push(...[].concat(action.records.filter(x => x.severity > action.value)))
            RxJSStore.emitChange()
            break;
        default:
            break;
    }
})




export default RxJSStore


// [
//     {
//         "id": 1092,
//         "severity": 6,
//         "prediction": {
//             "from": 12.8,
//             "to": 26.3,
//             "precipitation_types": [
//                 "rain",
//                 "sleet",
//                 "hail"
//             ],
//             "type": "precipitation",
//             "unit": "mm",
//             "time": "2020-11-21T20:00:00.000Z",
//             "place": "Aarhus"
//         }
//     }
// ]