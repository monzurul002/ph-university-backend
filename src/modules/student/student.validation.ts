import { Types } from 'mongoose';
import { z } from 'zod';

// TGardian schema
const ValidationGardianSchema = z.object({
  fatherName: z.string(),
  fatherOccupation: z.string(),
  fatherContactName: z.string(),
  motherName: z.string(),
  motherOccupation: z.string(),
  motherContactNumber: z.string(),
});

// TLocalGurdian schema
const ValidationLocalGurdianSchema = z.object({
  name: z.string(),
  occupation: z.string(),
  contactNumber: z.string(),
  address: z.string(),
});

// TUserName schema
const ValidationUserNameSchema = z.object({
  firstName: z.string(),
  middleName: z.string(),
  lastName: z.string(),
});

// Student schema
const CreateStudentValidationSchema = z.object({
  body: z.object({
    password: z.string(),
    student: z.object({
      name: ValidationUserNameSchema,
      gender: z.enum(['male', 'female', 'other']),
      dateOfBirth: z.date().optional(),
      contactNumber: z.string(),
      email: z.string().email(),
      emergencyNumber: z.string(),
      bloodGroup: z.enum(['A+', 'B+', 'AB-', 'O+']).optional(),
      presentAddress: z.string(),
      permanetAddress: z.string(),
      gurdian: ValidationGardianSchema,
      localGurdian: ValidationLocalGurdianSchema,
      profileImage: z.string().optional(),
    }),
  }),
});

export const StudentValidations = {
  CreateStudentValidationSchema,
};
