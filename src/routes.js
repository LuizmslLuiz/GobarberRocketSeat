import { Router } from 'express';
import User from './app/models/User';

const routes = new Router();

routes.get('/', async (req, res) => {
  const user = await User.create({
    name: 'Luiz Moraes',
    email: 'luizmsl.lm@gmail.com',
    password_hash: '121179',
  });

  return res.json(user);
});

export default routes;
