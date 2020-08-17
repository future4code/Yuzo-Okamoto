import * as dotenv from 'dotenv';
import express from 'express';
import { AddressInfo } from 'net';

import signup from './routes/signup';
import login from './routes/login';
import profile from './routes/profile';

dotenv.config();

const app = express();

app.use(express.json());

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running at http://localhost:${address.port}`);
  } else {
    console.log(`Failure upon starting server`);
  }
});

app.post('/signup', signup);

app.post('/login', login);

app.get('/user/profile', profile);
