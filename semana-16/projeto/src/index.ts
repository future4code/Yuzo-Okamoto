import * as dotenv from 'dotenv';
import * as express from 'express';
import * as knex from 'knex';
import { AddressInfo } from 'net';

import * as routes from './routes';

dotenv.config();

export const connection = knex({
  client: 'mysql',
  connection: {
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT || 3306),
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
});

const app = express();
app.use(express.json());

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running at http://localhost:${address.port}`);
  } else {
    console.log(`Failure upon starting server.`);
  }
});

app.post('/user', routes.createUser);

app.get('/user', routes.getUserById);

app.put('/user/edit', routes.editUserById);
