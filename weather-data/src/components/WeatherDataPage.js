import React, { useEffect, useState } from 'react'
import { getHistoricalData, } from '../api/apiHelper'
import WeatherDataList from './WeatherDataList'
import { Link } from 'react-router-dom'

function WeatherDataPage() {

    const [weatherData, setWeatherData] = useState([])

    useEffect(() => {
        getHistoricalData().then(_data => setWeatherData(_data))
    }, [])

    return (
        <>
            <h2>Data</h2>
            <Link className="btn btn-primary" to="/addMeasurementPage"> Add Measurement</Link>
            <WeatherDataList data={weatherData} />

        </>
    )
}


export default WeatherDataPage