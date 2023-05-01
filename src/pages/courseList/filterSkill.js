import "./courseList.css";
export default function FilterSkill({ handleFilterSkills, skills }) {
  return (
    <div className="skillAll">
      <h3>Skills</h3>
      <div className="skill">
        {skills.map((e) => (
          <div className="skills" key={e.id}>
            <input
              name={e.skill}
              type="checkbox"
              value={e.skill}
              checked={e.checked}
              onChange={handleFilterSkills}
            />
            <p>{e.skill}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
