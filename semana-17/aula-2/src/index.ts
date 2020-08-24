import * as dotenv from 'dotenv';
import express from 'express';
import { AddressInfo } from 'net';

import signup from './routes/signup';
import login from './routes/login';
import userProfile from './routes/userProfile';
import deleteUser from './routes/deleteUser';
import selfProfile from './routes/selfProfile';

dotenv.config();

const app = express();

app.use(express.json());

app.post('/signup', signup);

app.post('/login', login);

app.get('/user/profile', userProfile);

app.delete('/user/:id', deleteUser);

app.get('/user/:id', selfProfile);

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running at http://localhost:${address.port}`);
  } else {
    console.log(`Failure upon starting server`);
  }
});
