import axios from "axios";

//fetch => Get sudents DB
export const getStudents = async () => {
  let result = await fetch("http://localhost:3000/api/students");
  let arrayOfStudents = await result.json();
  return arrayOfStudents;
};

//post => Add new student to DB
export const addStudent = async (student) => {
  await axios.post("http://localhost:3000/api/students", student);
};

//delete => Delete student from DB
export const deleteStudent = async (id) => {
  await axios.delete(`http://localhost:3000/api/students/${id}`);
};
