import { Router } from 'express';
import User from './app/models/User';

const routes = new Router();

routes.get('/', async (req, res) => {
  const user = await User.create({
    name: "Anderson",
    email: "anderson@lopscorp.com",
    password_hash: "32323323",
  })
  return res.json(user);
})

export default routes;
