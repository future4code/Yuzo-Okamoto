import express from 'express';
import { AddressInfo } from 'net';
import dotenv from 'dotenv';
import { userRouter } from './router/userRouter';

dotenv.config();

const app = express();

app.use(express.json());

const server = app.listen(process.env.PORT || 3333, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running at https://localhost:${address.port}`);
  } else {
    console.log(`Failure upon starting server`);
  }
});

app.use('/', userRouter);
