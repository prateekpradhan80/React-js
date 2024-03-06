import "./form.css";
import logo from "../assets/logo.png";
import { useState } from "react";
export default function Form() {
  const [user, setUser] = useState({
    username: "",
    email: "",
    mob: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState({});
  const [flag, setFlag] = useState(false);
  const [page, setPage] = useState(true);
  function handleChange(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }
  function handleSubmit(e) {
    e.preventDefault();
    const newErr = {};
    if (!user.username) {
      newErr.username = "please enter username";
    } else if (user.username.length < 3 || user.username.length > 10) {
      newErr.username = "username must be between 2 and 10 letters";
    }

    if (user.email == "") {
      newErr.email = "please enter email";
    } else if (user.email.indexOf("@") <= 0) {
      newErr.email = "@ invalid position";
    } else if (
      user.email.charAt(user.email.length - 4) != "." &&
      user.email.charAt(user.email.length - 3) != "."
    ) {
      newErr.email = " invalid email id";
    }
    if (!user.mob) {
      newErr.mob = "please enter mobile number";
    } else if (isNaN(user.mob) || user.mob.length !== 10) {
      newErr.mob = "please enter digit";
    }
    if (user.password == "") {
      newErr.password = "please enter password";
    } else if (user.password.length < 5) {
      newErr.password = " password length must be greater than 5";
    } else if (
      !/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[a-zA-Z\d!@#$%^&*()_+]+$/.test(
        user.password
      )
    ) {
      newErr.password =
        "password must contain digit , letter and a special character";
    } else if (user.confirmPassword == "") {
      newErr.confirmPassword = "write the confirm password";
    } else if (user.confirmPassword !== user.password) {
      newErr.confirmPassword = "incorrect confirm password";
    } else {
      setFlag(true);
    }
    setError(newErr);
  }
  return (
    <>
      <h1 style={{ color: "lightblue", fontFamily: "Courier, monospace" }}>
        {flag ? <p>{user.username} you have registered successfully</p> : ""}
      </h1>
      {flag ? null : (
        <div className="form-container">
          <div className="insta-logo">
            <img src={logo} alt="logo" style={{ width: "200px" }} />
          </div>
          <form className="form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                placeholder="Username"
                onChange={handleChange}
                value={user.username}
                name="username"
                autoComplete="off"
              />{" "}
              <br />
              <span style={{ color: "red" }}> {error.username}</span>
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="Email"
                onChange={handleChange}
                value={user.email}
                name="email"
              />{" "}
              <br />
              <span style={{ color: "red" }}> {error.email}</span>
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="mobile number"
                onChange={handleChange}
                value={user.mob}
                name="mob"
              />{" "}
              <br />
              <span style={{ color: "red" }}> {error.mob}</span>
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="Password"
                onChange={handleChange}
                value={user.password}
                name="password"
              />
              <br />
              <span style={{ color: "red" }}> {error.password}</span>
            </div>
            <div className="form-group">
              <input
                type="password"
                placeholder="Confirm Password"
                onChange={handleChange}
                value={user.confirmPassword}
                name="confirmPassword"
              />
              <br />
              <span style={{ color: "red" }}> {error.confirmPassword}</span>
            </div>
            <button type="submit">Sign Up</button>
          </form>
        </div>
      )}
    </>
  );
}
