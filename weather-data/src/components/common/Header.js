import { NavLink } from "react-router-dom";
function Header() {
    const cssStyle = { color: "orange" }
    return (
        <nav>
            <NavLink activeStyle={cssStyle} exact to="/">Home</NavLink> {"|"}
            <NavLink activeStyle={cssStyle} to="/weatherData">Weather Table</NavLink>{"|"}
            <NavLink activeStyle={cssStyle} to="/addMeasurementPage">Add measurements</NavLink>{"|"}
        </nav>

    )
}
export default Header