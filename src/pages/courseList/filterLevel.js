import "./courseList.css";
export default function FilterLevel({ handleFilterLevels ,checked}) {
  return (
    <div className="levelAll">
      <h3>Levels</h3>
      <div className="skill">
        <div className="skills">
          <input
            name="allLevels"
            type="checkbox"
            value="allLevels"
            checked={checked}
            onChange={handleFilterLevels}
          />
          <p>All Levels</p>
        </div>
        <div className="skills">
          <input
            name="Beginner"
            type="checkbox"
            value="Beginner"
            checked={checked}
            onChange={handleFilterLevels}
          />
          <p>Beginner</p>
        </div>
        <div className="skills">
          <input
            name="Intermediate"
            type="checkbox"
            value="Intermediate"
            checked={checked}
            onChange={handleFilterLevels}
          />
          <p>Intermediate</p>
        </div>
        <div className="skills">
          <input
            name="Advanced"
            type="checkbox"
            value="Advanced"
            checked={checked}
            onChange={handleFilterLevels}
          />
          <p>Advanced</p>
        </div>
      </div>
    </div>
  );
}
