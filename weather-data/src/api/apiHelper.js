import { handleResponse, handleError, handlePostResponse } from './httpHelper.js'



export const urlData = 'http://localhost:3001/data/'
export const urlForecast = 'http://localhost:3001/forecast/'

export async function getHistoricalData() {
    return fetch(urlData)
        .then(handleResponse)
        .catch(handleError);
}


export async function getForecastData() {
    return fetch(urlForecast)
        .then(handleResponse)
        .catch(handleError);
}




export async function getDataByCity(city) {
    return fetch(urlData + city)
        .then(handleResponse)
        .catch(handleError);

}

export function saveObservation(observation) {
    return fetch(urlData, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
            ...observation,
            value: parseInt(observation.value, 10)
        })
    }).then(
        handlePostResponse)
        .catch(handleError);
}
