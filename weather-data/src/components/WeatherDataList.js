import React from 'react'
import shortid from 'shortid';
import { PropTypes } from "prop-types";


function WeatherDataList(props) {
    console.log(props)

    return (
        <>
            <div className="container">
                <input onMouseLeave={props.onChange} className="form-control mr-sm-2" type="search" placeholder="Search" />
                <button onClick={props.onFilter} className="btn btn-outline-success " >Filter By City</button>
                <button className="btn btn-outline-success" >Filter By Date</button>
                <button className="btn btn-outline-success">Reset Filters</button>
            </div>
            <table className="table">
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