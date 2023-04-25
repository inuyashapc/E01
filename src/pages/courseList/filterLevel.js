import "./courseList.css";
export default function FilterLevel() {
  return (
    <div className="levelAll">
      <h3>Levels</h3>
      <div className="skill">
        <div className="skills">
          <input type="checkbox" />
          <p>All skills</p>
        </div>
        <div className="skills">
          <input type="checkbox" />
          <p>Beginner</p>
        </div>
        <div className="skills">
          <input type="checkbox" />
          <p>Intermediate</p>
        </div>
        <div className="skills">
          <input type="checkbox" />
          <p>Advanced</p>
        </div>
      </div>
    </div>
  );
}
