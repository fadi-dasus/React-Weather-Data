import React from 'react'
import TextInput from './common/TextInput'


function DataForm(props) {
    return (

        <form onSubmit={props.onSubmit}>
            <div className="form-group">
                <label htmlFor="type">Type</label>
                <div className="field">
                    <select
                        id="measurement-type"
                        name="type"
                        value={props.data.type}
                        error={props.error.type}
                        onChange={props.onChange}
                        className="form-control"
                    >
                        <option value="" />
                        <option value="temperature">temperature</option>
                        <option value="precipitation">precipitation</option>
                        <option value="cloud coverage">cloud coverage</option>
                        <option value="wind speed">wind speed</option>
                    </select>
                    {props.error.type && (
                        <div className="alert alert-danger">{props.error.type}</div>
                    )}

                </div>
            </div>
            <div className="form-group">
                <label htmlFor="place">Place</label>
                <div className="field">
                    <select
                        id="measurement-place"
                        name="place"
                        onChange={props.onChange}
                        value={props.data.place}
                        className="form-control"
                    >
                        <option value="" />
                        <option value="Horsens">Horsens</option>
                        <option value="Copenhagen">Copenhagen</option>
                        <option value="Aarhus">Aarhus</option>
                    </select>
                    {props.error.place && (
                        <div className="alert alert-danger">{props.error.place}</div>
                    )}
                </div>
            </div>



            <TextInput
                id="measurement-value"
                label="Value"
                onChange={props.onChange}
                name="value"
                value={props.data.value}
                error={props.error.value}

            />

            <TextInput
                id="measurement-unit"
                label="Unit"
                onChange={props.onChange}
                name="unit"
                value={props.data.unit}
                error={props.error.unit}

            />

            <TextInput
                id="measurement-time"
                label="Time"
                onChange={props.onChange}
                name="time"
                value={props.data.time}
                error={props.error.time}

            />
            <input type="submit" value="Save" className="btn btn-primary" />
        </form>
    );
}

export default DataForm;
