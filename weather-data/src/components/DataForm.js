import React from "react";

function DataForm(props) {
    return (
        <form>
            <div className="form-group">
                <label htmlFor="value">Value</label>
                <div className="field">
                    <input
                        id="value"
                        type="text"
                        name="measurement-value"
                        className="form-control"
                        value=""
                    />
                </div>
            </div>

            <div className="form-group">
                <label htmlFor="type">Type</label>
                <div className="field">
                    <select
                        id="type"
                        name="measurement-type"
                        value=""
                        className="form-control"
                    >
                        <option value="" />
                        <option value="1">temperature</option>
                        <option value="2">precipitation</option>
                        <option value="3">cloud coverage</option>
                        <option value="4">wind speed</option>
                    </select>
                </div>
            </div>

            <div className="form-group">
                <label htmlFor="unit">Unit</label>
                <div className="field">
                    <input
                        type="text"
                        id="measurement-unit"
                        name="unit"
                        className="form-control"
                        value=""
                    />
                </div>
            </div>
            <div className="form-group">
                <label htmlFor="time">Time</label>
                <div className="field">
                    <input
                        type="text"
                        id="measurement-time"
                        name="time"
                        className="form-control"
                        value=""
                    />
                </div>
            </div>
            <div className="form-group">
                <label htmlFor="place">Place</label>
                <div className="field">
                <select
                        id="place"
                        name="measurement-place"
                        value=""
                        className="form-control"
                    >
                        <option value="" />
                        <option value="1">Horsens</option>
                        <option value="2">Copenhagen</option>
                        <option value="3">Aarhus</option>
                    </select>
                </div>
            </div>

            <input type="submit" value="Save" className="btn btn-primary" />
        </form>
    );
}

export default DataForm;
