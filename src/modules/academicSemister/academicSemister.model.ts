import { Schema, model } from 'mongoose';
import {
  TAcademicSemister,
  TAcademicSemisterCode,
  TAcademicSemisterName,
  TMonths,
} from './academicSemister.interface';
import {
  AcademicSemisterCode,
  AcademicSemisterName,
  Months,
} from './academicSemister.constants';

const academicSemisterSchema = new Schema<TAcademicSemister>({
  name: {
    type: String,
    enum: AcademicSemisterName,
    required: true,
  },
  year: {
    type: String,
    required: true,
  },
  code: {
    type: String,
    enum: AcademicSemisterCode,
    required: true,
  },
  startMonth: {
    type: String,
    enum: Months,
    required: true,
  },
  endMonth: {
    type: String,
    enum: Months,
    required: true,
  },
});

export const AcademicSemisterModel = model<TAcademicSemister>(
  'AcademicSemister',
  academicSemisterSchema,
);
