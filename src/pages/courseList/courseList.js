import "./courseList.css";
import Navbar from "../navbar/navbar";
import FilterSkill from "./filterSkill";
import FilterLevel from "./filterLevel";
import ListOfCourse from "./listOfCourse";
import TitleOfCourseList from "./titleOfCourseList";
export default function CourseList() {
  return (
    <div className="courseList">
      <Navbar />
      <TitleOfCourseList />
      <div className="courseListDetails">
        <div className="categoryOfCourse">
          <input id="search" type="search" placeholder="Search Course" />
          <div className="skillsAndLevels">
            <FilterSkill />
            <FilterLevel />
          </div>
        </div>
        <ListOfCourse />
      </div>
    </div>
  );
}
