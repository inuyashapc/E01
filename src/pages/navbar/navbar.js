import logo from "../../images/Layer 1.png";
import cart from "../../images/Icon Cart.png";
import "./navbar.css";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <>
      <div className="navbar">
        <img src={logo}></img>
        <div className="navbar-category">
          <a href="#">Level Test</a>
          <a href="#">Courses</a>
          <a href="#">Learning Resources</a>
          <a href="#">About us</a>
        </div>
        <div className="navbar-right">
          <img src={cart}></img>
          <Link to='/'><button>Sign in</button></Link>
          <Link to='/register'><button>Sign up</button></Link>
        </div>
      </div>
    </>
  );
}
