import "./courseList.css";
import Navbar from "../navbar/navbar";
import FilterSkill from "./filterSkill";
import FilterLevel from "./filterLevel";
import ListOfCourse from "./listOfCourse";
import TitleOfCourseList from "./titleOfCourseList";
import Footer from "../footer/footer";
import PaginationOfCourse from "./paginationOfCourse";
import UseLogicCourseList from "./useLogicCourseList";
import filterImg from "../../images/CourseList/Mobile/filter.png";
export default function CourseList() {
  const {
    handleSearch,
    listCourse,
    handleFilterSkills,
    handleFilterLevels,
    fakeData,
    numberPerPage,
    currentPost,
    setCurrentPage,
    currentPage,
    debounce,
    optimised,
    skills,
    levels,
  } = UseLogicCourseList();
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
            onChange={optimised}
          />
          <div className="skillsAndLevels">
            <FilterSkill
              handleFilterSkills={handleFilterSkills}
              skills={skills}
            />
            <FilterLevel
              handleFilterLevels={handleFilterLevels}
              levels={levels}
            />
          </div>
        </div>
        <div className="mobile">
          <div className="listMobile">
            <div className="categoryOfCourseMobile">
              <input
                id="search"
                name="search"
                type="search"
                placeholder="Search Course"
                onChange={optimised}
              />
              <img src={filterImg} alt="filterImg"></img>
            </div>
            <ListOfCourse listCourse={currentPost} />
          </div>
        </div>

        <div className="listPC">
          <ListOfCourse listCourse={currentPost} />
        </div>
      </div>
      <PaginationOfCourse
        totalPosts={listCourse.length}
        numberPerPage={numberPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
      <Footer />
    </div>
  );
}
