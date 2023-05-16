import vn from "../../images/vietnam 1.png";
import layer from "../../images/Layer 1.png";
import { Link } from "react-router-dom";
import useLogicLogin from "./useLogicLogin";
import { ToastContainer } from "react-toastify";
import style from "./login.module.css";
function Login() {
  const { handleChange, submitForm, loginData } = useLogicLogin();
  return (
    <div className={style.login}>
      <div className={style.registerBackground}>
        <img src={vn} alt="a" />
      </div>
      <div className={style.formLogin}>
        <form>
          <div className={style.formLoginDiv}>
            <div className={style.registerDetailImg}>
              <img src={layer} alt="a" />
            </div>
            <h2>Sign in to your account</h2>
            <div className={style.content}>
              <div className={style.inputInfo}>
                <label htmlFor="email">Email</label>
                <input
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  onChange={handleChange}
                  required
                />
                <small style={{ color: "red" }}>{loginData.email.error}</small>
              </div>
              <div className={style.inputInfo}>
                <label htmlFor="password">Password</label>
                <input
                  name="password"
                  type="password"
                  placeholder="Your Password"
                  onChange={handleChange}
                  required
                />
                <small style={{ color: "red" }}>
                  {loginData.password.error}
                </small>
              </div>
            </div>
            <div className={style.submitButton}>
              <button type="button" onClick={submitForm}>
                Sign in
              </button>
            </div>

            <ToastContainer />
            <div className={style.forgot}>
              <Link to="/forgot">Forgot password</Link>
            </div>
            <div className={style.signIn}>
              <p>
                Already have an account? <Link to="/register">Sign up</Link>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Login;
