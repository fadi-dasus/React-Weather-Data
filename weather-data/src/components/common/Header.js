import { NavLink } from "react-router-dom";
function Header() {
    const cssStyle = { color: "red" }
    return (
        <nav className="navbar navbar-dark bg-dark">
            <NavLink activeStyle={cssStyle} exact to="/">Home</NavLink>
            <NavLink activeStyle={cssStyle} to="/weatherData">Weather Table</NavLink>
            <NavLink activeStyle={cssStyle} to="/forecast">Forecast Table</NavLink>
            <NavLink activeStyle={cssStyle} to="/addMeasurementPage">Add Measurement</NavLink>
            <NavLink activeStyle={cssStyle} to="/RxJs">WarningsRxJs</NavLink>
            <NavLink activeStyle={cssStyle} to="/webSocket">WarningsWebSocket</NavLink>


        </nav>


    )
}
export default Header