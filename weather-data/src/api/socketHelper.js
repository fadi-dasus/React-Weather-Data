import dispatcher from '../appDispatcher'
import actionTypes from '.././actions/actionTypes'
import React from 'react'


export const warningUrl = "ws://localhost:3002/warnings"

let websocket;

export async function ConnectToServer() {
    websocket = new WebSocket(warningUrl);
    websocket.onopen = () => {
        websocket.send("subscribe");
        console.log("connection established")

    }

    websocket.onmessage = message => {
        const messageToJson = JSON.parse(message.data);
       
       console.log(messageToJson)
        dispatcher.dispatch({
            actionType: actionTypes.LOAD_SOCKET_RECORDS,
            records :messageToJson
        })
       
    }

    websocket.onerror = error => {
        console.log(error)
    }

    websocket.onclose = close => {
        console.error("connection closed")
    }
}



export function unsubscribeToWarnigs () {
    const message ='unsubscribe';
    websocket.send(message);
}

let subscribed = true;
export function unsubscribe(unsubscribeBtn) {

    unsubscribeToWarnigs();
   
    subscribed = !subscribed;
}

