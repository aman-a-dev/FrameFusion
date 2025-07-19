import { Link } from "react-router-dom"
import "../css/Navbar.css"

function NavBar() {
    return (
        <nav>
            <Link to="/">
                <label title="home" htmlFor="home" className="label">
                    <input id="home" name="page" type="radio" checked="" />
                    <i className="fa-solid fa-house"></i>
                </label>
            </Link>
            <Link to="/Favorites">
                <label title="cart" htmlFor="favorite" className="label">
                    <input id="cart" name="page" type="radio" />
                    <i className="fa-solid fa-star"></i>
                </label>
            </Link>
            <Link to="/Notification">
                <label
                    title="notifications"
                    htmlFor="notifications"
                    className="label"
                >
                    <input id="notifications" name="page" type="radio" />
                    <i className="fa-solid fa-bell"></i>
                </label>
            </Link>
        </nav>
    )
}

export default NavBar
