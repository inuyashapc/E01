import React, { useState } from "react";

export default function UseLogic() {
  const [answer, setAnswer] = useState({});
  const [progress, setProgress] = useState(0);
  const [tougle1, setTougle1] = useState(1);
  const [tougle2, setTougle2] = useState(1);
  console.log("list", answer);
  console.log("progress", progress);
  console.log("aa", Object.values(answer).length);
  const handleAnswer = (_answer, question) => {
    console.log("question", answer);
    console.log("question", question);
    // let list = [...answer, ];
    // const { name, value } = question.target;
    // console.log("name", name);
    // console.log("values", value);
    // setAnswer((preData) => {
    //   return {
    //     ...preData,
    //   }
    // });

    setAnswer({
      ...answer,
      [question.id]: _answer.detail,
    });

    setProgress(Object.values(answer).length);
  };

  const tab1 = (id) => {
    console.log(id);
    if (id === 1) {
      setProgress(0);
      setAnswer({});
    }
    setTougle1(id);
  };
  const tab2 = (id) => {
    console.log(id);
    setTougle2(id);
  };
  return { handleAnswer,answer, progress, tab1, tab2, tougle1, tougle2 };
}
