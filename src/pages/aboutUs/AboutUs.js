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
import chambi from "../../images/AboutUs/chambi.png";
import may from "../../images/AboutUs/may.png";
import van from "../../images/AboutUs/van.png";
import tamgiac from "../../images/AboutUs/tamgiac.png";
import nuahinhtron from "../../images/AboutUs/nuahinhtron.png";
import van2 from "../../images/AboutUs/van2.png";
import may2 from "../../images/AboutUs/may2.png";
import Footer from "../footer/footer";
import style from "./AboutUs.module.css";
export default function AboutUs() {
  return (
    <div className={style.aboutUs}>
      <Navbar />
      <div className={style.first}>
        <div className={style.chambi}>
          <img src={chambi} alt="chambi"></img>
        </div>
        <div className={style.firstDetails}>
          <h1>Who are we?</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus risus
            non venenatis dolor nisl tellus habitant aliquam. Dignissim tellus,
            eu eu sed malesuada pharetra aliquam eu.Dignissim tellus, Tellus
            elementum enim faucibus morbi enim fusce:
          </p>
        </div>
        <div className={style.firstImages}>
          <img src={a1} alt="a1"></img>
        </div>
      </div>
      <div className={style.second}>
        <div className={style.may}>
          <img src={may} alt="may"></img>
        </div>
        <div className={style.van}>
          <img src={van} alt="van"></img>
        </div>
        <div className={style.tamgiac}>
          <img src={tamgiac} alt="tamgiac"></img>
        </div>
        <div className={style.nuahinhtron}>
          <img src={nuahinhtron} alt="nuahinhtron"></img>
        </div>
        <div className={style.secondLeft}>
          <h2>The Levion story</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictumst
            sed massa tempor, sagittis non consequat pretium urna nisi. Vitae,
            nunc proin mollis accumsan, velit. Turpis ornare commodo nisl,
            pharetra, tempus nam pellentesque. Nulla et id consectetur suscipit
            sagittis viverra tortor eu tempus. Nibh urna ullamcorper venenatis.
          </p>
        </div>
        <div className={style.secondRight}>
          <div className={style.secondRightImg}>
            <img src={a2} alt="a1"></img>
            <div className={style.play}>
              <img src={play} alt="play"></img>
            </div>
          </div>
        </div>
      </div>
      <div className={style.thirds}>
        <div className={style["third-left"]}>
          <img src={a3} alt="a1"></img>
          <div className={style.chambi2}>
            <img src={chambi} alt="van"></img>
          </div>
        </div>
        <div className={style.may2}>
          <img src={may2} alt="may2"></img>
        </div>
        <div className={style.van2}>
          <img src={van2} alt="van2"></img>
        </div>
        <div className={style["third-right"]}>
          <div className={style["third-right-details"]}>
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
      <div className={style.fourth}>
        <div className={style["fourth-left"]}>
          <div className={style["fourth-left-detail"]}>
            <div className={style.details}>
              <img src={mission} alt="mission"></img>
              <h2>Our Mission</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus
                risus non venenatis dolor nisl tellus habitant aliquam.
                Dignissim tellus, eu eu sed malesuada pharetra aliquam
                eu.Dignissim tellus, Tellus elementum enim faucibus morbi enim
                fusce:
              </p>
            </div>
          </div>
        </div>
        <div className={style.van41}>
          <img src={van} alt="van41"></img>
        </div>
        <div className={style.tamgiac41}>
          <img src={tamgiac} alt="tamgiac41"></img>
        </div>
        <div className={style["fourth-right"]}>
          <img src={a4} alt="a1"></img>
        </div>
      </div>
      <div className={style.fifth}>
        <div className={style["fifth-left"]}>
          <div className={style["fifth-details"]}>
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
        <div className={style.van52}>
          <img src={van2} alt="van2"></img>
        </div>
        <div className={style["fifth-right"]}>
          <img src={a5} alt="a1"></img>
        </div>
      </div>
      <div className={style.sixth}>
        <div className={style["six-details"]}>
          <div className={style["six-details-contents"]}>
            <h2>The Levion Team</h2>
            <div className={style.gach}></div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictumst
              sed massa tempor, sagittis non consequat pretium urna nisi. Vitae,
              nunc proin mollis accumsan, velit. Turpis ornare commodo nisl,
              pharetra, tempus nam pellentesque. Nulla et id consectetur
              suscipit sagittis viverra tortor eu tempus. Nibh urna ullamcorper
              venenatis.
            </p>
            <div className={style["six-images-mobile"]}>
              <div className={style["six-images-first"]}>
                <div className={style.i11}>
                  <img src={a61} alt="a1"></img>
                </div>
                <div className={style.i21}>
                  <img src={a64} alt="a1"></img>
                </div>
              </div>
              <div className={style["six-images-first"]}>
                <div className={style.i12}>
                  <img src={a62} alt="a1"></img>
                </div>
                <div className={style.i22}>
                  <img src={a65} alt="a1"></img>
                </div>
              </div>
              <div className={style["six-images-first"]}>
                <div className={style.i13}>
                  <img src={a63} alt="a1"></img>
                </div>
                <div className={style.i23}>
                  <img src={a66} alt="a1"></img>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={style["six-images"]}>
          <div className={style["six-images-first"]}>
            <div className={style.i11}>
              <img src={a61} alt="a1"></img>
            </div>
            <div className={style.i21}>
              <img src={a64} alt="a1"></img>
            </div>
          </div>
          <div className={style["six-images-first"]}>
            <div className={style.i12}>
              <img src={a62} alt="a1"></img>
            </div>
            <div className={style.i22}>
              <img src={a65} alt="a1"></img>
            </div>
          </div>
          <div className={style["six-images-first"]}>
            <div className={style.i13}>
              <img src={a63} alt="a1"></img>
            </div>
            <div className={style.i23}>
              <img src={a66} alt="a1"></img>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
