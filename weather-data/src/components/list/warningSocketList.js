import React from 'react'
import shortid from 'shortid';
import sky from '../../images/sky.jpg';

function warningSocketList(props) {

    return (
        <>

           
            <table className="table table-striped table-dark" style={{ backgroundImage: "url(" + sky + ")" }}>
                <thead>
                    <tr>
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

                    {props.data.map((item) => {
                        return (
                            <tr key={shortid.generate()} >
                                <td className="">{item.severity} </td>
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


export default warningSocketList 