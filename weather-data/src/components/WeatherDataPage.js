import React, { Fragment, useEffect, useState } from 'react'
import WeatherDataList from './WeatherDataList'
import store from '../stores/historicalData'
import { loadTable, filterByCity } from '../actions/weatherActions'

function WeatherDataPage() {

    // 1 first we get the list from the store
    const [records, setRecords] = useState(store.getRecords())
    const [city, setCity] = useState('')

    useEffect(() => {
        store.addChangeListener(onChange);
        //3 we chech if there are records in the store, or we load the records from the server 
        if (records.length === 0) loadTable()
        // 9 this will be called in the end
        return () => store.removeChangeListener(onChange)// cleanup on component  unmount 
    }, [records.length])

    function onChange() {
        //7 we update the state when we this will be triggered by emit event 
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