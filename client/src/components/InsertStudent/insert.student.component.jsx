import React, { useState } from "react";

import { ToastContainer, toast } from "react-toastify";

import { addStudent } from "../../services/students.services";

import "react-toastify/dist/ReactToastify.css";
import "./style.css";

export const Insertstudent = (props) => {
  const [student, setStudent] = useState({
    firstName: "",
    lastName: "",
    age: "",
  });

  const handleAddStudent = async () => {
    let json = student;
    if (!student.firstName) {
      toast.error(" Error! You must enter first name!", {
        position: "top-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else if (!student.lastName) {
      toast.error(" Error! You must enter last name!", {
        position: "top-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else if (!student.age) {
      toast.error(" Error! You must enter age!", {
        position: "top-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      toast.success(" New student was added successfully!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }

    await addStudent(json);
    setStudent({});
    document.querySelectorAll("input").forEach((input) => (input.value = ""));
  };

  return (
    <div className="student-inputs">
      <ToastContainer />
      <input
        className="form-control"
        type="text"
        placeholder="First Name"
        aria-label="default input example"
        onChange={(o) => {
          setStudent({ ...student, firstName: o.target.value });
        }}
      />
      <input
        className="form-control"
        type="text"
        placeholder="Last Name"
        aria-label="default input example"
        onChange={(o) => {
          setStudent({ ...student, lastName: o.target.value });
        }}
      />
      <input
        className="form-control"
        type="number"
        placeholder="Age"
        aria-label="default input example"
        onChange={(o) => {
          setStudent({ ...student, age: o.target.value });
        }}
      />
      <button className="btn btn-secondary add-btn" onClick={handleAddStudent}>
        Add Student
      </button>
    </div>
  );
};
