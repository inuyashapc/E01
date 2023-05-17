import logo from "../../images/Layer 1.png";
import cartImg from "../../images/Icon Cart.png";
import dropdownImg from "../../images/dropdown.png";
import menuDropdown from "../../images/Navbar/Mobile/menuDropdown.png";
import logoMobile from "../../images/Navbar/logo.png";
import "./navbar.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { cartList } from "../redux/selector";
import { useState } from "react";
import { IconDropdown } from "../../Components/Icons/Dropdown";
export default function Navbar() {
  const cart = useSelector(cartList);
  const [dropdown, setDropdown] = useState(false);
  const handleDropdown = () => {
    console.log(dropdown);
    setDropdown(!dropdown);
  };
  return (
    <>
      <div className="navbar">
        <Link to="/home" id="homePC"><img src={logo} alt="logo" id="logoPC"></img></Link>
        <div className="logoMobile">
          <Link to="/home">
            <img src={logoMobile} alt="logoMobile"></img>
          </Link>
        </div>
        <div className="navbar-category">
          <div className="learningResources">
            <Link to="/#">Level Test</Link>
          </div>
          <div className="learningResources">
            <Link to="/courseList">Courses</Link>
          </div>
          <div className="learningResources">
            <Link to="/#">Learning Resources</Link>
            <IconDropdown />
            {/* <img src={dropdownImg} alt="dropdown"></img> */}
          </div>
          <div className="learningResources">
            <Link to="/aboutUs">About us</Link>
          </div>
        </div>
        <div className="cartAndMenu">
          <Link to="/cart" id="addToCart">
            <img src={cartImg} alt="cart"></img>
            <div className="badge">
              <p>{cart.length}</p>
            </div>
          </Link>
          <div className="navbar-mobile-right">
            <h6 onClick={() => handleDropdown()}>☰</h6>
            {dropdown === true ? (
              <div className="menuDetails">
                <ul>
                  <li className="signIn">
                    <Link to="/">
                      <button id="signIn">Sign in</button>
                    </Link>
                  </li>
                  <li>
                    <Link to="/register">
                      <button id="signUp">Sign up</button>
                    </Link>
                  </li>
                  <li id="dropdownMenuMobile">
                    <Link to="/#">Level Test</Link>
                  </li>
                  <li id="dropdownMenuMobile">
                    <Link to="/courseList">Courses</Link>
                  </li>
                  <li id="dropdownMenuMobile">
                    <Link to="/#">Learning Resources</Link>
                    <IconDropdown />
                    {/* <img src={menuDropdown} alt="dropdown"></img> */}
                  </li>
                  <li id="dropdownMenuMobile">
                    <Link to="/aboutUs">About us</Link>
                  </li>
                </ul>
              </div>
            ) : (
              <div className="menuDetailsClose">
                <ul>
                  <li className="signIn">
                    <Link to="/">
                      <button id="signIn">Sign in</button>
                    </Link>
                  </li>
                  <li>
                    <Link to="/register">
                      <button id="signUp">Sign up</button>
                    </Link>
                  </li>
                  <li id="dropdownMenuMobile">
                    <Link to="/#">Level Test</Link>
                  </li>
                  <li id="dropdownMenuMobile">
                    <Link to="/courseList">Courses</Link>
                  </li>
                  <li id="dropdownMenuMobile">
                    <Link to="/#">Learning Resources</Link>
                    <IconDropdown />
                    {/* <img src={menuDropdown} alt="dropdown"></img> */}
                  </li>
                  <li id="dropdownMenuMobile">
                    <Link to="/aboutUs">About us</Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
        <div className="navbar-right">
          <Link to="/cart" id="addToCart">
            <img src={cartImg} alt="cart"></img>
            <div className="badge">
              <p>{cart.length}</p>
            </div>
          </Link>
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
