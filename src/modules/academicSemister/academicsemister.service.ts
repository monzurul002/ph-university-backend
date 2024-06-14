import { TAcademicSemister } from './academicSemister.interface';
import { AcademicSemisterModel } from './academicSemister.model';

const createAcademicSemisterDb = async (payload: TAcademicSemister) => {
  const result = await AcademicSemisterModel.create(payload);
  return result;
};

export const AcademicSemisterrServices = {
  createAcademicSemisterDb,
};
