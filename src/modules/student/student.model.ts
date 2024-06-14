import { Schema, model } from 'mongoose';
import {
  TGardian,
  TLocalGurdian,
  TStudent,
  TUserName,
} from './student.interface';

import validator from 'validator';

const userNameSchema = new Schema<TUserName>({
  firstName: {
    type: String,
    required: [true, 'firstName is reqeuired'],
    maxlength: [12, '  {VALUE} Max not more than 20'],
    trim: true,
    // validate: function (value: string) {
    //   const lowerCasedWord = value.toLocaleLowerCase();
    //   const capitalize =
    //     lowerCasedWord.charAt(0).toUpperCase() + lowerCasedWord.slice(1);
    //   return capitalize === value;
    // },
  },

  middleName: {
    type: String,
    required: [true, 'MidlleName is rqeuired'],
    minlength: [4, 'Minimum 4 character Need'],
  },
  lastName: {
    type: String,
    required: [true, 'lastName is rrrrrrqeuired'],
  },
});

const gurdianSchema = new Schema<TGardian>({
  fatherName: { type: String, required: true },
  fatherOccupation: { type: String, required: true },
  fatherContactName: { type: String, required: true },
  motherName: { type: String, required: true },
  motherOccupation: { type: String, required: true },
  motherContactNumber: { type: String, required: true },
});

const localGurdianSchema = new Schema<TLocalGurdian>({
  name: { type: String, required: true },
  occupation: { type: String, required: true },
  contactNumber: { type: String, required: true },
  address: { type: String, required: true },
});

const studentSchema = new Schema<TStudent>({
  user: {
    type: Schema.Types.ObjectId,
    required: [true, 'User is required'],
    unique: true,
    ref: 'User',
  },
  // password: {
  //   type: String,
  //   required: [true, 'Password is required'],
  //   maxlength: [10, "Password can n't be more than 10"],
  // },
  name: {
    type: userNameSchema,
    required: true,
  },
  gender: {
    type: String,
    enum: {
      values: ['male', 'female', 'other'],
      message: `{VALUE} is not acceptable`,
    },
    required: true,
  },
  dateOfBirth: { type: Date },
  email: {
    type: String,
    required: true,
    validate: {
      validator: (value: string) => validator.isEmail(value),
      message: '{VALUE} is not vadlid',
    },
  },
  contactNumber: {
    type: String,
    required: [true, 'contactnumber is required'],
  },
  emergencyNumber: { type: String, required: true },
  bloodGroup: {
    type: String,
    enum: {
      values: ['A+', 'B+', 'AB-', 'O+'],
      message: 'Bloag group is needed',
    },
  },
  presentAddress: { type: String, required: true },
  permanetAddress: { type: String, required: true },
  gurdian: {
    type: gurdianSchema,
    required: [true, 'Gardia is neededs'],
  },
  localGurdian: {
    type: localGurdianSchema,
    required: true,
  },
  profileImage: { type: String, required: true },
});

export const StudentModel = model<TStudent>('Student', studentSchema);
