import React, { useEffect, useState } from 'react'
import { getData } from '../api/apiHelper'
import WeatherDataList from './WeatherDataList'


function WeatherDataPage() {

    const [weatherData, setWeatherData] = useState([])

    useEffect(() => {

        getData().then(_data => setWeatherData(_data))
    }, [])

    return (
        <>
            <h2>Data</h2>
            <WeatherDataList data={weatherData} />

        </>
    )
}


export default WeatherDataPage