import { Carousel } from "react-responsive-carousel";
import achievement from "../../images/achievement.png";

export default function CarouselPart1() {
  return (
    <div className="carouselPart1">
      <Carousel>
        <div className="third-details">
          <div className="imgmau">
            <img src={achievement} alt="anh" />
          </div>

          <h2>Diverse courses of choice</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id sodales
            non interdum eget. Platea et quam magna tortor, dolor.
          </p>
        </div>
        <div className="third-details">
          <div className="imgmau">
            <img src={achievement} alt="anh" />
          </div>
          <h2>Diverse courses of choice</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id sodales
            non interdum eget. Platea et quam magna tortor, dolor.
          </p>
        </div>
        <div className="third-details">
          <div className="imgmau">
            <img src={achievement} alt="anh" />
          </div>
          <h2>Diverse courses of choice</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id sodales
            non interdum eget. Platea et quam magna tortor, dolor.
          </p>
        </div>
        <div className="third-details">
          <div className="imgmau">
            <img src={achievement} alt="anh" />
          </div>
          <h2>Diverse courses of choice</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id sodales
            non interdum eget. Platea et quam magna tortor, dolor.
          </p>
        </div>
      </Carousel>
    </div>
  );
}
