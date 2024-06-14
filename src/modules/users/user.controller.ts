import { NextFunction, Request, RequestHandler, Response } from 'express';
import { UserServices } from './user.service';
import sendResponse from '../../app/utils/sendResponse';
import catchAsync from '../../app/utils/catchAsync';

const createStudent = catchAsync(async (req, res, next) => {
  const { password, student: studentData } = req.body;
  const result = await UserServices.createStudentToDb(password, studentData);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Student has been created succesfully',
    data: result,
  });
});

export const userControllers = {
  createStudent,
};

/* import { NextFunction, Request, RequestHandler, Response } from 'express';
import { UserServices } from './user.service';
import sendResponse from '../../app/utils/sendResponse';
import catchAsync from '../../app/utils/catchAsync';

const createStudent= catchAsync(async (req, res, next) => {
  
    const { password, student: studentData } = req.body;

    const result = await UserServices.createStudentToDb(password, studentData);
    // res.status(200).json({
    //   success: true,
    //   message: 'Student has been created succesfully',
    //   data: result,
    // });

    //or

    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: 'Student has been created succesfully',
      data: result,
    });
  // } catch (error) {
  //   // res.status(500).json({
  //   //   success: false,
  //   //   message: 'OPPS!! Student does not created `',
  //   //   data: error,
  //   // });
  //   // or
  //   next(error);
  // }
});

export const userControllers = {
  createStudent,
};
 */
