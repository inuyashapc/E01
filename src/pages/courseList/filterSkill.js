import "./courseList.css";
export default function FilterSkill({ handleFilterSkills }) {
  // const aaaaaaaa = (event) =>{
  //   console.log("e", event.target.checked);
  // }

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
          {/* <input
            type="checkbox"
            onChange={aaaaaaaa}
          /> */}
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
