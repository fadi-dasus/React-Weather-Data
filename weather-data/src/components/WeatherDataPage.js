import React, { useEffect, useState } from 'react'
import WeatherDataList from './WeatherDataList'
import { Link } from 'react-router-dom'
import store from '../stores/historicalData'

function WeatherDataPage() {
    const [weatherData, setWeatherData] = useState(store.getRecords())

    useEffect(() => {
        store.addChangeListener(onChange);
    }, [])
    function onChange() {
        setWeatherData(store.getRecords())
    }

    return (
        <>
            <h2>Data</h2>
            <Link className="btn btn-primary" to="/addMeasurementPage"> Add Measurement</Link>
            <WeatherDataList data={weatherData} />

        </>
    )
}


export default WeatherDataPage