import express, { Request, Response } from "express";
import * as dotenv from "dotenv";
import cors from "cors";

import { StudentDB } from "./database/student.db";
import { IStudent } from "./database/models/student.model";

const app = express();
dotenv.config();
app.use(express.json());
app.use(cors());

app.get("/api/students", function (req: Request, res: Response) {
  let students = StudentDB;
  res.send(students);
});

app.post("/api/students", function (req: Request, res: Response) {
  if (!req.body.firstName || !req.body.lastName || !req.body.age) {
    res.status(400).send({ msg: "Invalid Inputs" });
    return;
  }
  let student: IStudent = {
    id: StudentDB.length + 1,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    age: req.body.age,
  };

  StudentDB.push(student);
  res.send(student);
});

app.delete("/api/students/:id", function (req: Request, res: Response) {
  let student = StudentDB.find((s) => s.id === parseInt(req.params.id));
  if (student !== undefined) {
    let index = StudentDB.indexOf(student);
    StudentDB.splice(index, 1);
  }

  res.send();
});

app.listen(process.env.PORT, () => {
  console.log(`Server listening on port ${process.env.PORT}`);
});
