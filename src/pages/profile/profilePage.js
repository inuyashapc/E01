import Navbar from "../navbar/navbar";
import avt from "../../images/Profile/avt.png";
import upload from "../../images/Profile/upload.png";
import editImg from "../../images/Profile/edit.png";
import account from "../../images/Profile/account.png";
import call from "../../images/Profile/call.png";
import email from "../../images/Profile/email.png";
import birthday from "../../images/Profile/birthday.png";
import viet from "../../images/Profile/viet.png";
import process from "../../images/Profile/process.png";
import "./profilePage.css";
import { useState } from "react";
import Footer from "../footer/footer";
import Password from "./password";
function ProfilePage() {
  const [toggle, setToggle] = useState(1);
  const [edit, setEdit] = useState(false);
  const [profile, setProfile] = useState({
    name: "Tran Van Nhan",
    phone: "0960 123 456",
    birthday: "1996-05-04",
    email: "huongnt@gmail.com",
  });
  const updateToggle = (id) => {
    setToggle(id);
    console.log(id);
  };
  const handleEdit = () => {
    setEdit(!edit);
  };
  const handleChange = (e) => {
    console.log(e);
    const { name, value } = e.target;
    setProfile((preProfile) => {
      return {
        ...preProfile,
        [name]: value,
      };
    });
    console.log(profile.name);
  };
  // const handleChange = (e) => {
  //   setProfile({ name: e.target.value,
  //     phone: e.target.value });
  // };
  return (
    <div className="profile">
      <Navbar />
      <div className="profilePage">
        <div className="profileDetails">
          <div className="avtUpload">
            <img src={avt} alt="avt"></img>
          </div>
          <div className="buttonUpload">
            <button>
              <img src={upload} alt="upload"></img>
              <h4>Upload image</h4>
            </button>
          </div>
          <div className="userInfomation">
            <div className="userInfomations">
              <p>User Infomation</p>
              <div className="editUser">
                <img
                  onClick={() => handleEdit()}
                  src={editImg}
                  alt="edit"
                ></img>
                {edit === true ? (
                  <p onClick={() => handleEdit()}>Done</p>
                ) : (
                  <p onClick={() => handleEdit()}>Edit</p>
                )}
              </div>
            </div>
            <div className="userInfomationDetails">
              <img src={account} alt="account"></img>
              <div className="UserInfoDetails">
                <p>Họ và tên</p>
                {edit === true ? (
                  <div className="edit">
                    <input
                      type="text"
                      name="name"
                      defaultValue={profile.name}
                      // value={profile.name}
                      onChange={handleChange}
                    />
                  </div>
                ) : (
                  <div className="edit2">
                    <input
                      type="text"
                      name="name"
                      defaultValue={profile.name}
                      onChange={handleChange}
                      disabled
                    />
                  </div>
                )}
              </div>
            </div>
            <div className="userInfomationDetails">
              <img src={call} alt="call"></img>
              <div className="UserInfoDetails">
                <p>Số điện thoại</p>
                {edit === true ? (
                  <div className="edit">
                    <input
                      name="phone"
                      type="text"
                      onChange={handleChange}
                      defaultValue={profile.phone}
                    />
                  </div>
                ) : (
                  <div className="edit2">
                    <input
                      type="text"
                      name="phone"
                      defaultValue={profile.phone}
                      onChange={handleChange}
                      disabled
                    />
                  </div>
                )}
              </div>
            </div>
            <div className="userInfomationDetails">
              <img src={birthday} alt="birthday"></img>
              <div className="UserInfoDetails">
                <p>Ngày sinh</p>
                {edit === true ? (
                  <div className="edit">
                    <input
                      name="birthday"
                      type="date"
                      defaultValue={profile.birthday}
                      onChange={handleChange}
                    />
                  </div>
                ) : (
                  <div className="edit2">
                    <input
                      type="date"
                      name="birthday"
                      defaultValue={profile.birthday}
                      onChange={handleChange}
                      disabled
                    />
                  </div>
                )}
              </div>
            </div>
            <div className="userInfomationDetails">
              <img src={email} alt="email"></img>
              <div className="UserInfoDetails">
                <p>Email</p>
                {edit === true ? (
                  <div className="edit">
                    <input
                      name="email"
                      type="email"
                      defaultValue={profile.email}
                      onChange={handleChange}
                    />
                  </div>
                ) : (
                  <div className="edit2">
                    <input
                      type="email"
                      name="email"
                      defaultValue={profile.email}
                      onChange={handleChange}
                      disabled
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="processCourse">
          <div className="processCourseNavbar">
            <div
              className={toggle === 1 ? "activeTabNavbar" : "tabNavbar"}
              onClick={() => updateToggle(1)}
            >
              <p>My Learning Journey</p>
            </div>
            <div
              className={toggle === 2 ? "activeTabNavbar" : "tabNavbar"}
              onClick={() => updateToggle(2)}
            >
              <p>Password</p>
            </div>
            <div
              className={toggle === 3 ? "activeTabNavbar" : "tabNavbar"}
              onClick={() => updateToggle(3)}
            >
              <p>Billing & Purchases</p>
            </div>
            <div
              className={toggle === 4 ? "activeTabNavbar" : "tabNavbar"}
              onClick={() => updateToggle(4)}
            >
              <p>Whishlist</p>
            </div>
          </div>
          <div className={toggle === 1 ? "show_courseDetail" : "courseDetail"}>
            <div className="borderCourse">
              <div className="course">
                <div className="courseRegisters">
                  <img src={viet} alt="viet"></img>
                  <div className="courseTitle">
                    <h6>Master your pronunciation Course</h6>
                    <p>By Vo Hanh Quyen</p>
                    <div className="levels">
                      <p>All Levels</p>
                    </div>
                    <button>Go to course</button>
                  </div>
                  <div className="process">
                    <img src={process} alt="process"></img>
                    <p>Your Progress</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="borderCourse">
              <div className="course">
                <div className="courseRegisters">
                  <img src={viet} alt="viet"></img>
                  <div className="courseTitle">
                    <h6>Master your pronunciation Course</h6>
                    <p>By Vo Hanh Quyen</p>
                    <div className="levels">
                      <p>All Levels</p>
                    </div>
                    <button>Go to course</button>
                  </div>
                  <div className="process">
                    <img src={process} alt="process"></img>
                    <p>Your Progress</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="borderCourse">
              <div className="course">
                <div className="courseRegisters">
                  <img src={viet} alt="viet"></img>
                  <div className="courseTitle">
                    <h6>Master your pronunciation Course</h6>
                    <p>By Vo Hanh Quyen</p>
                    <div className="levels">
                      <p>All Levels</p>
                    </div>
                    <button>Go to course</button>
                  </div>
                  <div className="process">
                    <img src={process} alt="process"></img>
                    <p>Your Progress</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={toggle === 2 ? "show_courseDetail" : "courseDetail"}>
            <Password />
          </div>
          <div className={toggle === 2 ? "show_courseDetail" : "courseDetail"}>
            <Password />
          </div>
        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}
export default ProfilePage;
