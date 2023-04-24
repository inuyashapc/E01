import Navbar from "../navbar/navbar";
import a1 from "../../images/AboutUs/aboutUs1.png";
import a2 from "../../images/AboutUs/a2.png";
import a3 from "../../images/AboutUs/a3.png";
import a4 from "../../images/AboutUs/a4.png";
import a5 from "../../images/AboutUs/a5.png";
import a61 from "../../images/AboutUs/a61.png";
import a62 from "../../images/AboutUs/a62.png";
import a63 from "../../images/AboutUs/a63.png";
import a64 from "../../images/AboutUs/a64.png";
import a65 from "../../images/AboutUs/a65.png";
import a66 from "../../images/AboutUs/a66.png";
import play from "../../images/AboutUs/Play.png";
import eyes from "../../images/AboutUs/eyes.png";
import mission from "../../images/AboutUs/misson.png";
import Footer from "../footer/footer";
import "./AboutUs.css";
export default function AboutUs() {
  return (
    <div className="aboutUs">
      <Navbar />
      <div className="first">
        <div className="first-details">
          <h1>Who are we?</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus risus
            non venenatis dolor nisl tellus habitant aliquam. Dignissim tellus,
            eu eu sed malesuada pharetra aliquam eu.Dignissim tellus, Tellus
            elementum enim faucibus morbi enim fusce:
          </p>
        </div>
        <div className="first-images">
          <img src={a1} alt="a1"></img>
        </div>
      </div>
      <div className="second">
        <div className="second-left">
          <h2>The Levion story</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictumst
            sed massa tempor, sagittis non consequat pretium urna nisi. Vitae,
            nunc proin mollis accumsan, velit. Turpis ornare commodo nisl,
            pharetra, tempus nam pellentesque. Nulla et id consectetur suscipit
            sagittis viverra tortor eu tempus. Nibh urna ullamcorper venenatis.
          </p>
        </div>
        <div className="second-right">
          <img src={a2} alt="a1"></img>
          <div className="play">
            <img src={play} alt="play"></img>
          </div>
        </div>
      </div>
      <div className="thirds">
        <div className="third-left">
          <img src={a3} alt="a1"></img>
        </div>
        <div className="third-right">
          <div className="third-right-details">
            <img src={eyes} alt="eyes"></img>
            <h2>Our Vision</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus
              risus non venenatis dolor nisl tellus habitant aliquam. Dignissim
              tellus, eu eu sed malesuada pharetra aliquam eu.Dignissim tellus,
              Tellus elementum enim faucibus morbi enim fusce:
            </p>
          </div>
        </div>
      </div>
      <div className="fourth">
        <div className="fourth-left">
          <div className="fourth-left-detail">
            <img src={mission} alt="mission"></img>
            <h2>Our Mission</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus
              risus non venenatis dolor nisl tellus habitant aliquam. Dignissim
              tellus, eu eu sed malesuada pharetra aliquam eu.Dignissim tellus,
              Tellus elementum enim faucibus morbi enim fusce:
            </p>
          </div>
        </div>
        <div className="fourth-right">
          <img src={a4} alt="a1"></img>
        </div>
      </div>
      <div className="fifth">
        <div className="fifth-left">
          <div className="fifth-details">
            <h2>Our “Vi” Mascot story</h2>
            <p>
              At eu ut vitae platea at in. In porttitor mollis eu et ornare odio
              cursus id. Sed eget et nunc vivamus hac et urna, fermentum. Purus
              malesuada tempor donec egestas. Lorem quam aliquam porttitor
              ornare magna condimentum ipsum, gravida. Nascetur eget eget massa
              purus amet vitae facilisi consequat. Iaculis purus, integer
              condimentum sodales vulputate dapibus molestie netus. Suscipit
              fringilla amet leo rutrum aliquet. Tempus mi fringilla fermentum
              feugiat amet leo placerat cras nam. Egestas arcu, egestas
              consectetur scelerisque habitant. Viverra sed adipiscing mi
              dignissim tortor dignissim molestie.
            </p>
          </div>
        </div>
        <div className="fifth-right">
          <img src={a5} alt="a1"></img>
        </div>
      </div>
      <div className="sixth">
        <div className="six-details">
          <div className="six-details-contents">
            <h2>The Levion Team</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictumst
              sed massa tempor, sagittis non consequat pretium urna nisi. Vitae,
              nunc proin mollis accumsan, velit. Turpis ornare commodo nisl,
              pharetra, tempus nam pellentesque. Nulla et id consectetur
              suscipit sagittis viverra tortor eu tempus. Nibh urna ullamcorper
              venenatis.
            </p>
          </div>
        </div>
        <div className="six-images">
          <div className="six-images-first">
            <div className="i11">
              <img src={a61} alt="a1"></img>
            </div>
            <div className="i21">
              <img src={a64} alt="a1"></img>
            </div>
          </div>
          <div>
            <div className="i12">
              <img src={a62} alt="a1"></img>
            </div>
            <div className="i22">
              <img src={a65} alt="a1"></img>
            </div>
          </div>
          <div>
            <div className="i13">
              <img src={a63} alt="a1"></img>
            </div>
            <div className="i23">
              <img src={a66} alt="a1"></img>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
