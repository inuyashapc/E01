import "./profilePage.css";
export default function Password() {
  return (
    <div className="password">
      <div className="changePassword">
        <div className="changePasswordDetail">
          <label>Current Password</label>
          <br />
          <input type="text" placeholder="Example"></input>
        </div>
        <div className="changePasswordDetail">
          <label>New Password</label>
          <br />
          <input type="text" placeholder="Example"></input>
        </div>
        <div className="changePasswordDetail">
          <label>Re-type Password</label>
          <br />
          <input type="text" placeholder="Example"></input>
        </div>
        <div className="saveChanges">
          <button>Save changes</button>
        </div>
      </div>
    </div>
  );
}
