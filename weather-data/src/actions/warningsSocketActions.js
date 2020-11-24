import dispatcher from '../appDispatcher'
import * as api from '../api/socketHelper'
import actionTypes from './actionTypes'


// export function loadWarningsSocketData() {
//      api.ConnectToServer().then(records => {
//         dispatcher.dispatch({
//             actionType: actionTypes.LOAD_SOCKET_RECORDS,
//             records
//         })
//     })
// }