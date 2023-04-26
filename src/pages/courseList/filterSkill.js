import "./courseList.css";
export default function FilterSkill({ handleFilterSkills }) {
  return (
    <div className="skillAll">
      <h3>Skills</h3>
      <div className="skill">
        <div className="skills">
          <input
            name="Speaking"
            type="checkbox"
            value="Speaking"
            onChange={handleFilterSkills}
          />
          <p>Speaking</p>
        </div>
        <div className="skills">
          <input
            name="Listening"
            type="checkbox"
            value="Listening"
            onChange={handleFilterSkills}
          />
          <p>Listening</p>
        </div>
        <div className="skills">
          <input
            name="Reading"
            type="checkbox"
            value="Reading"
            onChange={handleFilterSkills}
          />
          <p>Reading</p>
        </div>
        <div className="skills">
          <input
            name="Reading"
            type="checkbox"
            value="Reading"
            onChange={handleFilterSkills}
          />
          <p>Writing</p>
        </div>
      </div>
    </div>
  );
}
