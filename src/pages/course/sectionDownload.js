import style from "./course.module.css";
import SectionDownload1 from "../../Components/Icons/sectionDownload1";
import React from "react";

export default function SectionDownload({ img, detail }) {
  return (
    <div className={style.downloadAttach}>
      {img}
      <p>{detail}</p>
    </div>
  );
}
