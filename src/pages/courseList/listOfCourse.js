import "./courseList.css";
import khoahoc from "../../images/CourseList/khoahoc.png";
import heart from "../../images/CourseList/heart.png";
import data from "../../fakeAPI/data.json";
import UseLogicCourseList from "./useLogicCourseList";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/actions";
import { cartList } from "../redux/selector";
import { Link, Navigate, useParams } from "react-router-dom";
export default function ListOfCourse({ listCourse }) {
  const dispatch = useDispatch();
  const cart = useSelector(cartList); // no la 1 function de lay tung du lieu trong 1 kho chung
  // console.log("aaaaaaa", { cart });
  const handleAddToCart = (e) => {
    console.log(e.id);
    dispatch(
      addToCart({
        id: e.id,
        name: e.name,
        price: e.price,
      })
    );
  };
  return (
    <div className="listCourse">
      {listCourse.map((e) => (
        <div className="list" key={e.id}>
          <div className="listCourseTitle">
            <img src={khoahoc} alt="khoahoc"></img>
            <div className="listButton">
              <button>All Levels</button>
              <button>Speaking Skills</button>
              <h3>
                <Link to={`/courseDetail/${e.id}`} id="linh">{e.name}</Link>
              </h3>
              <h1>${e.price}</h1>
            </div>
            <div className="cart">
              <button onClick={() => handleAddToCart(e)}>Add To Cart</button>
              <img src={heart} alt="heart"></img>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
