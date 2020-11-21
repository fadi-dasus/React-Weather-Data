
import { interval } from 'rxjs'
import { ajax } from 'rxjs/ajax'

export const warningUrl = 'http://localhost:3001/warnings'

export function getWarning() {
    return interval(1000).subscribe(
        value => ajax(warningUrl)

    )
}







export function getWarningRxJS() {
    return interval(1000).subscribe(
        value => ajax(warningUrl)
            .subscribe(
                value => console.log(value.response.warnings),
                error => console.log("my error"),
                complete => console.log('""""""""complete""""""""')
            )
    )
}

