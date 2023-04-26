import "./courseList.css";
export default function FilterLevel({ handleFilterLevels }) {
  return (
    <div className="levelAll">
      <h3>Levels</h3>
      <div className="skill">
        <div className="skills">
          <input
            name="All levels"
            type="checkbox"
            value="All levels"
            onChange={handleFilterLevels}
          />
          <p>All levels</p>
        </div>
        <div className="skills">
          <input
            name="Beginner"
            type="checkbox"
            value="Beginner"
            onChange={handleFilterLevels}
          />
          <p>Beginner</p>
        </div>
        <div className="skills">
          <input
            name="Intermediate"
            type="checkbox"
            value="Intermediate"
            onChange={handleFilterLevels}
          />
          <p>Intermediate</p>
        </div>
        <div className="skills">
          <input
            name="Advanced"
            type="checkbox"
            value="Advanced"
            onChange={handleFilterLevels}
          />
          <p>Advanced</p>
        </div>
      </div>
    </div>
  );
}
