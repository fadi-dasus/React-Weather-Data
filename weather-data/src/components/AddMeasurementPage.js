import React, { Fragment, useState } from 'react'
import DataFrom from './DataForm'
import { saveObservation } from '../api/apiHelper'

function AddMeasurementPage() {
    const [formData, setFormData] = useState({
        value: '',
        type: '',
        unit: '',
        time: '',
        place: ''
    })
    function handleChnage({ target }) {
        const _updatedFormData = { ...formData, [target.name]: target.value }
        setFormData(_updatedFormData)
    }
    function handleSubmit(event) {
        //this prevent the client from posting back to the server
        event.preventDefault()
        console.log('"""""""""""""""""')
        console.log(formData)
        console.log('"""""""""""""""""')

        saveObservation(formData)
    }

    return (
        <Fragment>
            <h2 className="font-italic">Add Measurement  </h2>
            <DataFrom data={formData}
                onChange={handleChnage}
                onSubmit={handleSubmit}
            />
        </Fragment>
    )
}
export default AddMeasurementPage