import "./courseList.css";
import trai from "../../images/CourseList/trai.png";
import phai from "../../images/CourseList/phai.png";
export default function PaginationOfCourse() {
  return (
    <div className="pagination">
      <a href="#">
        <img src={trai}></img>
      </a>
      <a href="#">1</a>
      <a className="active" href="#">
        2
      </a>
      <a href="#">3</a>
      <a href="#">4</a>
      <a href="#">5</a>
      <a href="#">6</a>
      <a href="#">
        <img src={phai}></img>
      </a>
    </div>
  );
}
