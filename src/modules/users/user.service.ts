import config from '../../app/config';
import { TStudent } from '../student/student.interface';
import { StudentModel } from '../student/student.model';
import { TUser } from './user.interface';

import { UserModel } from './user.model';

const createStudentToDb = async (password: string, student: TStudent) => {
  try {
    const user: Partial<TUser> = {};

    // if password dont give

    user.password = password || (config.default_pass as string);

    user.role = 'student';
    user.id = '203001';
    // create a user
    const newUser = await UserModel.create(user);
    //create a student
    if (Object.keys(newUser).length) {
      student.id = newUser.id;
      student.user = newUser._id; //refference id
      const newStudent = await StudentModel.create(student);
      return newStudent;
    }
  } catch (error) {
    console.log(error);
  }
};

export const UserServices = {
  createStudentToDb,
};
