import * as knex from 'knex';
import * as dotenv from 'dotenv';

import * as express from 'express';
import { Request, Response } from 'express';
import { AddressInfo } from 'net';

/* DotEnv and Connection Config */

dotenv.config();

const connection = knex({
  client: 'mysql',
  connection: {
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT || '3306'),
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
});

/* **************************** */

/* Express Config */

const app = express();

app.use(express.json());

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in https://localhost:${address.port}`);
  } else {
    console.log(`Failure upon starting server.`);
  }
});

/* **************************** */

/* API Config */

// Testing Endpoint
app.get('/', testEndpoint);

async function testEndpoint(req: Request, res: Response): Promise<any> {
  try {
    const result = await connection.raw(`
      SELECT * FROM Actor
    `);
    res.status(200).send(result);
  } catch (error) {
    res.status(400).send(error.message);
  }
}

// Search By Name Endpoint
app.get('/search/:name', searchByName);

async function searchByName(req: Request, res: Response): Promise<any> {
  try {
    const result = await connection.raw(`
      SELECT * FROM Actor
      WHERE name LIKE "%${req.params.name}%";
    `);

    res.status(200).send(result[0]);
  } catch (error) {
    res.status(400).send(error.message);
  }
}

// Count By Gender Endpoint
app.get('/count/:gender', countByGender);

async function countByGender(req: Request, res: Response): Promise<any> {
  try {
    const result = await connection.raw(`
      SELECT COUNT(*) AS "quantity", gender FROM Actor
      WHERE gender = "${req.params.gender}"
      GROUP BY gender;
    `);

    res.status(200).send(result[0]);
  } catch (error) {
    res.status(400).send(error.message);
  }
}

// Update Salary by Id
app.put('/edit/salary', editSalaryById);

async function editSalaryById(req: Request, res: Response): Promise<any> {
  try {
    await connection
      .table('Actor')
      .update({ salary: req.body.salary })
      .where({ id: req.body.id });

    res.status(200).send(`Salary updated sucessfuly.`);
  } catch (error) {
    res.status(400).send(error.message);
  }
}

// Delete Actor by Id
app.delete('/delete/actor/', deleteActorById);

async function deleteActorById(req: Request, res: Response): Promise<any> {
  try {
    await connection.table('Actor').del().where({ id: req.body.id });

    res.status(200).send(`Actor deleted succesfuly.`);
  } catch (error) {
    res.status(400).send(error.message);
  }
}

// Calculate Average Salary By Gender
app.get('/average/:gender', averageSalaryByGender);

async function averageSalaryByGender(
  req: Request,
  res: Response
): Promise<any> {
  try {
    const result = await connection
      .table('Actor')
      .avg('salary as average_salary')
      .where({ gender: req.params.gender });

    res.status(200).send(result);
  } catch (error) {
    res.status(400).send(error.message);
  }
}

// Count By Gender Endpoint With Query Params
app.get('/actor?', countByGenderWithQuery);

async function countByGenderWithQuery(
  req: Request,
  res: Response
): Promise<any> {
  try {
    const result = await connection
      .table('Actor')
      .count('gender as quantity')
      .where({ gender: req.query.gender });

    res.status(200).send(result);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
}

// Add Film to Table
app.post('/movie', addFilm);

async function addFilm(req: Request, res: Response): Promise<any> {
  try {
    const newFilm = {
      id: req.body.id,
      title: req.body.title,
      synopsis: req.body.synopsis,
      release_date: new Date(req.body.release_date),
      score: req.body.score,
      playing_limit_date: new Date(req.body.playing_limit_date),
    };

    await connection.table('Movies').insert(newFilm);

    res.status(200).send(`Film added succesfuly.`);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
}

// Get All Films
app.get('/movie/all', getAllMovies);

async function getAllMovies(req: Request, res: Response): Promise<any> {
  try {
    const result = await connection.table('Movies').select().limit(15);

    res.status(200).send(result);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
}

// Search Movie By Query Text
app.get('/movie/search', searchMovieByText);

async function searchMovieByText(req: Request, res: Response): Promise<any> {
  try {
    const result = await connection.raw(`
      SELECT * FROM Movies
      WHERE title LIKE "%${req.query.text}%" OR
        synopsis LIKE "%${req.query.text}%"
    `);

    res.status(200).send(result[0]);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
}

/* **************************** */
