import React, { Fragment, useEffect, useState } from 'react'
import WeatherDataList from './list/WeatherDataList'
import store from '../stores/historicalData'
import { filterByCity, filterByDate } from '../actions/weatherActions'

function WeatherDataPage() {

    // 1 first we get the list from the store
    const [records, setRecords] = useState(store.getRecords())
    const [city, setCity] = useState('')

    const [date, setDate] = useState({
        from: ''
        , to: ''
    })

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

    function handleDateChange({ target }) {
        const _updatedDate = { ...date, [target.name]: target.value }
        setDate(_updatedDate)
    }

    function handleDateFilter(event) {
        event.preventDefault()
        filterByDate(date)
    }

    return (
        <>
            <WeatherDataList data={records}
                onChange={handleChange}
                onFilter={handleFilter}
                onDateChange={handleDateChange}
                onDateFilter={handleDateFilter}
            />

        </>
    )
}


export default WeatherDataPage