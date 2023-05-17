import { Menu } from "../../Components/Icons/menu";
import style from "./course.module.css";
import logo from "../../images/Course/logo.png";
import process from "../../images/Course/process.png";
import avt from "../../images/Course/avt.png";
export const TitleMobile = () => {
  return (
    <div className={style.title}>
      <div className={style.titleLeft}>
        <Menu />
      </div>
      <div className={style.titleMiddle}></div>
      <div className={style.titleRight}>
        <h2>Course 1: Master Your Pronunciation</h2>
      </div>
    </div>
  );
};
export const TitlePC = () => {
  return (
    <div className={style.titlePC}>
      <div className={style.titlePCLeft}>
        <div>
          <img src={logo} alt="logo"></img>
        </div>
        <div className={style.titleMiddle}></div>
        <div className={style.titlePCDetail}>
          <h2>Course 1: Master Your Pronunciation</h2>
        </div>
      </div>
      <div className={style.titlePCRight}>
        <div className={style.titlePCRightDetail}>
          <div className={style.courseProcess}>
            <img src={process} alt="process"></img>
            <div className={style.chartProcess}>
              <p>Course Progress</p>
            </div>
          </div>

          <img src={avt} alt="avt"></img>
        </div>
      </div>
    </div>
  );
};
