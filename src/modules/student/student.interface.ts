import { Model, Types } from 'mongoose';

export type TGardian = {
  fatherName: string;
  fatherOccupation: string;
  fatherContactName: string;
  motherName: string;
  motherOccupation: string;
  motherContactNumber: string;
};
export type TLocalGurdian = {
  name: string;
  occupation: string;
  contactNumber: string;
  address: string;
};
export type TUserName = {
  firstName: string;
  middleName: string;
  lastName: string;
};
export type TStudent = {
  id: string;
  user: Types.ObjectId;
  password: string;
  name: TUserName;
  gender: 'male' | 'female' | 'other';
  dateOfBirth?: Date;
  contactNumber: string;
  email: string;
  emergencyNumber: string;
  bloodGroup?: 'A+' | 'B+' | 'AB-' | 'O+';
  presentAddress: string;
  permanetAddress: string;
  gurdian: TGardian;
  localGurdian: TLocalGurdian;
  profileImage?: string;
};
