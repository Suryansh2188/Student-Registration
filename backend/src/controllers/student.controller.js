import {
  registerStudentService,
  getStudentsService,
  updateStudentService,
  deleteStudentService
} from "../services/student.service.js";

export const registerStudent = async (req, res) => {
  try {
    const result = await registerStudentService(req.body);

    res.status(201).json({
      success: true,
      message: "Student registered successfully",
      data: result
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

export const getStudents = async (req, res) => {
  try {
    const students = await getStudentsService();

    res.status(200).json({
      success: true,
      data: students
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

export const updateStudent = async (req, res) => {
  try {
    const { id } = req.params;

    await updateStudentService(id, req.body);

    res.status(200).json({
      success: true,
      message: "Student updated successfully"
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

export const deleteStudent = async (req, res) => {
  try {
    const { id } = req.params;

    await deleteStudentService(id);

    res.status(200).json({
      success: true,
      message: "Student deleted successfully"
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};