/* eslint-disable no-restricted-globals */
import model from './model.js'
import view from './view.js'


export const urlData = 'http://localhost:8080/data'
export const urlForecast = 'http://localhost:8080/forecast'

export async function httpHelper(url)// returns a promise 
{
    try {
        const request = await fetch(url)
        if (request.status === 200) {
            return await request.json()
        }
        throw (status)
    } catch (error) {
        console.log(error)
    }
}

export function twoParallelRequests(...url) {
    return Promise.all([httpHelper(url[0])
        , httpHelper(url[1])])
}

export function setUpXMLHttpRequest(request, url) {
    request.responseType = 'json';
    request.open('GET', url, true)
    request.send()
}

// only triggers if the request couldn't be made at all
export function XMLHttperrorHandler(request) {
    request.onerror = function () {
        alert(`Network Error`);
    };
}

export function initialiseTheModel(data, forecast) {
    if (forecast && data != null) {
        const theModel = model(data, forecast)
        const theView = view(window)
        theView.update(theModel)
    }
}

