import vn from "../images/vietnam 1.png";
import layer from "../images/Layer 1.png";
import style from "./forgetpassword.module.css";
function Forgotpassword() {
  return (
    <div className={style.forgotPassword}>
      <div className={style.registerBackground}>
        <img src={vn} alt="" />
      </div>
      <form>
        <div className={style.registerDetailImg}>
          <img src={layer} alt="" />
        </div>
        <h2>Create an account</h2>
        <div className={style.content}>
          <label for="email" style={{ fontWeight: "bold" }}>
            Email <span style={{ color: "red" }}>*</span>
          </label>
          <br />
          <input type="email" placeholder="Your Email" required />
          <br />
        </div>
        <button type="button">Reset password</button>
        <p>
          Already have an account?{" "}
          <a href="login.html" style={{ fontWeight: "bold" }}>
            Sign in
          </a>
        </p>
      </form>
    </div>
  );
}
export default Forgotpassword;
