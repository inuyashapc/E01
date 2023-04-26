import "./courseList.css";
import trai from "../../images/CourseList/trai.png";
import phai from "../../images/CourseList/phai.png";
export default function PaginationOfCourse({
  totalPosts,
  numberPerPage,
  setCurrentPage,
  currentPage,
}) {
  let pages = [];
  for (let i = 1; i <= Math.ceil(totalPosts / numberPerPage); i++) {
    pages.push(i);
  }
  return (
    <div className="pagination">
      <a>
        <img src={trai}></img>
      </a>
      {pages.map((page, index) => {
        return (
          <a
            key={index}
            onClick={() => setCurrentPage(page)}
            className={page == currentPage ? "active" : ""}
          >
            {page}
          </a>
        );
      })}
      <a>
        <img src={phai}></img>
      </a>
    </div>
  );
}
