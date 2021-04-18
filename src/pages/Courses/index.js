import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCoursesByCategory } from "src/actions/courses";

export default function Courses() {
  const dispatch = useDispatch();
  const { category } = useParams();
  const { courses, error } = useSelector((state) => state.courses);

  //Được chạy mỗi khi param category thay đổi, để gọi lại API mới tương ứng với category mới
  useEffect(() => {
    //dispatch action goi API lay danh sach khoa hoc
    dispatch(getCoursesByCategory(category));
  }, [category]);

  return (
    <div className="container">
      <h1>Course List By Catagory</h1>
      {error ? (
        <div>{error}</div>
      ) : (
        <div className="row">
          {courses.map((item) => (
            <div
              key={item.maKhoaHoc}
              className="card text-white col-md-4 p-2 border-0"
              style={{ height: "450px", overflow: "hidden" }}
            >
              <img
                className="card-img-top"
                style={{ height: "300px" }}
                src={item.hinhAnh}
                alt={item.biDanh}
              />
              <div className="card-body bg-primary ">
                <h4 className="card-title">{item.maKhoaHoc}</h4>
                <p className="card-text">{item.moTa}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
