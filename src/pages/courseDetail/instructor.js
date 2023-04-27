import head from "../../images/CourseDetail/head.png";

function Instructor() {
  return (
    <div className="instructor">
      <h5>Instructor</h5>
      <div className="headOfLevionTraining">
        <img src={head} alt="head"></img>
        <div className="titleOfInstructor">
          <h6>Vo Hanh Quyen</h6>
          <p>Head of Levion Traning</p>
        </div>
      </div>
      <p>
        Jose Marcial Portilla has a BS and MS in Mechanical Engineering from
        Santa Clara University and years of experience as a professional
        instructor and trainer for Data Science, Machine Learning and Python
        Programming. He has publications and patents in various fields such as
        microfluidics, materials science, and data science. Over the course of
        his career he has developed a skill set in analyzing data and he hopes
        to use his experience in teaching and data science to help other people
        learn the power of programming, the ability to analyze data, and the
        skills needed to present the data in clear and beautiful visualizations.
        Currently he works as the Head of Data Science for Pierian Training and
        provides in-person data science and python programming training courses
        to employees working at top companies, including General Electric,
        Cigna, The New York Times, Credit Suisse, McKinsey and many more.{" "}
      </p>
    </div>
  );
}

export default Instructor;
