import { httpHelper, urlData, } from './httpHelper.js'



export async function getData() {
    let wheatherDataResponse = null
    // let forecastDataResponse = null
    try {
        wheatherDataResponse = await httpHelper(urlData)
    } catch (error) {
        console.log(error)
    }

    return wheatherDataResponse;
}
