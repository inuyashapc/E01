import { DropUp } from "../../Components/Icons/Dropup";
import { GreenTick } from "../../Components/Icons/GreenTick";
import Play from "../../Components/Icons/Play";
import Download from "../../Components/Icons/Download";
import Pause from "../../Components/Icons/Pause";
import Wait from "../../Components/Icons/Wait";
import style from "./course.module.css";
import Lesson from "./lesson";

export const Section = () => {
  return (
    <div>
      <div className={style.sectionLesson}>
        <div className={style.fullSection}>
          <div className={style.sectionTitle}>
            <h6>Section 1: Xin chào, cảm ơn / Hello, Thank kiu</h6>
            <DropUp />
          </div>
          <div>
            <p>0/7 | 22min</p>
          </div>
        </div>
      </div>
      <Lesson detail={"1. Xin chào, cảm ơn / Hello, Thank kiu"} status={<GreenTick />} />
      <Lesson detail={"1. Xin chào, cảm ơn / Hello, Thank kiu"} status={<Wait />} active/>
      <Lesson detail={"1. Xin chào, cảm ơn / Hello, Thank kiu"} status={<Pause />} disable/>
      <Lesson detail={"1. Xin chào, cảm ơn / Hello, Thank kiu"} status={<Pause />} disable/>
      <Lesson detail={"1. Xin chào, cảm ơn / Hello, Thank kiu"} status={<Pause />} disable/>
      <Lesson detail={"1. Xin chào, cảm ơn / Hello, Thank kiu"} status={<Pause />} disable/>
      <Lesson detail={"1. Xin chào, cảm ơn / Hello, Thank kiu"} status={<Pause />} disable/>
      <Lesson detail={"1. Xin chào, cảm ơn / Hello, Thank kiu"} status={<Pause />} disable/>
      <Lesson detail={"1. Xin chào, cảm ơn / Hello, Thank kiu"} status={<Pause />} disable/>
      <Lesson detail={"1. Xin chào, cảm ơn / Hello, Thank kiu"} status={<Pause />} disable/>
    </div>
  );
};
