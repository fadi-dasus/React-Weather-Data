// eslint-disable-next-line import/no-anonymous-default-export
export default window => {
    const document = window.document
    const wheatherDataTable = document.getElementById('whetherData')
    const forecast_dataTable = document.getElementById('forecast_data')
    const Hourly_predictions = document.getElementById('hourly_pre')

    const addWheatherData = (p) => {
        const tr = wheatherDataTable.appendChild(document.createElement('tr'))
        tr.insertCell().appendChild(document.createTextNode(p.place))
        tr.insertCell().appendChild(document.createTextNode(p.type))
        tr.insertCell().appendChild(document.createTextNode(p.precipitation_type))
        tr.insertCell().appendChild(document.createTextNode(p.direction))
        tr.insertCell().appendChild(document.createTextNode(p.unit))
        tr.insertCell().appendChild(document.createTextNode(p.time))
        tr.insertCell().appendChild(document.createTextNode(p.value))
    }

    const addForecastData = (table) => (p) => {
        const tr = table.appendChild(document.createElement('tr'))
        tr.insertCell().appendChild(document.createTextNode(p.from))
        tr.insertCell().appendChild(document.createTextNode(p.to))
        tr.insertCell().appendChild(document.createTextNode(p.type))
        tr.insertCell().appendChild(document.createTextNode(p.precipitation_types))
        tr.insertCell().appendChild(document.createTextNode(p.directions))
        tr.insertCell().appendChild(document.createTextNode(p.unit))
        tr.insertCell().appendChild(document.createTextNode(p.time))
        tr.insertCell().appendChild(document.createTextNode(p.place))
    }

    const setText = (text, id) => {
        const results = document.getElementById(id)
        results.innerHTML = text
    }


    function setTextField(model) {    
        setText(model.minTemperatureForLast5Days().value + ' C', 'min_temp')
        setText(model.maxTemperatureForLast5Days().value + ' C', 'max_temp')
        setText(model.totalPrecipitation() + ' mm', 'total_pre')
        setText(model.windAverageSpeed() + ' m/s', 'avr_wind')
        setText(model.dominantDirection(), 'dom_wind')
        setText(model.averageCloudCoverage() + ' %', 'avr_cloud')
    }

    function updateTables(model) {
        model.lastHitoricalData().forEach(addWheatherData)

        const ForcastTable = addForecastData(forecast_dataTable)
        model.lastForecastData().forEach(ForcastTable)

        const Hourly_predictionsTable = addForecastData(Hourly_predictions)
        model.hourlyPredictions().forEach(Hourly_predictionsTable)
    }

    const update = (model) => {
        setTextField(model)
        updateTables(model)
    }

    return {
        update
    }
}

