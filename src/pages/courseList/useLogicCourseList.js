import data from "../../fakeAPI/data.json";
export default function UseLogicCourseList() {
  const handleSearch = (e) => {
    let name = e.target.value;
    const listCourse = data.filter((e) =>
      e.name.toLowerCase().includes(name.toLowerCase())
    );
    console.log(listCourse);
    return listCourse;
  };
  return{
    handleSearch
  }
}
