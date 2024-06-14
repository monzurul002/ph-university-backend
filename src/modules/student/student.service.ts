import { TStudent } from './student.interface';
import { StudentModel } from './student.model';

const getAllStudents = async () => {
  const result = await StudentModel.find();
  return result;
};
const getStudentByid = async (id: String) => {
  try {
    const result = await StudentModel.findOne({ id: id });

    return result;
  } catch (error) {
    console.log(error);
  }
};
export const studentService = {
  getAllStudents,
  getStudentByid,
};

/* import { TStudent } from './student.interface';
import { StudentModel } from './student.model';

const createStudentToDb = async (student: TStudent) => {
  try {
    const result = await StudentModel.create(student);
    return result;
  } catch (error) {
    console.log(error);
  }
};

const getAllStudents = async () => {
  const result = await StudentModel.find();
  return result;
};
const getStudentByid = async (id: String) => {
  try {
    const result = await StudentModel.findOne({ id: id });

    return result;
  } catch (error) {
    console.log(error);
  }
};
export const studentService = {
  createStudentToDb,
  getAllStudents,
  getStudentByid,
};
 */
