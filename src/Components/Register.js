import vn from "../images/vietnam 1.png";
import layer from "../images/Layer 1.png";
import "../Components/register.css";
import { Link } from "react-router-dom";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import registerApi from "./API/registerAPI";
import LoadingIcon from "./loading";
function Register() {
  const {
    setFullname,
    validMsg,
    fullname,
    email,
    password,
    setPassword,
    setEmail,
    setIsChecked,
    signUp,
    isChecked,
    loading,
    setLoading,
    debounce,
  } = registerApi();
  return (
    <>
      <div className="register-background">
        <img src={vn} alt="" />
      </div>
      <form>
        <div className="register-detail-img">
          <img src={layer} alt="" />
        </div>
        <h2>Create an account</h2>
        <div className="content">
          <label htmlFor="fullname">
            Full Name <span style={{ color: "red" }}>*</span>
          </label>
          <br />
          <input
            type="text"
            placeholder="Your Name"
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
          />
          <br />
          <small style={{ color: "red" }}>{validMsg.fullname}</small>
          <br />
          <label htmlFor="email">
            Email <span style={{ color: "red" }}>*</span>
          </label>
          <br />
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <label htmlFor="password">
            Password <span style={{ color: "red" }}>*</span>
          </label>
          <br />
          <small style={{ color: "red" }}>{validMsg.email}</small>
          <br />
          <input
            type="password"
            placeholder="Your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <small style={{ color: "red" }}>{validMsg.password}</small>
          <br />
        </div>
        <div className="checkbox">
          <input
            type="checkbox"
            id="myCheckbox"
            onChange={(e) => setIsChecked(e.target.checked, "fullname")}
          />
          I accept Levion’s <span>Terms of Service </span> and
          <span> Privacy Policy</span>.
        </div>
        {loading ? (
          <button
            type="button"
            onClick={debounce(signUp,1000)}
            id="mybtn"
            disabled={!isChecked}
          >
            Create Account
          </button>
        ) : (
          <button className="button" disabled>
            <div className="loader"></div>
          </button>
        )}
        <ToastContainer />
        <p>
          Already have an account? <Link to="/">Sign in</Link>
        </p>
      </form>
    </>
  );
}
export default Register;
