import React, { useEffect, useState } from 'react'
import ForecastList from './ForecastList'
import forecastStor from '../stores/forecastStore'
import { loadForecastData, filterForecastByDate } from '../actions/forecastActions'

function ForecastPage() {

    const [records, setRecords] = useState(forecastStor.getRecords())

    const [date, setDate] = useState({
        from: ''
        , to: ''
    })

    useEffect(() => {
        forecastStor.addChangeListener(onChange);
        if (records.length === 0) loadForecastData()
        return () => forecastStor.removeChangeListener(onChange)// cleanup on component  unmount 
    }, [records.length])


    function onChange() {
        setRecords(forecastStor.getRecords())
    }

    function handleDateChange({ target }) {
        const _updatedDate = { ...date, [target.name]: target.value }
        setDate(_updatedDate)
    }

    function handleDateFilter(event) {
        event.preventDefault()
        filterForecastByDate(date)
    }

    return (
        <>
            <ForecastList data={records}
                onDateChange={handleDateChange}
                onDateFilter={handleDateFilter}
            />

        </>
    )
}

export default ForecastPage