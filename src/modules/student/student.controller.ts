import { NextFunction, Request, RequestHandler, Response } from 'express';
import { studentService } from './student.service';
import catchAsync from '../../app/utils/catchAsync';

const getStudentById = catchAsync(async (req, res) => {
  const { id } = req.params;

  const result = await studentService.getStudentByid(id);

  res.json({
    success: true,
    message: 'Yeah serarch by Idfdfdfs',
    data1: 'djfh',
    data: result,
  });
});

const getAllStudents: RequestHandler = catchAsync(async (req, res) => {
  const result = await studentService.getAllStudents();
  res.json({
    success: true,
    message: 'All Movie is created successfully',
    data: result,
  });
});

export const StudentController = {
  getAllStudents,
  getStudentById,
};

// import { Request, Response } from 'express';
// import { studentService } from './student.service';

// const createStudent = async (req: Request, res: Response) => {
//   const studentData = req.body.student;
//   try {
//     const result = await studentService.createStudentToDb(studentData);
//     res.json({
//       success: true,
//       message: 'Movie is created successfully',
//       data: result,
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };

// const getAllStudents = async (req: Request, res: Response) => {
//   const result = await studentService.getAllStudents();
//   res.json({
//     success: true,
//     message: 'All Movie is created successfully',
//     data: result,
//   });
// };

// const getStudentById = async (req: Request, res: Response) => {
//   const { id } = req.params;

//   const result = await studentService.getStudentByid(id);

//   res.json({
//     success: true,
//     message: 'Yeah serarch by Idfdfdfs',
//     data1: 'djfh',
//     data: result,
//   });
// };
// export const StudentController = {
//   createStudent,
//   getAllStudents,
//   getStudentById,
// };
