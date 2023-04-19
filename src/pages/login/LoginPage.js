import vn from "../images/vietnam 1.png";
import layer from "../images/Layer 1.png";
import React from 'react'
import useLogicLogic from './useLogicLogic'
import { ToastContainer } from 'react-toastify'
import { Link } from 'react-router-dom'

export default function LoginPage() {
    const {debounce,formData,loading,onChangeValue,setFormData,setLoading,signUp,validMsg} = useLogicLogic()
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
          name="fullname"
          type="text"
          placeholder="Your Name"
          onChange={onChangeValue}
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
        />
        <br />
        <small style={{ color: "red" }}>{validMsg.password}</small>
        <br />
      </div>
      <div className="checkbox">
        <input
        name="isChecked"
          type="checkbox"
          value={formData.isChecked.value ? 'false':'true'}
          onChange={onChangeValue}
        />
        I accept Levion’s <span>Terms of Service </span> and
        <span> Privacy Policy</span>.
      </div>
      
      {loading ? (
        <button
          type="button"
          onClick={signUp}
          id="mybtn"
          disabled={!formData.isChecked.value}
        >
          Create Account
        </button>
      ) : (
        <button type="button">
          <div className="loader"></div>
        </button>
      )}
      <ToastContainer />
      <p>
        Already have an account? <Link to="/">Sign in</Link>
      </p>
    </form>
  </>
  )
}
