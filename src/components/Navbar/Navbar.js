import "./Navbar.css"
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="nav-container">
        <nav className="navbar">
            <h1 className="navbar-logo">Tiendulis</h1>
            <Link className="seeCarrito" to={"/cart"}>🛒</Link>
        </nav>
    </div>
  )
}

export default Navbar