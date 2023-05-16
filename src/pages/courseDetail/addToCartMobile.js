import level from "../../images/CourseDetail/level.png";
import duration from "../../images/CourseDetail/duration.png";
import lectures from "../../images/CourseDetail/lectures.png";
import subject from "../../images/CourseDetail/subject.png";
import language from "../../images/CourseDetail/language.png";
import play from "../../images/CourseDetail/play.png";
import book from "../../images/CourseDetail/book.png";
import heart from "../../images/CourseDetail/heart.png";
import khoahoc from "../../images/CourseDetail/khoahoc.png";
export default function AddToCartMobile() {
  return (
    <div className="part2Mobile">
      <div className="khoahoc">
        <img src={khoahoc} alt="khoahoc"></img>
      </div>
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
  );
}
