import React, { Fragment, useEffect, useState } from 'react'
import WeatherDataList from './WeatherDataList'
import store from '../stores/historicalData'
import { filterByCity } from '../actions/weatherActions'

function WeatherDataPage() {

    // 1 first we get the list from the store
    const [records, setRecords] = useState(store.getRecords())

    const [city, setCity] = useState('')

    useEffect(() => {
        store.addChangeListener(onChange);
        // if (records.length === 0) loadTable()
        return () => store.removeChangeListener(onChange)// cleanup on component  unmount 
    }, [records.length])

    function onChange() {
        setRecords(store.getRecords())
    }

    function handleChange({ target }) {
        const _updatedCity = target.value
        setCity(_updatedCity)
    }

    function handleFilter(event) {
        event.preventDefault()
        filterByCity(city)
    }

    return (
        <>
            <h2>Data</h2>
            <WeatherDataList data={records}
                onChange={handleChange}
                onFilter={handleFilter} />

        </>
    )
}


export default WeatherDataPage