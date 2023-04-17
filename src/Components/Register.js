import vn from "../images/vietnam 1.png";
import layer from "../images/Layer 1.png";
import "../Components/register.css";
import { Link } from "react-router-dom";
import { useRef } from "react";
import axios from "axios";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import isEmpty from "validator/lib/isEmpty";
import isEmail from "validator/lib/isEmail";
function Register() {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkboxbutton, setCheckbox] = useState(false);
  const [user, setUser] = useState("");
  const [ischeck, setisCheck] = useState(false);
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const [validMsg, setValidMsg] = useState("");
// 
const [isChecked, setIsChecked] = useState(false)
console.log(">>>>>>", isChecked)
// 
  const validate = () => {
    const msg = {};
    if (isEmpty(fullname)) {
      msg.fullname = "Please enter the name";
    }
    if (email === "") {
      msg.email = "Please enter the email";
    } else if (!isEmail(email)) {
      msg.email = "Please enter the valid email";
    }
    if (password === "") {
      msg.password = "Please enter the password";
    } else if (password.length < 8) {
      msg.password = "Please enter the password more than 7 characters";
    }
    if (ischeck) {
      console.log(ischeck);
      setCheckbox(true);
    } else if (!ischeck) {
      console.log(ischeck);
      setCheckbox(false);
    }

    setValidMsg(msg);
    if (Object.keys(msg).length > 0) return false;
    return true;
  };
  async function signUp() {
    const isValid = validate();
    if (!isValid) return;
    try {
      const res = await axios.post(
        "https://dev.go.locate.sa/api/admin/api/v1/test/register",
        {
          fullname: fullname,
          email: email,
          password: password,
        }
      );
      console.log("res->", res);
      setUser(res.data.user);
      console.log(res.data.user);
      try {
        const response = await axios.patch(
          `https://dev.go.locate.sa/api/admin/api/v1/test/users/${res.data.user}/active`,
          {},
          {
            headers: {
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.NjQzNjIyMmQ1NzgwMTEzOWNmYzUyNzMx.FHuabwi3sRHJqU0pBYTZlaZX2nOMgAv88tzNfOPgHpM",
            },
          }
        );

        toast.success("Đăng kí thành công!");
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    } catch (error) {
      console.log(error);
      toast.error("Tài khoản đã tồn tại");
    }
  }
  const enable = () => {
    const check = document.getElementById("myCheckbox")
    const btn = document.getElementById("mybtn")
    if(check.checked) {
      btn.removeAttribute("disabled")
  }else{
    btn.disabled = "true"
  }
}
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
            ref={nameRef}
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
            ref={emailRef}
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
            ref={passwordRef}
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
            onChange={(e)=> setIsChecked(e.target.checked)}
          />
          I accept Levion’s <span>Terms of Service </span> and
          <span> Privacy Policy</span>.
        </div>
        <button type="button" onClick={signUp} id="mybtn" disabled={!isChecked}>
          Create Account
        </button>
        <ToastContainer />
        <p>
          Already have an account? <Link to="/">Sign in</Link>
        </p>
      </form>
    </>
  );
}
export default Register;
