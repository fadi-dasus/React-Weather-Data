import { NavLink } from "react-router-dom";
function Header() {
    const cssStyle = { color: "orange" }
    return (
        <nav>
            <NavLink activeStyle={cssStyle} exact to="/">Home</NavLink> {"|"}
            <NavLink activeStyle={cssStyle} to="/courses">Weather Table</NavLink>{"  |   "}
            <NavLink activeStyle={cssStyle} to="/about">Add mesuranment</NavLink>{"  |   "}
        </nav>

    )
}
export default Header