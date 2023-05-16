import vn from "../../images/vietnam 1.png";
import layer from "../../images/Layer 1.png";
import { Link } from "react-router-dom";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoadingIcon from "../../Components/loading";
import useLogicRegister from "../register/useLogicRegister";
import style from "./register.module.css";
function Register() {
  const {
    validMsg,
    formData,
    signUp,
    loading,
    setLoading,
    debounce,
    onChangeValue,
  } = useLogicRegister();
  return (
    <>
      <div className={style.registerBackground}>
        <img src={vn} alt="vn" />
      </div>
      <form>
        <div className={style.registerDetailiImg}>
          <img src={layer} alt="layer" />
        </div>
        <h2>Create an account</h2>
        <div className={style.content}>
          <label htmlFor="fullname">
            Full Name <span style={{ color: "red" }}>*</span>
          </label>
          <br />
          <input
            name="fullname"
            type="text"
            placeholder="Your Name"
            onChange={onChangeValue}
            disabled={!loading}
          />
          <br />
          <small style={{ color: "red" }}>{validMsg.fullname}</small>
          <br />
          <label htmlFor="email">
            Email <span style={{ color: "red" }}>*</span>
          </label>
          <br />
          <input
            name="email"
            type="email"
            placeholder="Your Email"
            onChange={onChangeValue}
            disabled={!loading}
          />
          <br />
          <label htmlFor="password">
            Password <span style={{ color: "red" }}>*</span>
          </label>
          <br />
          <small style={{ color: "red" }}>{validMsg.email}</small>
          <br />
          <input
            name="password"
            type="password"
            placeholder="Your Password"
            onChange={onChangeValue}
            disabled={!loading}
          />
          <br />
          <small style={{ color: "red" }}>{validMsg.password}</small>
          <br />
        </div>
        <div className={style.checkbox}>
          <input
            name="isChecked"
            type="checkbox"
            value={formData.isChecked.value ? "false" : "true"}
            onChange={onChangeValue}
            disabled={!loading}
          />
          I accept Levion’s <span>Terms of Service </span> and
          <span> Privacy Policy</span>.
        </div>

        {loading ? (
          <button
            type="button"
            onClick={debounce(signUp, 3000)}
            id="mybtn"
            disabled={!formData.isChecked.value}
          >
            Create Account
          </button>
        ) : (
          <button type="button">
            <div className={style.loader}></div>
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
