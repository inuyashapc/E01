import "./courseList.css";
import khoahoc from "../../images/CourseList/khoahoc.png";
import heart from "../../images/CourseList/heart.png";
export default function ListOfCourse() {
  return (
    <div>
      <div className="list">
        <div className="listCourseTitle">
          <img src={khoahoc} alt="khoahoc"></img>
          <div className="listButton">
            <button>All Levels</button>
            <button>Speaking Skills</button>
            <h3>Master Your Pronounciation Course</h3>
            <h1>$20.00</h1>
          </div>
          <div className="cart">
            <button>Add To Cart</button>
            <img src={heart} alt="heart"></img>
          </div>
        </div>
      </div>
    </div>
  );
}
