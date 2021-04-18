import React from "react";
import { useForm, Controller } from "react-hook-form";
import { FormGroup, Input, Label } from "reactstrap";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { login } from "src/actions/auth";
import { Redirect, useLocation } from "react-router-dom";
import qs from "qs";

// Controlled Component: control tat ca moi thu tren giao dien bang state hoac props
// Uncontrolled Component: control giao dien khong thông qua state, props

// Cả useState va useRef deu dung de luu tru data
// Diem khac nhau giua useState va useRef la khi data bi thay doi thi useRef lam component render lai, con useState thi co

// tao schame validation
const schema = yup.object().shape({
  taiKhoan: yup
    .string()
    .required("Tai khoan khong duoc de trongggg")
    .min(5, "tai khoan phai tu 5 den 20 ki tu")
    .max(20, "tai khoan phai tu 5 den 20 ki tu"),
  matKhau: yup.string().required("Mat khau khong duoc de tronggggg"),
});

export default function LoginPage() {
  //   const inpTaiKhoan = useRef();
  //   const inpMatKhau = useRef();
  const dispatch = useDispatch();
  const location = useLocation();
  const { userInfo, isLoading, error } = useSelector((state) => state.auth);
  const {
    register,
    handleSubmit,
    formState: { errors },
    // sử dụng khi UI component không hỗ trợ
    control,
  } = useForm({ resolver: yupResolver(schema) });

  const handleLogin = (values) => {
    // console.log(values);
    dispatch(login(values));
  };

  if (userInfo) {
    const { redirectTo } = qs.parse(location.search, {
      ignoreQueryPrefix: true,
    });
    if (redirectTo) {
      return <Redirect to={redirectTo} />;
    }
    return <Redirect to="/" />;
  }

  return (
    <form
      style={{ width: "40%", margin: "0 auto" }}
      onSubmit={handleSubmit(handleLogin)}
    >
      <h1>Login page</h1>
      <div className="form-group">
        <label>Tài khoản</label>
        <input
          type="text"
          className="form-control"
          {...register(
            "taiKhoan"
            //    {
            //     required: { value: true, message: "Tài khoản không được để trống" },
            //     minLength: {
            //       value: 5,
            //       message: "Tài khoản phải từ 5 đến 20 kí tự",
            //     },
            //     maxLength: {
            //       value: 20,
            //       message: "Tài khoản phải từ 5 đến 20 kí tự",
            //     },
            //   }
          )}
        />
        {errors.taiKhoan && (
          <div className="alert alert-danger">{errors.taiKhoan.message}</div>
        )}
      </div>
      {/* <div className="form-group">
        <label>Mật khẩu</label>
        <input
          type="password"
          className="form-control"
          {...register("matKhau", { required: true })}
        />
        {errors.matKhau && (
          <div className="alert alert-danger">Mật khẩu không được để trống</div>
        )}
      </div> */}
      {/* <FormGroup>
        <Label>Mật khẩuuu</Label>
        <Input
          type="password"
          {...register("matKhau", {
            required: { value: true, message: "Mật khẩu không được để tróng" },
          })}
        ></Input>
        {errors.matKhau && (
          <div className="alert alert-danger">
            Mậttt khẩu không được để trống
          </div>
        )}
      </FormGroup> */}
      <FormGroup>
        <Label>Mật kkkkkhauar</Label>
        <Controller
          name="matKhau"
          control={control}
          defaultValue=""
          render={({ field }) => {
            return <Input {...field} />;
          }}
          //   rules={{
          //     required: { value: true, message: "Mat khau khong duoc de trong" },
          //   }}
        ></Controller>
        {errors.matKhau && (
          <div className="alert alert-danger">{errors.matKhau.message}</div>
        )}
      </FormGroup>
      {error && <div className="alert alert-danger">{error}</div>}
      <button className="btn btn-success">Đăng nhập</button>
    </form>
  );
}
