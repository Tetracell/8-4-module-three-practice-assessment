import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <div className="nav">
            <Link to="/" >
            <img src="https://www.freepnglogos.com/uploads/pok-mon-go-logo-png-30.png" alt="pokemon-logo" />
            </Link>
            <Link to={"/pokemon"}>Pokemon</Link>
            <Link to={"/locations"}>Locations</Link>
            <Link to={"/berries"}>Berries</Link>
        </div>
    )
}

export default Nav;