import express from "express";
import dotenv from "dotenv";
import { AddressInfo } from "net";

import userRouter from "./router/userRouter";

dotenv.config();

const app = express();
app.use(express.json());

app.use(userRouter);

const server = app.listen(process.env.SERVER_PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running at https://localhost:${address.port}`);
  } else {
    console.log(`Failure upon starting server`);
  }
});
