import React, { Fragment, useState } from 'react'
import DataFrom from './DataForm'
import { toast } from 'react-toastify'
import * as weatherActions from "../actions/weatherActions";


function AddMeasurementPage() {
    const [errors, setErrors] = useState({});
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

    function formIsValid() {
        const _errors = {};
        if (!formData.value) _errors.value = "Value is required";
        if (!formData.type) _errors.type = "Type is required";
        if (!formData.unit) _errors.unit = "Unit is required";
        if (!formData.time) _errors.time = "Time is required";
        if (!formData.place) _errors.place = "Place is required";
        setErrors(_errors);
        return Object.keys(_errors).length === 0;
    }

    function handleSubmit(event) {
        event.preventDefault()
        if (!formIsValid()) return;
        weatherActions.saveDataForm(formData)
        toast.success('Measurement Saved')
    }

    return (
        <Fragment >
            <DataFrom data={formData}
                onChange={handleChnage}
                onSubmit={handleSubmit}
                error={errors}
            />
        </Fragment>
    )
}
export default AddMeasurementPage