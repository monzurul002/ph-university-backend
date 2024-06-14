import express, { Application, NextFunction, Request, Response } from 'express';
import cors from 'cors';
import { StudentRoutes } from './modules/student/student.route';
import { UserRoutes } from './modules/users/user.route';
import { globalErrorHandler } from './app/midlewares/globalErrorHandler';
import { notFound } from './app/midlewares/notFound';
import router from './app/routes';

const app: Application = express();

app.use(express.json());
app.use(cors());
// app.use('/api/v1/students', StudentRoutes);
// app.use('/api/v1/users', UserRoutes);
//or

app.use('/api/v1', router);

app.get('/', (req: Request, res: Response) => {
  res.send('Bangladesh');
});

app.use(globalErrorHandler);

//not found
app.use(notFound);
export default app;
