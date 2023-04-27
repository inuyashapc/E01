import logo from "../../images/Layer 1.png";
import cart from "../../images/Icon Cart.png";
import dropdown from "../../images/dropdown.png";
import "./navbar.css";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <>
      <div className="navbar">
        <img src={logo} alt="logo"></img>
        <div className="navbar-category">
          <div className="learningResources">
            <Link to="/#">Level Test</Link>
          </div>
          <div className="learningResources">
            <Link to="/#">Courses</Link>
          </div>
          <div className="learningResources">
            <Link to="/#">Learning Resources</Link>
            <img src={dropdown} alt="dropdown"></img>
          </div>
          <div className="learningResources">
            <Link to="/aboutUs">About us</Link>
          </div>
        </div>
        <div className="navbar-right">
          <img src={cart} alt="cart"></img>
          <Link to="/">
            <button id="btn-left">Sign in</button>
          </Link>
          <Link to="/register">
            <button>Sign up</button>
          </Link>
        </div>
      </div>
    </>
  );
}
