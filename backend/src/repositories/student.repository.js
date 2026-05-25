import { pool } from "../config/db.js";

export const createStudentRepository = async (student) => {
  const { name, email, course } = student;

  const [result] = await pool.query(
    "INSERT INTO students (name, email, course) VALUES (?, ?, ?)",
    [name, email, course]
  );

  return result;
};

export const getStudentsRepository = async () => {
  const [students] = await pool.query(
    "SELECT * FROM students ORDER BY id DESC"
  );

  return students;
};

export const updateStudentRepository = async (id, student) => {
  const { name, email, course } = student;

  const [result] = await pool.query(
    "UPDATE students SET name=?, email=?, course=? WHERE id=?",
    [name, email, course, id]
  );

  return result;
};

export const deleteStudentRepository = async (id) => {
  const [result] = await pool.query(
    "DELETE FROM students WHERE id=?",
    [id]
  );

  return result;
};