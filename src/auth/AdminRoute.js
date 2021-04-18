import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

export default function AdminRoute({ children, ...props }) {
  const { userInfo } = useSelector((state) => state.auth);
//   if (!userInfo) {
//     return <Redirect to="/login" />;
//   }
  if (!userInfo) {
    return <Redirect to={`/login?redirectTo=${props.path}`} />;
  }
  if (userInfo.maLoaiNguoiDung !== "GV") {
    return <Redirect to="/" />;
  }
  return <Route {...props}>{children}</Route>;
}
