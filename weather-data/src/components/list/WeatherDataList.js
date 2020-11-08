import React from 'react'
import shortid from 'shortid';
import { PropTypes } from "prop-types";
import sky from '../../images/sky.jpg';
function WeatherDataList(props) {

    return (
        <>
            <div  >
                <div className="d-flex flex-row"   >
                    <input onMouseLeave={props.onChange} className="form-control mr-sm-2" type="search" placeholder="Search"
                        style={{ width: 615 }} />

                    <button onClick={props.onFilter} className="btn btn-outline-success " >Filter By City</button>

                    <input className="form-control mr-sm-2"
                        onChange={props.onDateChange}
                        name='from'
                        value={props.value}
                        type="date"
                        placeholder="From/yyyy-mm-dd"
                        style={{ width: 500 }}
                    />
                    <input className="form-control mr-sm-2"
                        onChange={props.onDateChange}
                        name='to'
                        value={props.value}
                        type="date"
                        placeholder="To//yyyy-mm-dd"
                        style={{ width: 500 }} />

                    <button className="btn btn-outline-success" onClick={props.onDateFilter}>Filter By Date</button>
                </div>
            </div>

            <table className="table table-striped table-dark" style={{ backgroundImage: "url(" + sky + ")" }}>
                <thead>
                    <tr>
                        <th>Value</th>
                        <th>Type</th>
                        <th>Unit</th>
                        <th>Time</th>
                        <th>Place</th>
                    </tr>
                </thead>
                <tbody>
                    {props.data.map((item) => {
                        return (
                            <tr key={shortid.generate()}>
                                <td>{item.value} </td>
                                <td>{item.type} </td>
                                <td>{item.unit} </td>
                                <td>{item.time} </td>
                                <td>{item.place} </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
    )
}

WeatherDataList.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            value: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            unit: PropTypes.string.isRequired,
            place: PropTypes.string.isRequired
        })
    ).isRequired
};

export default WeatherDataList 