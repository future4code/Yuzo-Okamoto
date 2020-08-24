## Exercício 1

### A

Uma chave estrangeira (foreign key) server para relacionar colunas entre as tabelas relacionais.

### B

```JS
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
```

### C

```JS
{
  "message": "insert into `ratings` (`score`, `song_id`) values (6.4, 88) - ER_NO_REFERENCED_ROW_2: Cannot add or update a child row: a foreign key constraint fails (`mello_yuzo_okamoto`.`ratings`, CONSTRAINT `ratings_ibfk_1` FOREIGN KEY (`song_id`) REFERENCES `songs` (`id`))"
}
```

A FOREIGN KEY não bate com nenhuma ID da tabela referenciada, por isso o erro é atirado.

### D

```SQL
ALTER TABLE Movies DROP COLUMN ratings;
```

### E

```
Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`mello_yuzo_okamoto`.`ratings`, CONSTRAINT `ratings_ibfk_1` FOREIGN KEY (`song_id`) REFERENCES `songs` (`id`))
```

Não é possível remover uma linha que possua relações com outra tabela.

<hr />

## Exercício 2

### A

```SQL
CREATE TABLE songs_genres (
	song_id INT,
  genre_id INT,
  FOREIGN KEY (song_id) REFERENCES songs(id),
  FOREIGN KEY (genre_id) REFERENCES genres(id)
);
```

Essa tabela guarda relações N:M, podendo uma música ter como gênero várias categorias (não existe UNIQUE).

### B

```JS
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
```

### C

```JS
{
  "message": "insert into `songs_genres` (`genre_id`, `song_id`) values (5, 70) - ER_NO_REFERENCED_ROW_2: Cannot add or update a child row: a foreign key constraint fails (`mello_yuzo_okamoto`.`songs_genres`, CONSTRAINT `songs_genres_ibfk_1` FOREIGN KEY (`song_id`) REFERENCES `songs` (`id`))"
}
```

A FOREIGN KEY não bate com nenhuma ID da tabela referenciada, por isso o erro é atirado.

### D

```
Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`mello_yuzo_okamoto`.`songs_genres`, CONSTRAINT `songs_genres_ibfk_2` FOREIGN KEY (`genre_id`) REFERENCES `genres` (`id`))
```

Não é possível remover uma linha que possua relações com outra tabela.

<hr />

## Exercício 3

### A e B

```SQL
SELECT song_id, title, score FROM songs
JOIN ratings ON songs.id = ratings.song_id;
```

O operador ON estabelece qual tabela será a direção do JOIN.

<hr />

## Exercício 4
