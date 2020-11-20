import dispatcher from '../appDispatcher'
import * as api from '../api/apiHelper'
import actionTypes from './actionTypes'
import { DateInterval } from './dateUtil'


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
