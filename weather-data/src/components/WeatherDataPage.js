import React from 'react'
import { getData } from '../api/apiHelper'


class WeatherDataPage extends React.Component {
    state = {
        data: []
    }
    componentDidMount() {

        getData().then(data => this.setState({ data: data }))
    }

    render() {
        return (
            <>
                <h2>Data</h2>
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
                        {this.state.data.map(item => {
                            return (
                                <tr>
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

}
export default WeatherDataPage