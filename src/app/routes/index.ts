import express, { Router } from 'express';
import { StudentRoutes } from '../../modules/student/student.route';
import { UserRoutes } from '../../modules/users/user.route';
import { AcademicSemisterRoutes } from '../../modules/academicSemister/academicSemiter.route';
const router = express.Router();

// router.use('/users', UserRoutes);
// router.use('/students', StudentRoutes);
//or

const moduleRoutes = [
  {
    path: '/users',
    route: UserRoutes,
  },
  {
    path: '/Students',
    route: StudentRoutes,
  },
  {
    path: '/academic-semister',
    route: AcademicSemisterRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
