import React, { Fragment, useEffect, useState } from 'react'
import WeatherDataList from './WeatherDataList'
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
            <WeatherDataList data={records} />

        </>
    )
}


export default WeatherDataPage