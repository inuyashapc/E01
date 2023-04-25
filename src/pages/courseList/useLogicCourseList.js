import { useState } from "react";
import fakeData from "../../fakeAPI/data.json";
let a = [];
export default function UseLogicCourseList() {
  const [listCourse, setListCourse] = useState(fakeData);
  const handleSearch = (e) => {
    let name = e.target.value;
    a = listCourse.filter((e) =>
      e.name.toLowerCase().includes(name.toLowerCase())
    );
    console.log("abcd=>", a);
    setListCourse(a);
  };
  console.log("aaaaaaaaa=>", listCourse);
  return {
    handleSearch,
    listCourse,
  };
}
