import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/login/LoginPage";
import RegisterPage from "./pages/register/RegisterPage";
import ForgotpasswordPage from "./Components/Forgotpassword";
import AboutUs from "./pages/aboutUs/AboutUs";
import "./App.css";
import HomePage from "./pages/home/homePage";
import CourseList from "./pages/courseList/courseList";
import CourseDetail from "./pages/courseDetail/courseDetail";
//<LoginPage /> nó là react element
//LoginPage là react component
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/forgot" element={<ForgotpasswordPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/courseList" element={<CourseList />} />
        <Route path="/courseDetail" element={<CourseDetail />} />
      </Routes>
    </div>
  );
}

export default App;
