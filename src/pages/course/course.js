import style from "./course.module.css";
import { Exercise } from "../../Components/Icons/exercise";
import { Menu } from "../../Components/Icons/menu";
import { Video } from "../../Components/Icons/video";
import YoutubeEmbed from "./youtubeEmbed";
import { IconDropdown } from "../../Components/Icons/Dropdown";
import Edit from "../../Components/Icons/Edit";
import Delete from "../../Components/Icons/Delete";
import { useState } from "react";
import { TitleMobile, TitlePC } from "./title";
import { Section } from "./section";
import PostQuestion from "./postQuestion";
import Note from "./note";
export default function Course() {
  const [tougle1, setTougle1] = useState(1);
  const [tougle2, setTougle2] = useState(1);
  const tab1 = (id) => {
    console.log(id);
    setTougle1(id);
  };
  const tab2 = (id) => {
    console.log(id);
    setTougle2(id);
  };
  return (
    <div>
      <TitleMobile />
      <TitlePC />
      <div className={style.screenPC}>
        <div className={style.left}>
          <Section />
          <Section />
        </div>
        <div className={style.right}>
          <div className={style.part1}>
            <h5>Lession 1: Xin chào, cảm ơn / Hello, Thank kiu</h5>
          </div>
          <div className={style.part2}>
            <div className={style.tab}>
              <div className={style.video} onClick={() => tab1(1)}>
                <Video />
                <p>Video</p>
              </div>
              <div className={style.exercise} onClick={() => tab1(2)}>
                <Exercise />
                <p>Exercise/Quiz</p>
              </div>
            </div>
            {tougle1 === 1 ? (
              <div>
                <div>
                  <YoutubeEmbed embedId="zxDT3X7CZUs" />
                </div>
                <div className={style.tabAndSearch}>
                  <div className={style.tab2}>
                    <div
                      className={tougle2 === 1 ? style.active : style.unActive}
                      onClick={() => tab2(1)}
                    >
                      <p>Transcript</p>
                    </div>
                    <div
                      className={tougle2 === 2 ? style.active : style.unActive}
                      onClick={() => tab2(2)}
                    >
                      <p>Q&A</p>
                    </div>
                    <div
                      className={tougle2 === 3 ? style.active : style.unActive}
                      onClick={() => tab2(3)}
                    >
                      <p>Note</p>
                    </div>
                    <div
                      className={tougle2 === 4 ? style.active : style.unActive}
                      onClick={() => tab2(4)}
                    >
                      <p>Download</p>
                    </div>
                  </div>
                  <div className={style.searchAndFilter}>
                    <input type="search" placeholder="Search Here" />
                    <button>
                      All Lecturess
                      <IconDropdown />
                    </button>
                  </div>
                </div>
                <div className={tougle2 === 1 ? style.transcript : style.none}>
                  <div className={style.transcriptDetail}>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nunc vulputate libero et velit interdum, ac aliquet odio
                      mattis. Class aptent taciti sociosqu ad litora torquent
                      per conubia nostra, per inceptos himenaeos.
                    </p>
                  </div>
                  <div className={style.transcriptDetail}>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nunc vulputate libero et velit interdum, ac aliquet odio
                      mattis. Class aptent taciti sociosqu ad litora torquent
                      per conubia nostra, per inceptos himenaeos. Curabitur
                      tempus urna at turpis condimentum lobortis. Ut commodo
                      efficitur neque.
                    </p>
                  </div>
                  <div className={style.transcriptDetail}>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Etiam eu turpis molestie, dictum est a, mattis tellus. Sed
                      dignissim, metus nec fringilla accumsan, risus sem
                      sollicitudin lacus, ut interdum tellus elit sed risus.
                      Maecenas eget condimentum velit, sit amet feugiat lectus.
                      Class aptent taciti sociosqu ad litora torquent per
                      conubia nostra, per inceptos himenaeos. Praesent auctor
                      purus luctus enim egestas, ac scelerisque ante pulvinar.
                      Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu
                      tempor urna. Curabitur vel bibendum lorem. Morbi convallis
                      convallis diam sit amet lacinia. Aliquam in elementum
                      tellus.
                    </p>
                  </div>
                  <div className={style.transcriptDetail}>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nunc vulputate libero et velit interdum, ac aliquet odio
                      mattis.
                    </p>
                  </div>
                  <div className={style.transcriptDetail}>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nunc vulputate libero et velit interdum, ac aliquet odio
                      mattis. Class aptent taciti sociosqu ad litora torquent
                      per conubia nostra, per inceptos himenaeos. Curabitur
                      tempus urna at turpis condimentum lobortis. Ut commodo
                      efficitur neque. Ut diam quam, semper iaculis condimentum
                      ac, vestibulum eu nisl.
                    </p>
                  </div>
                  <div className={style.transcriptDetail}>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nunc vulputate libero et velit interdum, ac aliquet odio
                      mattis. Class aptent taciti sociosqu ad litora torquent
                      per conubia nostra, per inceptos himenaeos. Curabitur
                      tempus urna at turpis condimentum lobortis. Ut commodo
                      efficitur neque. Ut diam quam, semper iaculis condimentum
                      ac, vestibulum eu nisl.
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <div></div>
            )}
            {tougle2 === 2 ? (
              <div className={style.toggle2}>
                <div className={style.toggle2Detail}>
                  <div className={style.question}>
                    <label>Your Question</label>
                    <textarea rows={4}></textarea>
                  </div>
                  <div className={style.buttonAddQuestion}>
                    <button>Ask Question</button>
                  </div>
                </div>
                <div className={style.postQuestion}>
                  <PostQuestion
                    title={"Tùng Nguyễn - Lecture 10 - 1 month ago"}
                    detail={`Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.is enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet. is enim velit mollit. Exercitation
          veniam consequat n veniam....`}
                  />
                  <PostQuestion
                    title={"Tùng Nguyễn - Lecture 10 - 1 month ago"}
                    detail={`Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.is enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet. is enim velit mollit. Exercitation
          veniam consequat n veniam....`}
                  />
                  <PostQuestion
                    title={"Tùng Nguyễn - Lecture 10 - 1 month ago"}
                    detail={`Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.is enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet. is enim velit mollit. Exercitation
          veniam consequat n veniam....`}
                  />
                  <PostQuestion
                    title={"Tùng Nguyễn - Lecture 10 - 1 month ago"}
                    detail={`Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.is enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet. is enim velit mollit. Exercitation
          veniam consequat n veniam....`}
                  />
                </div>
              </div>
            ) : (
              <div></div>
            )}
            {tougle2 === 3 ? (
              <div>
                <div className={style.note}>
                  <div className={style.lecture}>
                    <button>
                      All Lectures <IconDropdown />
                    </button>
                  </div>
                  <Note />
                  <Note />
                </div>
              </div>
            ) : (
              <div></div>
            )}

            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}
