import style from "../cart/cartPage.module.css";
import imgCourse from "../../images/Cart/imgCourse.png";
export function CartProduct({ prop }) {
  return (
    <div className={style.courses}>
      <div className={style.course}>
        <img src={imgCourse} alt="imgCourse"></img>
        <div className={style.courseDetail}>
          <h6>{prop.name}</h6>
          <button>All Levels</button>
          <button>Speaking Skill</button>
        </div>
        <div className={style.fee}>
          <h6>${prop.price}</h6>
          <p>$84.99</p>
        </div>
        <p>Remove</p>
      </div>
    </div>
  );
}
