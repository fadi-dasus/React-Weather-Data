import React from 'react'
import sky from '../../images/sky.jpg';

function warningList(props) {


    return (
        <>
            <table className="table table-striped table-dark" style={{ backgroundImage: "url(" + sky + ")" }}>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Severity</th>
                        <th>From</th>
                        <th>To</th>
                        <th>Precipitation_types</th>
                        <th>Directions</th>
                        <th>Type</th>
                        <th>Unit</th>
                        <th>Time</th>
                        <th>Place</th>
                    </tr>
                </thead>
                <tbody>
                    {props.data.filter(item => item.prediction != undefined).map((item) => {

                        return (
                            <tr key={item.id} >
                                <td >{item.id} </td>
                                <td >{item.severity} </td>
                                <td>{item.prediction.from} </td>
                                <td>{item.prediction.to} </td>
                                <td>{item.prediction.precipitation_types} </td>
                                <td>{item.prediction.directions} </td>
                                <td>{item.prediction.type} </td>
                                <td>{item.prediction.unit} </td>
                                <td>{item.prediction.time} </td>
                                <td>{item.prediction.place} </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>

        </>
    )
}


export default warningList 