import catchAsync from '../../app/utils/catchAsync';
import sendResponse from '../../app/utils/sendResponse';
import { AcademicSemisterrServices } from './academicsemister.service';

const createAcademicSemister = catchAsync(async (req, res) => {
  //const {}

  const result = await AcademicSemisterrServices.createAcademicSemisterDb(
    req.body,
  );

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Academic semister is created succesfullly',
    data: result,
  });
});

export const AcademicSemisterControllers = {
  createAcademicSemister,
};
