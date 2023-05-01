import { useCallback, useEffect, useState } from "react";
import fakeData from "../../fakeAPI/data.json";

let a = [];

export default function UseLogicCourseList() {
  const [filter, setFilter] = useState({
    Speaking: false,
    Listening: false,
    Reading: false,
    Writing: false,
  });
  useEffect(() => {
    console.log("filter", filter);
    // fakeData.map(filter);
  }, [filter]);

  const [listCourse, setListCourse] = useState(fakeData);
  const [currentPage, setCurrentPage] = useState(1);
  const [numberPerPage, setnumberPerPage] = useState(6);
  const lastPostIndex = currentPage * numberPerPage;
  const firstPostIndex = lastPostIndex - numberPerPage;
  const currentPost = listCourse.slice(firstPostIndex, lastPostIndex);
  const skill = fakeData.filter((e, index) => {
    return index === fakeData.findIndex((t) => t.skill === e.skill);
  });
  const [skills, setSkills] = useState([...skill]);
  console.log(skill);
  console.log(skills);
  const handleFilterSkills = (e) => {
    const skillsValue = e.target.checked ? e.target.value : "";
    const skillName = e.target.value;
    console.log("ddd", skillsValue);
    const listSkills = fakeData.filter((e) => e.skill === skillsValue);
    console.log(listSkills);
    setListCourse(listSkills);
  };
  const debounce = (func) => {
    let timer;
    return function (...args) {
      const context = this;
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        timer = null;
        func.apply(context, args);
      }, 5000);
    };
  };

  const handleSearch = (e) => {
    let name = e.target.value;
    console.log(name);
    const a = fakeData.filter((e) =>
      e.name.toLowerCase().includes(name.toLowerCase())
    );
    console.log("abcd=>", a);
    setListCourse(a);
    console.log("aaaaaaaaa=>", listCourse);
  };

  const optimised = useCallback(debounce(handleSearch), []);

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
    currentPost,
    fakeData,
    numberPerPage,
    setCurrentPage,
    currentPage,
    debounce,
    optimised,
    skills,
  };
}
