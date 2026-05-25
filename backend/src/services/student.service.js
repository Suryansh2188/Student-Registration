import {
  createStudentRepository,
  getStudentsRepository,
  updateStudentRepository,
  deleteStudentRepository
} from "../repositories/student.repository.js";

export const registerStudentService = async (student) => {
  return await createStudentRepository(student);
};

export const getStudentsService = async () => {
  return await getStudentsRepository();
};

export const updateStudentService = async (id, student) => {
  return await updateStudentRepository(id, student);
};

export const deleteStudentService = async (id) => {
  return await deleteStudentRepository(id);
};