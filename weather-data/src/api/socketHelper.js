import { webSocket } from "rxjs/webSocket";
import { interval } from 'rxjs'
import { ajax } from 'rxjs/ajax'


export const warningUrl = 'http://localhost:3001/warnings'


export function setupConnectionToServer()  {
    webSocket = new WebSocket(warningUrl);
    webSocket.onopen = () => {
        webSocket.send("subscribe");
    }
    webSocket.onmessage = message => {
        getWarning(JSON.parse(message.data));
    }
}


export function getWarning() {
    interval(1000).subscribe(
        value => ajax(warningUrl)
    )
}


