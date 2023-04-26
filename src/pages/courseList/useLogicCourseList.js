import { useState } from "react";
import fakeData from "../../fakeAPI/data.json";

let a = [];

export default function UseLogicCourseList() {
  const [listCourse, setListCourse] = useState(fakeData);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const handleSearch = (e) => {
    let name = e.target.value;
    console.log(name);
    a = fakeData.filter((e) =>
      e.name.toLowerCase().includes(name.toLowerCase())
    );
    console.log("abcd=>", a);
    setListCourse(a);
    console.log("aaaaaaaaa=>", listCourse);
  };

  const handleFilterSkills = (e) => {
    const skillsValue = e.target.value;
    const listSkills = fakeData.filter((e) => e.skill === skillsValue);
    console.log(listSkills);
    setListCourse(listSkills);
  };

  const handleFilterLevels = (e) => {
    const levelValue = e.target.value;
    console.log(levelValue);
    const listLevels = fakeData.filter((e) => e.level === levelValue);
    console.log(listLevels);
    setListCourse(listLevels);
  };

  return {
    handleSearch,
    listCourse,
    handleFilterSkills,
    handleFilterLevels,
  };
}
