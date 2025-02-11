import React from 'react'
import shortid from 'shortid';
import sky from '../../images/sky.jpg';


function ForecastList(props) {
    return (
        <>
            <div className="d-flex flex-row"   >
                <input className="form-control mr-sm-2"
                    style={{ width: 500, }}
                    onMouseLeave={props.onDateChange}
                    name='from' value={props.value} type="date"
                    placeholder="From/yyyy-mm-dd" />

                <input className="form-control mr-sm-2"
                    style={{ width: 500, }}
                    onMouseLeave={props.onDateChange} name='to'
                    value={props.value} type="date"
                    placeholder="To//yyyy-mm-dd" />

                <button className="btn btn-outline-success"
                    onClick={props.onDateFilter} >Filter By Date</button>
            </div>

            <table className="table table-striped table-dark" style={{ backgroundImage: "url(" + sky + ")" }}>
                <thead>
                    <tr>
                        <th>From</th>
                        <th>To</th>
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
                                <td >{item.from} </td>
                                <td>{item.to} </td>
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


export default ForecastList 