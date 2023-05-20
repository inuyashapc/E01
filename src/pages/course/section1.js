import React from "react";
import style from "./course.module.css";

export default function Section1({sections,handleCollaspe}) {
  return (
    <div>
      <div
        className={style.sectionLesson}
        onClick={() => handleCollaspe(sections.id)}
      >
        <div className={style.fullSection}>
          <div className={style.sectionTitle}>
            <h6>
              Section {section.id}: {section.name}
            </h6>
            <DropUp />
          </div>
          <div>
            <p>0/7 | 22min</p>
          </div>
        </div>
      </div>
      {section.lessons.map((lesson) => (
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
      ))}
    </div>
  );
}
