import axios from "axios";

const API = `${process.env.REACT_APP_API_URL}/students`;

export const getStudents = async () => {
  return await axios.get(API);
};

export const registerStudent = async (student) => {
  return await axios.post(API, student);
};

export const updateStudent = async (id, student) => {
  return await axios.put(`${API}/${id}`, student);
};

export const deleteStudent = async (id) => {
  return await axios.delete(`${API}/${id}`);
};