import { Schema, model } from 'mongoose';
import { TUser } from './user.interface';
import bcrypt from 'bcrypt';
import config from '../../app/config';
const UserSchema = new Schema<TUser>(
  {
    id: {
      type: String,
      required: [true, 'id is required'],
    },
    password: {
      type: String,
      required: [true, 'Password is required'],
      minlength: [5, 'Password min length 10'],
    },
    needPasswordChange: {
      type: Boolean,
      default: true,
    },
    role: {
      type: String,
      enum: ['student', 'faculty', 'admin'],
    },
  },
  { timestamps: true },
);

//password hash

UserSchema.pre('save', async function (next) {
  const user = this;
  user.password = await bcrypt.hash(user.password, Number(config.saltRounds));
  next();
});

UserSchema.post('save', function (doc, next) {
  doc.password = '';
  next();
});

export const UserModel = model<TUser>('User', UserSchema);
