import layer11 from "../../images/Layer 11.png";
import vector1 from "../../images/Asset 2 1.png";
import vector2 from "../../images/Asset 1 3.png";
import vector3 from "../../images/community 2.png";
import vector4 from "../../images/Frame 21614 (1).png";
import home1 from "../../images/home1.png";
import home2 from "../../images/home2.png";
import home3 from "../../images/home3.png";
import home4 from "../../images/home4.png";
import learn from "../../images/why-learn 1.png";
import achievement from "../../images/achievement.png";
import h11 from "../../images/h11.png";
import h12 from "../../images/h12.png";
import h13 from "../../images/h13.png";
import h14 from "../../images/h14.png";
import cow from "../../images/cow.png";
import fb from "../../images/facebook.png";
import discord from "../../images/discord.png";
import Navbar from "../navbar/navbar";
import "./homePage.css";
function HomePage() {
  return (
    <>
      <div className="background"></div>
      <div>
        <Navbar />
        <div className="header">
          <h1>Vietnamese Journey with LEVION</h1>
          <p>
            We are ready to help you crafting package branding for your products
            according to you target market. We helped more than 1000 product in
            United States
          </p>
          <div className="image-home">
            <div id="image-home-first">
              <div id="h2">
                <img src={vector1} alt="anh" />
              </div>
              <div id="h3">
                <img src={vector2} alt="anh" />
              </div>
            </div>
            <div id="image-home-second">
              <button>Test Now</button>
              <div id="h1">
                <img src={layer11} alt="anh" />
              </div>
            </div>
            <div id="image-home-third">
              <div id="h4">
                <img src={vector3} alt="anh" />
              </div>
              <div id="h5">
                <img src={vector4} alt="anh" />
              </div>
            </div>
          </div>

          <div className="part-second">
            <div className="part-second-details">
              <h1>
                Learn Vietnamese - one of the world’s most interesting and
                popular languages
              </h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit sit
                sollicitudin eros nisl. Blandit neque accumsan lectus id
                consectetur amet proin. Enim eros habitant euismod porta.
                Sodales sed cras at aliquam commodo mattis pretium.
              </p>
            </div>
            <div className="part-second-image">
              <div>
                <img src={home1} alt="anh" />
                <h4>Travel</h4>
              </div>
              <div>
                <img src={home2} alt="anh" />
                <h4>Work and Live</h4>
              </div>
              <div>
                <img src={home3} alt="anh" />
                <h4>Communication</h4>
              </div>
              <div>
                <img src={home4} alt="anh" />
                <h4>Have Fun</h4>
              </div>
            </div>
          </div>
          <div className="part-third">
            <h1>Why learning Vietnamese with Levion?</h1>
            <div className="part-third-content">
              <div className="part-third-image">
                <img src={learn} alt="anh" />
              </div>
              <div className="part-third-detail">
                <div className="third">
                  <div>
                    <img src={achievement} alt="anh" />
                    <h2>Diverse courses of choice</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Id sodales non interdum eget. Platea et quam magna tortor,
                      dolor.
                    </p>
                  </div>
                  <div>
                    <img src={achievement} alt="anh" />
                    <h2>Diverse courses of choice</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Id sodales non interdum eget. Platea et quam magna tortor,
                      dolor.
                    </p>
                  </div>
                </div>
                <div className="third">
                  <div>
                    <img src={achievement} alt="anh" />
                    <h2>Diverse courses of choice</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Id sodales non interdum eget. Platea et quam magna tortor,
                      dolor.
                    </p>
                  </div>
                  <div>
                    <img src={achievement} alt="anh" />
                    <h2>Diverse courses of choice</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Id sodales non interdum eget. Platea et quam magna tortor,
                      dolor.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="image-home-2">
            <div className="image-home-title">
              <h2>What we offer?</h2>
            </div>
            <div className="image-home-details">
              <div className="contents-details">
                <img src={h11} alt="anh" />
                <h4>Test your level and identify your learning journey.</h4>
              </div>
              <div className="contents-details">
                <img src={h12} alt="anh" />
                <h4>Giant supporting resources</h4>
              </div>
              <div className="contents-details">
                <img src={h13} alt="anh" />
                <h4>Community of Vietnamese-language lovers:</h4>
              </div>
              <div className="contents-details">
                <img src={h14} alt="anh" />
                <h4>Giant supporting resources</h4>
              </div>
            </div>
          </div>
          <div className="part-four">
            <h1>What our learners say?</h1>
            <div className="part-four-detail">
              <div className="part-four-details">
                <div className="fixed-content">
                  <p>
                    As a Vietnamese learner, you might have realized that
                    pronunciation is not an easy task. I had very refreshing
                    pronunciation sessions with the course. It guided me step by
                    step in order to fix and correct several issues with my
                    Vietnamese pronunciations. Highly recommended!
                  </p>
                </div>
                <div className="card-name">
                  <img src={h11} alt="anh" />
                  <div>
                    <h4>Tariq</h4>
                    <p>Master Your Pronunciation Course</p>
                  </div>
                </div>
              </div>
              <div className="part-four-details">
                <div className="fixed-content">
                  <p>
                    It is amazing to see my progress even after so many lessons
                    and each one brings me forward! I am so glad that I found
                    Gwen to accompany me on this way with her patience, high
                    energy, and always having something to ask or say!
                  </p>
                </div>
                <div className="card-name">
                  <img src={h11} alt="anh" />
                  <div>
                    <h4>Konrad S.</h4>
                    <p>Master Your Pronunciation Course</p>
                  </div>
                </div>
              </div>
              <div className="part-four-details">
                <div className="fixed-content">
                  <p>
                    Quyen - The instructor of the pronunciation course is a
                    fantastic teacher. She is very knowledgable. I took the
                    5-hour pronunciation course, now we're working our way
                    through the beginner material and I'm definitely progressing
                    faster than I would have expected.
                  </p>
                </div>

                <div className="card-name">
                  <div className="card-name-images">
                    <img src={h11} alt="anh" />
                  </div>
                  
                  <div>
                    <h4>Gina H.</h4>
                    <p>Master Your Pronunciation Course</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="part-five">
            <div className="part-five-images">
              <img src={cow} alt="anh" />
            </div>

            <div className="part-five-detail">
              <h2>
                Be a part of our
                <br />
                Vietnamese-speaking community
              </h2>
              <p>
                Join Vietnamese&nbsp;learners from around&nbsp;the world to
                become fluent and confident in&nbsp;the community we are
                building!
              </p>
              <div className="button-community">
                <div className="button-redirect">
                  <img src={fb} alt="anh" />
                  <button>Join us on Facebook</button>
                </div>
                <div className="button-redirect">
                  <img src={discord} alt="anh" />
                  <button>Join us on Discord</button>
                </div>
              </div>
            </div>
          </div>
          <div className="part-six">
            <h2>Join our Newsletter</h2>
            <p>
              Get a notification from us on any updates and tips for your
              learning progress.
            </p>
            <input name="email" type="email" placeholder="Enter your email" />
            <button>Subscribe</button>
          </div>
          <div>
            <div>
              <a href="#">Home</a>
              <a href="#">Level Test</a>
              <a href="#">Courses</a>
              <a href="#">Learning Resources</a>
              <a href="#">About us</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default HomePage;
