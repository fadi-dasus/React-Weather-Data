import React, { Fragment, useState } from 'react'
import DataFrom from './DataForm'

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

    return (
        <Fragment>
            <h2 className="font-italic">Add Measurement  </h2>
            <DataFrom data={formData} onChange={handleChnage} />
        </Fragment>
    )
}
export default AddMeasurementPage