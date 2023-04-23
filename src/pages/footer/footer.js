import bg from "../../images/Footer/footer.png";
import logo from "../../images/Footer/logo.png";
import fb from "../../images/Footer/fb.png";
import yt from "../../images/Footer/yt.png";
import tiktok from "../../images/Footer/tiktok.png";
import ig from "../../images/Footer/ig.png";
import "./footer.css";
export default function Footer() {
  return (
    <>
      <div id="footer">
        <div id="footer-bg">
          <img src={bg} alt="footer"></img>
        </div>
      </div>
      <div id="logo">
        <img src={logo} alt="footer"></img>
      </div>
      <div className="category">
        <a href="#">Home</a>
        <a href="#">Level Test</a>
        <a href="#">Courses</a>
        <a href="#">Learning Resources</a>
        <a href="#">About us</a>
      </div>
      <div className="social-media">
        <img src={fb} alt="footer"></img>
        <img src={ig} alt="footer"></img>
        <img src={yt} alt="footer"></img>
        <img src={tiktok} alt="footer"></img>
      </div>
      <p>©2022 Levion. All copyrights reserved</p>
    </>
  );
}
