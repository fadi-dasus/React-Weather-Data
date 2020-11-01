import React, { useEffect, useState } from 'react'
import WeatherDataList from './WeatherDataList'
import { Link } from 'react-router-dom'
import store from '../stores/historicalData'
import { loadTable } from '../actions/weatherActions'

function WeatherDataPage() {



    const [records, setRecords] = useState(store.getRecords())

    useEffect(() => {
        store.addChangeListener(onChange);
        if (records.length === 0) loadTable()
        return () => store.removeChangeListener(onChange) // cleanup on component  unmount 
    }, [records.length])

    function onChange() {
        setRecords(store.getRecords())
    }

    return (
        <>
            <h2>Data</h2>
            <Link className="btn btn-primary" to="/addMeasurementPage"> Add Measurement</Link>
            <WeatherDataList data={records} />

        </>
    )
}


export default WeatherDataPage