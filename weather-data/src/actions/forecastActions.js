import dispatcher from '../appDispatcher'
import * as api from '../api/apiHelper'
import actionTypes from './actionTypes'

export function loadForecastData() {
    return api.getForecastData().then(records => {
        dispatcher.dispatch({
            actionType: actionTypes.LOAD_FORECAST_RECORDS,
            records
        })
    })
}

export function filterForecastByDate(date) {
    const _date = DateInterval(date.from, date.to)
    dispatcher.dispatch({
        actionType: actionTypes.FORECASTDATE_FILTER,
        date: _date
    })
}

function DateInterval(_from, _to, date) {

    const from = () => new Date(_from)
    const to = () => new Date(_to)
    const contains = function (date) {
        if (date > _from && date < _to)
            return true
        else
            return false
    }
    return {
        from,
        to,
        contains
    }
}
