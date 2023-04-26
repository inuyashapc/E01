import "./courseList.css";
import khoahoc from "../../images/CourseList/khoahoc.png";
import heart from "../../images/CourseList/heart.png";
import data from "../../fakeAPI/data.json";
import UseLogicCourseList from "./useLogicCourseList";
export default function ListOfCourse({ listCourse }) {
  return (
    <div className="listCourse">
      {listCourse.map((e) => (
        <div className="list" key={e.id}>
          <div className="listCourseTitle">
            <img src={khoahoc} alt="khoahoc"></img>
            <div className="listButton">
              <button>All Levels</button>
              <button>Speaking Skills</button>
              <h3>{e.name}</h3>
              <h1>${e.price}</h1>
            </div>
            <div className="cart">
              <button>Add To Cart</button>
              <img src={heart} alt="heart"></img>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
