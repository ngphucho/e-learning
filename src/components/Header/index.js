import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Header() {
  const { userInfo } = useSelector((state) => state.auth);
  return (
    <div>
      <h1 className="jumbotron mb-0">Đây là Header</h1>
      {/* <Link className="px-2" to="/">
        Home
      </Link>
      <Link className="px-2" to="/courses/fullstack">
        Course List
      </Link>
      <Link className="px-2" to="/course/bootcamp">
        Course Detail
      </Link>
      {userInfo ? (
        <span>{userInfo.taiKhoan}</span>
      ) : (
        <Link className="px-2" to="/login">
          Login
        </Link>
      )} */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="px-3" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="px-3" to="/courses/fullstack">
              Course List
            </Link>
          </li>
          <li className="nav-item">
            <Link className="px-3" to="/course/bootcamp">
              Course Detail
            </Link>
          </li>
          <li className="nav-item">
            {userInfo ? (
              <span className="px-3">{userInfo.taiKhoan}</span>
            ) : (
              <Link className="px-3" to="/login">
                Login
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
}
