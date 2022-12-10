import { Routes, Route } from "react-router-dom";

import { StudentList, Insertstudent, PageNotFound } from "./components";
import { MainLayout } from "./Layout/main/main.layout";

import "./App.css";

function App() {
  return (
    <div className="app">
      <MainLayout>
        <Routes>
          <Route path="/" element={<StudentList />}>
            Home Page
          </Route>
          <Route path="addStudent" element={<Insertstudent />}>
            Add Student
          </Route>
          <Route path="*" element={<PageNotFound />}>
            Page Not Found
          </Route>
        </Routes>
      </MainLayout>
    </div>
  );
}

export default App;
