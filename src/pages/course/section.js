import { DropUp } from "../../Components/Icons/Dropup";
import { GreenTick } from "../../Components/Icons/GreenTick";
import Play from "../../Components/Icons/Play";
import Download from "../../Components/Icons/Download";
import Pause from "../../Components/Icons/Pause";
import Wait from "../../Components/Icons/Wait";
import style from "./course.module.css";
import Lesson from "./lesson";

export const Section = ({ sections, handleCollaspe }) => {
  return (
    <div>
      {sections.map((section) => {
        console.log("sssssss", section);
        return (
          <div key={section.id}>
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
      })}
    </div>
  );
};
