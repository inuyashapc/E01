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
  const cart = useSelector(cartList); // no la 1 function de lay tung du lieu
  //trong 1 kho chung(trong phần kho chung chung ta hiện sở hữu 2 field dữ liệu là course và cart)
  //chúng ta sử dụng cartList để lấy dữ liệu liên quan đến cart trong store và dùng cartList để gọi 1 lần
  //vì những lần sau khi mà đổi tên cart thành carts trong kho chung(giá trị khởi tạo initState) thì chúng ta sẽ không cần
  //đổi tên cart carts với nhau nữa nhá
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
                <Link to={`/courseDetail/${e.id}`} id="linh">
                  {e.name}
                </Link>
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
