import React from "react";
import style from "./course.module.css";
import accavt from "../../images/Course/accavt.png";
import Comment from "../../Components/Icons/Comment";
export default function PostQuestion({ title, detail }) {
  return (
    <div className={style.questionPost}>
      <div>
        <img src={accavt} alt="accavt"></img>
      </div>
      <div className={style.questionDetail}>
        <h2>{title}</h2>
        <p>{detail}</p>
        <div className={style.comment}>
          <Comment />
          <p>168 Comments</p>
        </div>
      </div>
    </div>
  );
}
