import dispatcher from '../appDispatcher'
import actionTypes from '.././actions/actionTypes'

export const warningUrl = "ws://localhost:3002/warnings"

let websocket = new WebSocket(warningUrl);

export async function ConnectToServer() {
    console.log('on open clicked')
    websocket.onopen = () => {
        console.log("connection established")
        websocket.send("subscribe");
    }
}

export function onMessage() {
    websocket.onmessage = message => {
        const messageToJson = JSON.parse(message.data);
        dispatcher.dispatch({
            actionType: actionTypes.LOAD_SOCKET_RECORDS,
            records: messageToJson
        })
    }
}

export function filterBySeverityLevlForNewRecords(event) {
    unsubscribeToWarnigs()
    subscribe()
    websocket.onmessage = message => {
        const messageToJson = JSON.parse(message.data);
        dispatcher.dispatch({
            actionType: actionTypes.FILTER_WARNING_SOCKET,
            records: messageToJson,
            value: event.target.value
        })
    }
}

export function subscribe() {
    websocket.send("subscribe");
}

export function unsubscribeToWarnigs() {
    const message = 'unsubscribe';
    websocket.send(message);
}

websocket.onerror = error => {
    console.log(error)
}

websocket.onclose = close => {
    console.error("connection closed")
}