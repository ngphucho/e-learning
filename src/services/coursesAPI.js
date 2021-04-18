import axiosClient from "./axiosClient";

const coursesAPI = {
  getCourses: () => {
    return axiosClient.get("/QuanLyKhoaHoc/LayDanhSachKhoaHoc");
  },
  getCoursesByCategory: (category) => {
    const params = {
      maDanhMuc: category,
      maNhom: "GP01",
    };
    return axiosClient.get("/QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc", { params });
  },
};

export default coursesAPI;

//Cách dùng
// import coursesAPI from "src/services/coursesAPI"
// const {data} = await coursesAPI.getCourses();
