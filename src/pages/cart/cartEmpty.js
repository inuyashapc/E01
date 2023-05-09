import { Link } from "react-router-dom";
import sadFace from "../../images/Cart/sadface.png";
import styles from "../cart/cartPage.module.css";

function CartEmpty() {
  return (
    <div>
      <div className={styles.cart1}>
        <h1>Shopping Cart</h1>
        <img src={sadFace} alt="img"></img>
        <p>Your cart is empty. Keep Going to find a course!</p>
        <Link to="/courseList">
          <button>Go to Courses</button>
        </Link>
      </div>
    </div>
  );
}
export default CartEmpty;
