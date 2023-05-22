import { DropUp } from "Components/Icons/Dropup";
import style from "./course.module.css";
import React, { useState } from "react";
import Lesson from "./lesson";
import { GreenTick } from "Components/Icons/GreenTick";
import Wait from "Components/Icons/Wait";
import Pause from "Components/Icons/Pause";
import { IconDropdown } from "Components/Icons/Dropdown";

export default function SectionOne({ section, handleCollaspe, sections }) {
  const [isActive, setIsActive] = useState(false);
  console.log("change aaaa", isActive);
  return (
    <div key={section.id}>
      <div
        className={style.sectionLesson}
        onClick={() => setIsActive(!isActive)}
      >
        <div className={style.fullSection}>
          <div className={style.sectionTitle}>
            <h6>
              Section {section.id}: {section.name}
            </h6>
            {isActive ? <IconDropdown /> : <DropUp />}
          </div>
          <div>
            <p>0/7 | 22min</p>
          </div>
        </div>
      </div>
      {section.lessons.map(
        (lesson) =>
          isActive && (
            <Lesson
              key={lesson.id}
              detail={`${lesson.id}. ${lesson.name}`}
              status={
                lesson.state === "done" ? (
                  <GreenTick />
                ) : lesson.state === "processing" ? (
                  <Wait />
                ) : (
                  <Pause />
                )
              }
              active={lesson.state === "processing"}
              disable={lesson.state === "pending"}
            />
          )
      )}
    </div>
  );
}
