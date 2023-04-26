import "./courseList.css";
import Navbar from "../navbar/navbar";
import FilterSkill from "./filterSkill";
import FilterLevel from "./filterLevel";
import ListOfCourse from "./listOfCourse";
import TitleOfCourseList from "./titleOfCourseList";
import Footer from "../footer/footer";
import PaginationOfCourse from "./paginationOfCourse";
import UseLogicCourseList from "./useLogicCourseList";
export default function CourseList() {
  const { handleSearch, listCourse, handleFilterSkills, handleFilterLevels } =
    UseLogicCourseList();
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
            <FilterSkill handleFilterSkills={handleFilterSkills} />
            <FilterLevel handleFilterLevels={handleFilterLevels} />
          </div>
        </div>
        <ListOfCourse listCourse={listCourse} />
      </div>
      <PaginationOfCourse />
      <Footer />
    </div>
  );
}
