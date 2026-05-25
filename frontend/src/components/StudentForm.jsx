import { useState, useEffect } from "react";

const StudentForm = ({ addStudent, editingStudent, updateStudentData }) => {
  const [student, setStudent] = useState({
    name: "",
    email: "",
    course: ""
  });

  useEffect(() => {
    if (editingStudent) {
      setStudent(editingStudent);
    }
  }, [editingStudent]);

  const handleChange = (e) => {
    setStudent({
      ...student,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editingStudent) {
      updateStudentData(editingStudent.id, student);
    } else {
      addStudent(student);
    }

    setStudent({
      name: "",
      email: "",
      course: ""
    });
  };

  return (
    <div className="card shadow p-4 mb-4">
      <h3 className="mb-3">
        {editingStudent ? "Update Student" : "Register Student"}
      </h3>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            type="text"
            name="name"
            className="form-control"
            placeholder="Enter Name"
            value={student.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <input
            type="email"
            name="email"
            className="form-control"
            placeholder="Enter Email"
            value={student.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <input
            type="text"
            name="course"
            className="form-control"
            placeholder="Enter Course"
            value={student.course}
            onChange={handleChange}
            required
          />
        </div>

        <button className="btn btn-primary w-100">
          {editingStudent ? "Update" : "Register"}
        </button>
      </form>
    </div>
  );
};

export default StudentForm;