import Navbar from "../navbar/navbar";
import Footer from "../footer/footer";
import style from "../cart/cartPage.module.css";
import imgCourse from "../../images/Cart/imgCourse.png";
import imgCourseMobile from "../../images/Cart/Mobile/imgCourse.png";
import { useDispatch, useSelector } from "react-redux";
import { cartList } from "../redux/selector";
import { removeFromCart } from "../redux/actions";
import CartEmpty from "./cartEmpty";
function CartPage() {
  const dispatch = useDispatch();
  const handleRemove = (course) => {
    console.log(course);
    dispatch(
      removeFromCart({
        id: course.id,
      })
    );
  };
  const cart = useSelector(cartList); // no la 1 function de lay tung du lieu trong 1 kho chung
  let total = 0;
  cart.map((e) => (total += e.price));
  const discount = 20;
  return (
    <div>
      <Navbar />
      {cart.length === 0 ? (
        <CartEmpty />
      ) : (
        <div className={style.cart}>
          <div className={style.title}>
            <h3>Shopping Cart</h3>
          </div>
          <div className={style.cart_details}>
            <div className={style.yourCart}>
              <h5>Your Cart</h5>
              {cart.map((course) => (
                <div key={course.id} className={style.courses}>
                  <div className={style.course}>
                    <img src={imgCourse} alt="imgCourse"></img>
                    <div className={style.courseDetail}>
                      <h6>{course.name}</h6>
                      <button>All Levels</button>
                      <button>Speaking Skill</button>
                    </div>
                    <div className={style.fee}>
                      <h6>$20.00</h6>
                      <p>$84.99</p>
                    </div>
                    <div className={style.remove}>
                      <p onClick={() => handleRemove(course)}>Remove</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className={style.yourCartMobile}>
              <h5>Your Cart</h5>
              {cart.map((course) => (
                <div key={course.id} className={style.courseDiv}>
                  <div className={style.courses}>
                    <div className={style.course}>
                      <img src={imgCourseMobile} alt="imgCourse"></img>
                      <div className={style.listCourse}>
                        <div className={style.courseDetail}>
                          <h6>{course.name}</h6>
                          <div className={style.category}>
                            <button>All Levels</button>
                            <button>Speaking Skill</button>
                          </div>
                        </div>
                        <div className={style.fee}>
                          <h6>$20.00</h6>
                          <p>$84.99</p>
                        </div>
                        <div className={style.remove}>
                          <p onClick={() => handleRemove(course)}>Remove</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className={style.coupon}>
              <div className={style.couponDiv}>
                <div className={style.couponDiscount}>
                  <h5>Coupon Discount</h5>
                  <div className={style.couponCode}>
                    <label>Couple Code</label>
                    <div className={style.couponApply}>
                      <input type="search" placeholder="Example"></input>
                      <button>Apply</button>
                    </div>
                  </div>
                </div>
              </div>

              <div className={style.couponDetail}>
                <div className={style.price}>
                  <p>Orginal Price</p>
                  <h6>${total}</h6>
                </div>
                <div className={style.discountDiv}>
                  <div className={style.discount}>
                    <p>Discount</p>
                    <h6>-${discount}</h6>
                  </div>
                </div>
                <div className={style.total}>
                  <p>Total</p>
                  <h6>${total - discount}</h6>
                </div>
                <div className={style.checkout}>
                  <button>Check Out</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
export default CartPage;
