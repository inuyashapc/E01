import { useCallback, useEffect, useState } from "react";
import fakeData from "../../fakeAPI/data.json";

let a = [];

export default function UseLogicCourseList() {
  const [filter, setFilter] = useState({
    Speaking: false,
    Listening: false,
    Reading: false,
    Writing: false,
    AllLevels: false,
    Beginner: false,
    Intermediate: false,
    Advanced: false,
  });
  useEffect(() => {
    console.log("filter", filter);
    // fakeData.map(filter)
  }, [filter]);

  const [listCourse, setListCourse] = useState(fakeData);
  const [currentPage, setCurrentPage] = useState(1);
  const [numberPerPage, setnumberPerPage] = useState(6);
  const lastPostIndex = currentPage * numberPerPage;
  const firstPostIndex = lastPostIndex - numberPerPage;
  const currentPost = listCourse.slice(firstPostIndex, lastPostIndex);
  const [skills, setSkills] = useState([
    ...fakeData.filter(
      (item, index) => {
        return index === fakeData.findIndex((t) => t.skill === item.skill);
      }
      // ,
      // { checked: false }
    ),
  ]);
  const handleFilterSkills = (e) => {
    console.log("aaaaaaaaaaaa", e);
    const { name, checked } = e.target;
    console.log(e);
    console.log(skills);
    setFilter((prev) => {
      return { ...prev, [name]: checked };
    });
    console.log("abcd", filter);
    console.log(fakeData);

    // const skillsValue = e.target.checked;
    // //  ? e.target.value : "";
    // const skillName = e.target.value;
    // console.log("ddd", skillsValue);
    // const listSkills = fakeData.filter((e) => e.skill === skillName);
    // console.log(listSkills);
    // setListCourse(listSkills);
  };

  useEffect(() => {
    let isFilter = false;

    const filterData = fakeData.filter((item) => {
      if (filter?.Listening && item?.skill === "Listening") {
        isFilter = true;
        return true;
      }

      if (filter?.Reading && item?.skill === "Reading") {
        isFilter = true;
        return true;
      }

      if (filter?.Speaking && item?.skill === "Speaking") {
        isFilter = true;
        return true;
      }

      if (filter?.Writing && item?.skill === "Writing") {
        isFilter = true;
        return true;
      }

      if (
        (filter?.AllLevels || filter?.Beginner) &&
        (item?.level === "Beginner" || item?.level === "allLevels")
      ) {
        isFilter = true;
        return true;
      }

      if (
        (filter?.AllLevels || filter?.Intermediate) &&
        (item?.level === "Intermediate" || item?.level === "allLevels")
      ) {
        isFilter = true;
        return true;
      }

      if (
        (filter?.AllLevels||filter?.Advanced) &&
        (item?.level === "Advanced" || item?.level === "allLevels")
      ) {
        isFilter = true;
        return true;
      }
      return false;
    });

    console.log("filterData", filterData);
    isFilter ? setListCourse(filterData) : setListCourse(fakeData);
  }, [filter]);

  const debounce = (func) => {
    let timer;
    return function (...args) {
      const context = this;
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        timer = null;
        func.apply(context, args);
      }, 300);
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
