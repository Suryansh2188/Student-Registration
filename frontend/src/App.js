import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import StudentForm from "./components/StudentForm";
import StudentList from "./components/StudentList";

import {
  getStudents,
  registerStudent,
  updateStudent,
  deleteStudent
} from "./services/studentService";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const [students, setStudents] = useState([]);
  const [editingStudent, setEditingStudent] = useState(null);

  const fetchStudents = async () => {
    const response = await getStudents();
    setStudents(response.data.data);
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  const addStudent = async (student) => {
    await registerStudent(student);
    fetchStudents();
  };

  const updateStudentData = async (id, student) => {
    await updateStudent(id, student);
    setEditingStudent(null);
    fetchStudents();
  };

  const handleDelete = async (id) => {
    await deleteStudent(id);
    fetchStudents();
  };

  const handleEdit = (student) => {
    setEditingStudent(student);
  };

  return (
    <>
      <Navbar />

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-5">
            <StudentForm
              addStudent={addStudent}
              editingStudent={editingStudent}
              updateStudentData={updateStudentData}
            />
          </div>

          <div className="col-md-7">
            <StudentList
              students={students}
              handleEdit={handleEdit}
              handleDelete={handleDelete}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;