import "./courseList.css";
import Navbar from "../navbar/navbar";
import FilterSkill from "./filterSkill";
import FilterLevel from "./filterLevel";
import ListOfCourse from "./listOfCourse";
import TitleOfCourseList from "./titleOfCourseList";
import Footer from "../footer/footer";
import PaginationOfCourse from "./paginationOfCourse";
import data from "../../fakeAPI/data.json";
import UseLogicCourseList from "./useLogicCourseList";
export default function CourseList() {
  const handleSearch = (e) => {
    let name = e.target.value;
    const listCourse = data.filter((e) =>
      e.name.toLowerCase().includes(name.toLowerCase())
    );
    console.log(listCourse);
    return listCourse;
  };
  var { handleSearchs } = UseLogicCourseList;

  return (
    <div className="courseList">
      <Navbar />
      <TitleOfCourseList />
      <div className="courseListDetails">
        <div className="categoryOfCourse">
          <input
            id="search"
            name="search"
            type="search"
            placeholder="Search Course"
            onChange={handleSearch}
          />
          <div className="skillsAndLevels">
            <FilterSkill />
            <FilterLevel />
          </div>
        </div>
        <ListOfCourse />
      </div>
      <PaginationOfCourse />
      <Footer />
    </div>
  );
}
