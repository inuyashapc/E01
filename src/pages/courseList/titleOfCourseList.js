import "./courseList.css";
import i11 from "../../images/CourseList/i11.png";
export default function TitleOfCourseList() {
  return (
    <div className="course-part-1">
      <div className="coursePart1Left">
        <h1>Course</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus risus
          non venenatis dolor nisl tellus habitant aliquam. Dignissim tellus, eu
          eu sed malesuada pharetra aliquam eu.Dignissim tellus, Tellus
          elementum enim faucibus morbi enim fusce:
        </p>
      </div>
      <div className="coursePart1Right">
        <img src={i11} alt="i11"></img>
      </div>
    </div>
  );
}
