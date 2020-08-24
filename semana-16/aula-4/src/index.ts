import * as express from 'express';
import { Request, Response } from 'express';

import { AddressInfo } from 'net';

import * as knex from 'knex';

import * as dotenv from 'dotenv';

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

const app = express();

app.use(express.json());

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running at http://localhost:${address.port}`);
  } else {
    console.log(`Failure uppon starting server.`);
  }
});

// GET ALL SONGS
app.get('/songs', getAllSongs);

async function getAllSongs(req: Request, res: Response): Promise<any> {
  try {
    const result = await connection('songs');

    res.status(200).send(result);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
}

// GET ALL RATINGS
app.get('/ratings', getAllRatings);

async function getAllRatings(req: Request, res: Response): Promise<any> {
  try {
    const result = await connection('ratings');

    res.status(200).send(result);
  } catch (error) {
    res.status(400).send({ message: error.messsage });
  }
}

// GET ALL GENRES
app.get('/genres', getAllGenres);

async function getAllGenres(req: Request, res: Response): Promise<any> {
  try {
    const result = await connection('genres');

    res.status(200).send(result);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
}

// ADD A RATING TO A SONG BY ID
app.post('/rate', rateSongById);

async function rateSongById(req: Request, res: Response): Promise<any> {
  try {
    const { song_id, score } = req.body;
    await connection('ratings').insert({ song_id, score });

    res.status(200).send(`Song rated successfuly.`);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
}

// ADD A GENRE TO A SONG BY IDs
app.post('/genres/add', addGenreById);

async function addGenreById(req: Request, res: Response): Promise<any> {
  try {
    const { song_id, genre_id } = req.body;
    await connection('songs_genres').insert({ song_id, genre_id });

    res.status(200).send(`Genre added to Song succesfuly.`);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
}
