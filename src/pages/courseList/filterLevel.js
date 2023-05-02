import "./courseList.css";
export default function FilterLevel({ handleFilterLevels, levels }) {
  return (
    <div className="levelAll">
      <h3>Levels</h3>
      <div className="skill">
        {levels.map((e) => (
          <div key={e.id} className="skills">
            <input
              name={e.level}
              type="checkbox"
              value={e.level}
              checked={e.checked}
              onChange={handleFilterLevels}
            />
            <p>{e.level}</p>
          </div>
        ))}
      </div>
    </div>
  );
}