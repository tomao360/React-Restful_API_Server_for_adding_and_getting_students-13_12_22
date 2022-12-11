import React, { useEffect, useState } from "react";
import { RingLoader } from "react-spinners";

import { getStudents } from "../../services/students.services";
import { StudentRow } from "./../StudentRow/student.row.component";
import { deleteStudent } from "../../services/students.services";

import "./style.css";

export const StudentList = (props) => {
  const [sutdentsArr, setStudentsArr] = useState(undefined);

  const initComponent = async () => {
    let students = await getStudents();
    setStudentsArr(students);
  };

  useEffect(() => {
    initComponent();
  }, []);

  const handleDelete = async (id) => {
    await deleteStudent(id);
    let newStudentsArr = sutdentsArr.filter((s) => s.id !== id);
    setStudentsArr(newStudentsArr);
    console.log("deleteStudent", id);
  };

  return (
    <div className="student-table">
      <table className="table">
        <thead className="table-light">
          <tr>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Age</th>
            <th scope="col">Operation</th>
          </tr>
        </thead>
        {sutdentsArr !== undefined ? (
          sutdentsArr.map((s) => {
            let { id, firstName, lastName, age } = s;
            return (
              <tbody>
                <tr>
                  <StudentRow
                    id={id}
                    firstName={firstName}
                    lastName={lastName}
                    age={age}
                    handleDelete={handleDelete}
                  />
                </tr>
              </tbody>
            );
          })
        ) : (
          <td colSpan={4}>
            <RingLoader className="the-spinner" color="#4eb8b6" />
          </td>
        )}
      </table>
    </div>
  );
};
