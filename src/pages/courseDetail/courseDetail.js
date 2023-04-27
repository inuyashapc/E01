import Footer from "../footer/footer";
import Navbar from "../navbar/navbar";
import khoahoc from "../../images/CourseDetail/khoahoc.png";
import avt from "../../images/CourseDetail/avt.png";
import star from "../../images/CourseDetail/star.png";
import level from "../../images/CourseDetail/level.png";
import duration from "../../images/CourseDetail/duration.png";
import lectures from "../../images/CourseDetail/lectures.png";
import subject from "../../images/CourseDetail/subject.png";
import language from "../../images/CourseDetail/language.png";
import play from "../../images/CourseDetail/play.png";
import play2 from "../../images/CourseDetail/play2.png";
import book from "../../images/CourseDetail/book.png";
import heart from "../../images/CourseDetail/heart.png";
import tick from "../../images/CourseDetail/tick.png";
import chat from "../../images/CourseDetail/chat.png";
import write from "../../images/CourseDetail/write.png";
import listen from "../../images/CourseDetail/listen.png";
import doc from "../../images/CourseDetail/doc.png";
import head from "../../images/CourseDetail/head.png";
import s1 from "../../images/CourseDetail/s1.png";
import s2 from "../../images/CourseDetail/s2.png";
import s3 from "../../images/CourseDetail/s3.png";
import s4 from "../../images/CourseDetail/s4.png";
import s5 from "../../images/CourseDetail/s5.png";
import "./courseDetail.css";

export default function CourseDetail() {
  return (
    <div>
      <Navbar />
      <div className="courseDetails">
        <div className="bg">
          <img src={khoahoc} alt="khoahoc"></img>
        </div>
        <div className="details">
          <div className="details-title">
            <p>Course Category</p>
            <h2>Lorem ipsum dolor sit amet.</h2>
            <p>Last update December 1, 2022</p>
            <div className="avt-name">
              <img src={avt} alt="avt"></img>
              <p>Kathryn Murphy</p>
            </div>
            <div className="vote-enrolled">
              <div className="vote">
                <p>4.5 / 5</p>
                <div className="star">
                  <img src={star} alt=""></img>
                  <img src={star} alt=""></img>
                  <img src={star} alt=""></img>
                  <img src={star} alt=""></img>
                  <img src={star} alt=""></img>
                </div>
                <p>(100)</p>
              </div>
              <div className="enrolled">
                <p>100 alreadey enrolled</p>
              </div>
            </div>
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
            <div className="learningAndSkills">
              <div className="learning">
                <h5>What you'll learn</h5>
                <div className="learning-detail">
                  <div className="learning-details">
                    <img src={tick} alt="tick"></img>
                    <p>
                      Ready to begin working on real-world data modeling
                      projects,
                    </p>
                  </div>
                  <div className="learning-details">
                    <img src={tick} alt="tick"></img>
                    <p>Expanded responsibilities as part of an existing role</p>
                  </div>
                  <div className="learning-details">
                    <img src={tick} alt="tick"></img>
                    <p>Find a new position involving data modeling</p>
                  </div>
                </div>
              </div>
              <div className="skillsIncluded">
                <h5>Skills included</h5>
                <div className="learning-detail">
                  <div className="learning-details">
                    <img src={chat} alt="tick"></img>
                    <p>Speaking Skills</p>
                  </div>
                  <div className="learning-details">
                    <img src={listen} alt="tick"></img>
                    <p>Listening Skills</p>
                  </div>
                  <div className="learning-details">
                    <img src={write} alt="tick"></img>
                    <p>Writing Skills</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="videoTimetables">
              <div>
                <div className="video">
                  <h6>Introduction and Plugins</h6>
                </div>
                <div className="timelines">
                  <div className="videoDetails-preview">
                    <div className="videoDetails-title">
                      <img src={play2} alt="play2"></img>
                      <p>Learning Objectives</p>
                    </div>
                    <div className="preview">
                      <button>Preview</button>
                      <p>13:27</p>
                    </div>
                  </div>
                  <div className="videoDetails">
                    <div className="videoDetails-title">
                      <img src={play2} alt="play2"></img>
                      <p>Learning Objectives</p>
                    </div>
                    <div className="preview">
                      <p>13:27</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="video">
                  <h6>Pronunciation</h6>
                </div>
                <div className="timelines">
                  <div className="videoDetails">
                    <div className="videoDetails-title">
                      <img src={play2} alt="play2"></img>
                      <p>Learning Objectives</p>
                    </div>
                    <div className="preview">
                      <p>13:27</p>
                    </div>
                  </div>
                  <div className="videoDetails">
                    <div className="videoDetails-title">
                      <img src={play2} alt="play2"></img>
                      <p>Learning Objectives</p>
                    </div>
                    <div className="preview">
                      <p>13:27</p>
                    </div>
                  </div>
                  <div className="videoDetails">
                    <div className="videoDetails-title">
                      <img src={play2} alt="play2"></img>
                      <p>Learning Objectives</p>
                    </div>
                    <div className="preview">
                      <p>13:27</p>
                    </div>
                  </div>
                  <div className="videoDetails">
                    <div className="videoDetails-title">
                      <img src={doc} alt="play2"></img>
                      <p>Learning Objectives</p>
                    </div>
                    <div className="preview">
                      <p>13:27</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="video">
                  <h6>Introduction and Plugins</h6>
                </div>
                <div className="timelines">
                  <div className="videoDetails">
                    <div className="videoDetails-title">
                      <img src={play2} alt="play2"></img>
                      <p>Learning Objectives</p>
                    </div>
                    <div className="preview">
                      <p>13:27</p>
                    </div>
                  </div>
                  <div className="videoDetails">
                    <div className="videoDetails-title">
                      <img src={play2} alt="play2"></img>
                      <p>Learning Objectives</p>
                    </div>
                    <div className="preview">
                      <p>13:27</p>
                    </div>
                  </div>
                  <div className="videoDetails">
                    <div className="videoDetails-title">
                      <img src={play2} alt="play2"></img>
                      <p>Learning Objectives</p>
                    </div>
                    <div className="preview">
                      <p>13:27</p>
                    </div>
                  </div>
                  <div className="videoDetails">
                    <div className="videoDetails-title">
                      <img src={doc} alt="play2"></img>
                      <p>Learning Objectives</p>
                    </div>
                    <div className="preview">
                      <p>13:27</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="video">
                  <h6>Introduction and Plugins</h6>
                </div>
                <div className="timelines">
                  <div className="videoDetails">
                    <div className="videoDetails-title">
                      <img src={play2} alt="play2"></img>
                      <p>Learning Objectives</p>
                    </div>
                    <div className="preview">
                      <p>13:27</p>
                    </div>
                  </div>
                  <div className="videoDetails">
                    <div className="videoDetails-title">
                      <img src={play2} alt="play2"></img>
                      <p>Learning Objectives</p>
                    </div>
                    <div className="preview">
                      <p>13:27</p>
                    </div>
                  </div>
                  <div className="videoDetails">
                    <div className="videoDetails-title">
                      <img src={play2} alt="play2"></img>
                      <p>Learning Objectives</p>
                    </div>
                    <div className="preview">
                      <p>13:27</p>
                    </div>
                  </div>
                  <div className="videoDetails">
                    <div className="videoDetails-title">
                      <img src={doc} alt="play2"></img>
                      <p>Learning Objectives</p>
                    </div>
                    <div className="preview">
                      <p>13:27</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="instructor">
              <h5>Instructor</h5>
              <div className="headOfLevionTraining">
                <img src={head} alt="head"></img>
                <div className="titleOfInstructor">
                  <h6>Vo Hanh Quyen</h6>
                  <p>Head of Levion Traning</p>
                </div>
              </div>
              <p>
                Jose Marcial Portilla has a BS and MS in Mechanical Engineering
                from Santa Clara University and years of experience as a
                professional instructor and trainer for Data Science, Machine
                Learning and Python Programming. He has publications and patents
                in various fields such as microfluidics, materials science, and
                data science. Over the course of his career he has developed a
                skill set in analyzing data and he hopes to use his experience
                in teaching and data science to help other people learn the
                power of programming, the ability to analyze data, and the
                skills needed to present the data in clear and beautiful
                visualizations. Currently he works as the Head of Data Science
                for Pierian Training and provides in-person data science and
                python programming training courses to employees working at top
                companies, including General Electric, Cigna, The New York
                Times, Credit Suisse, McKinsey and many more.{" "}
              </p>
            </div>
          </div>
          <div className="part2">
            <img src={khoahoc} alt="khoahoc"></img>
            <div className="categories">
              <div className="category-detail">
                <div className="category-details">
                  <img src={level} alt=""></img>
                  <p>Level</p>
                </div>
                <h2>Beginer</h2>
              </div>
              <div className="category-detail">
                <div className="category-details">
                  <img src={duration} alt=""></img>
                  <p>Duration</p>
                </div>
                <h2>4 hour</h2>
              </div>
              <div className="category-detail">
                <div className="category-details">
                  <img src={lectures} alt=""></img>
                  <p>Lectures</p>
                </div>
                <h2>Vo Hanh Quyen</h2>
              </div>
              <div className="category-detail">
                <div className="category-details">
                  <img src={subject} alt=""></img>
                  <p>Subject</p>
                </div>
                <h2>Pronunciation</h2>
              </div>
              <div className="category-detail">
                <div className="category-details">
                  <img src={language} alt=""></img>
                  <p>Language</p>
                </div>
                <h2>Beginner</h2>
              </div>
              <div className="materialIncludes">
                <h5>Material includes</h5>
                <div className="materialIncludesDetails">
                  <img src={play} alt="play"></img>
                  <p>Video</p>
                </div>
                <div className="materialIncludesDetails">
                  <img src={book} alt="book"></img>
                  <p>Book</p>
                </div>
              </div>
              <div className="addToCart">
                <button>Add To Cart</button>
              </div>
              <div className="buyNow">
                <button>Buy Now</button>
                <img src={heart} alt="heart"></img>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
