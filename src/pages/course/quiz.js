import style from "./course.module.css";
import i1 from "../../images/Course/i1.png";
import React from "react";
import UseLogic from "./useLogic";

export default function Quiz({
  index,
  img,
  questionName,
  listAnswers,
  question,
  handleAnswer

}) {
  console.log("anh", img);
  return (
    <div className={style.quiz}>
  
      {img && (
        <div>
          <img src={img} alt="i1"></img>
        </div>
      )}

      <div className={style.quizTitle}>
        <div>
          <p>{index}</p>
        </div>
        <h6>{questionName}</h6>
      </div>
      <div className={style.choose}>
        {listAnswers.map((answer) => (
          <div className={style.chooseAnswer}>
            <input
              type="radio"
              name={`q${index}`}
              value={answer.detail}
              id={`${`q${index}`} ${answer.id}`}
              onClick={(value) => handleAnswer(answer, question)}
            ></input>
            <label htmlFor={`${`q${index}`} ${answer.id}`}>
              {answer.detail}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}
export function QuizHasNotImg({
  index,
  img,
  questionName,
  a,
  b,
  c,
  d,
  handleAnswer,
}) {
  return (
    <div className={style.quiz}>
      <div className={style.quizTitle}>
        <div>
          <p>{index}</p>
        </div>
        <h6>{questionName}</h6>
      </div>
      <div className={style.choose}>
        <div className={style.chooseAnswer}>
          <input
            type="radio"
            name={`q${index}`}
            value={a}
            id={`${`q${index}`} a`}
            onClick={(value) => handleAnswer(value)}
          ></input>
          <label htmlFor={`${`q${index}`} a`}>{a}</label>
        </div>
        <div className={style.chooseAnswer}>
          <input
            type="radio"
            name={`q${index}`}
            value={b}
            id={`${`q${index}`} b`}
            onClick={(value) => handleAnswer(value)}
          ></input>
          <label htmlFor={`${`q${index}`} b`}>{b}</label>
        </div>
        <div className={style.chooseAnswer}>
          <input
            type="radio"
            name={`q${index}`}
            value={c}
            id={`${`q${index}`} c`}
            onClick={(value) => handleAnswer(value)}
          ></input>
          <label htmlFor={`${`q${index}`} c`}>{c}</label>
        </div>
        <div className={style.chooseAnswer}>
          <input
            type="radio"
            name={`q${index}`}
            value={d}
            id={`${`q${index}`} d`}
            onClick={(value) => handleAnswer(value)}
          ></input>
          <label htmlFor={`${`q${index}`} d`}>{d}</label>
        </div>
      </div>
    </div>
  );
}
