import tick from "../../images/CourseDetail/tick.png";
import chat from "../../images/CourseDetail/chat.png";
import write from "../../images/CourseDetail/write.png";
import listen from "../../images/CourseDetail/listen.png";

function LearningAndSkills() {
  return (
    <div className="learningAndSkills">
      <div className="learning">
        <h5>What you'll learn</h5>
        <div className="learning-detail">
          <div className="learning-details">
            <img src={tick} alt="tick"></img>
            <p>Ready to begin working on real-world data modeling projects,</p>
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
  );
}

export default LearningAndSkills;
