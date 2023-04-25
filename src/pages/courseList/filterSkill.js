import "./courseList.css";
export default function FilterSkill() {
  return (
    <div className="skillAll">
      <h3>Skills</h3>
      <div className="skill">
        <div className="skills">
          <input type="checkbox" />
          <p>Speaking</p>
        </div>
        <div className="skills">
          <input type="checkbox" />
          <p>Listening</p>
        </div>
        <div className="skills">
          <input type="checkbox" />
          <p>Reading</p>
        </div>
        <div className="skills">
          <input type="checkbox" />
          <p>Writing</p>
        </div>
      </div>
    </div>
  );
}
