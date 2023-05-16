import Footer from "../footer/footer";
import Navbar from "../navbar/navbar";
import khoahoc from "../../images/CourseDetail/khoahoc.png";
import avt from "../../images/CourseDetail/avt.png";
import star from "../../images/CourseDetail/star.png";
import "./courseDetail.css";
import AddToCart from "./addToCart";
import LearningAndSkills from "./learningAndSkills";
import VideoTimetables from "./videoTimetables";
import Instructor from "./instructor";
import StudentFeedback from "./studentFeedback";
import { useParams } from "react-router-dom";
import fakeDate from "../../fakeAPI/data.json";
import AddToCartMobile from "./addToCartMobile";
export default function CourseDetail() {
  const { id } = useParams();
  console.log(id);
  const course = fakeDate.find((data) => data.id == id);
  console.log(course);
  return (
    <div>
      <Navbar />
      <div className="courseDetails">
        <div className="bg">
          <img src={khoahoc} alt="khoahoc"></img>
        </div>
        <div className="details">
          <div className="details-title">
            <p id="courseCategory">Course Category</p>
            <h2>{course.name}</h2>
            <p id="lastUpdate">Last update December 1, 2022</p>
            <div className="avt-name">
              <img src={avt} alt="avt"></img>
              <p>Kathryn Murphy</p>
            </div>
            <div className="vote-enrolled">
              <div className="votes">
                <p>4.5 / 5</p>
                <div className="star">
                  <img src={star} alt=""></img>
                  <img src={star} alt=""></img>
                  <img src={star} alt=""></img>
                  <img src={star} alt=""></img>
                  <img src={star} alt=""></img>
                </div>
                <div className="rate">
                  <p>(100)</p>
                </div>
              </div>
              <div className="enrolled">
                <p>100 alreadey enrolled</p>
              </div>
            </div>
            <AddToCartMobile />
            <div className="aboutThisCourse">
              <h4>About this Course</h4>
              <p>
                In this course, I take you from the fundamentals and concepts of
                data modeling all the way through a number of best practices and
                techniques that you’ll need to build data models in your
                organization. You’ll find many examples that clearly demonstrate
                the key concepts and techniques covered throughout the course.
                <br />
                By the end of the course, you’ll be all set to not only put
                these principles to work, but also to make the key data modeling
                and design decisions required by the “art” of data modeling that
                transcend the nuts-and-bolts techniques and design patterns.
                <br />
                Organisations, or groups of organisations, may establish the
                need for master data management when they hold more than one
                copy of data about a business entity. Holding more than one copy
                of this master data inherently means that there is an
                inefficiency in maintaining a “single version of the truth”
                across all copies. Unless people, processes and technology are
                in place to ensure that the data values are kept aligned across
                all copies, it is almost inevitable that different versions of
                information about a business entity will be held.
              </p>
            </div>
            <LearningAndSkills />
            <VideoTimetables />
            <Instructor />
            <StudentFeedback />
          </div>
          <AddToCart />
        </div>
      </div>
      <Footer />
    </div>
  );
}
