import { twoParallelRequests, urlData, urlForecast, initialiseTheModel } from './httpHelper.js'

window.init = async function () {
    let wheatherDataResponse = null
    let forecastDataResponse = null
    try {
        [wheatherDataResponse, forecastDataResponse] = await twoParallelRequests(urlData, urlForecast)
        initialiseTheModel(wheatherDataResponse, forecastDataResponse)
    } catch (error) {
        console.log(error)
    }

}