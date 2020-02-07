import { Router } from 'express';
import multer from 'multer';

import multerConfig from './config/multer';

import UserControler from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';

import authMiddlewares from './app/middlewares/auth';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/users', UserControler.store);
routes.post('/sessions', SessionController.store);

routes.use(authMiddlewares);

routes.put('/users', UserControler.update);
routes.post('/files', upload.single('file'), (req, res) => {
  return res.json({ ok: true });
})
export default routes;
