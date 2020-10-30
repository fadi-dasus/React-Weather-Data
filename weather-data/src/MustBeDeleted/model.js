
import { getTheLatestObservations, getDominant } from './filterUtil.js'
export default function model(data, forecast) {

    const tempArray = data.filter(x => x.type === 'temperature')
    const precipitationArray = data.filter(x => x.type === 'precipitation')
    const windArray = data.filter(x => x.type === 'wind speed')
    const cloudArray = data.filter(x => x.type === 'cloud coverage')

    const now = new Date()

    const five_days_ago = new Date(now.setDate(now.getDate() - 5))

    const dataFromTheLastFiveDays = array => array.filter(x => new Date(x.time) > five_days_ago)

    const smallestValue = array => array.reduce((initial, current) => initial.value < current.value ? initial : current)

    const largestValue = array => array.reduce((initial, current) => initial.value > current.value ? initial : current)

    const minTemperatureForLast5Days = () => smallestValue(dataFromTheLastFiveDays(tempArray))

    const maxTemperatureForLast5Days = () => largestValue(dataFromTheLastFiveDays(tempArray))

    const windAverageSpeed = () => sum(dataFromTheLastFiveDays(windArray)) / dataFromTheLastFiveDays(windArray).length

    const averageCloudCoverage = () => sum(dataFromTheLastFiveDays(cloudArray)) / dataFromTheLastFiveDays(cloudArray).length

    const totalPrecipitation = () => dataFromTheLastFiveDays(precipitationArray).reduce((initial, current) => initial += current.value, 0)

    const dominantDirection = () => getDominant(windArray)

    const lastHitoricalData = () => getTheLatestObservations(data)

    const lastForecastData = () => getTheLatestObservations(forecast)

    const sum = array => array.reduce((initial, current) => initial += current.value, 0)

    const hourlyPredictions = () => forecast

    return {
        minTemperatureForLast5Days, maxTemperatureForLast5Days, totalPrecipitation, windAverageSpeed,
        dominantDirection, averageCloudCoverage, hourlyPredictions, lastHitoricalData, lastForecastData
    }

}