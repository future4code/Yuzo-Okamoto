## Exercício 1

### A

Altera a tabela Actor, removendo a coluna salary

### B

Altera a tabela Actor, trocando o nome da coluna gender por sex

### C

Altera a tabela Actor, trocando o tipo da coluna gender por VARCHAR(255)

### D

```SQL
ALTER TABLE Actor
CHANGE gender gender VARCHAR(100);
```

<hr />

## Exercício 2

### A

```SQL
UPDATE Actor
SET name = "John Doe", birth_date = "2000-01-15"
WHERE id = "003";
```

### B

```SQL
UPDATE Actor
SET name = "JULIANA PÃES"
WHERE name = "Juliana Paes";

UPDATE Actor
SET name = "Juliana Paes"
WHERE name = "JULIANA PÃES";
```

### C

```SQL
UPDATE Actor
SET
  name = "Fulano",
  salary = 20000,
  birth_date = "1999-12-15",
  gender = "male"
WHERE id = "0111";
```

### D

```
0 row(s) affected Rows matched: 0  Changed: 0  Warnings: 0
Não é retornado erro, porque não existe uma lógica captura de erro.
```

<hr />

## Exercício 3

### A

```SQL
DELETE FROM Actor WHERE name = "Fernanda Montenegro";
```

### B

```SQL
DELETE FROM Actor WHERE salary > 1000000 AND gender = "male";
```

<hr />

## Exercício 4

### A

```SQL
SELECT MAX(salary) FROM Actor;
```

### B

```SQL
SELECT MIN(salary) FROM Actor WHERE gender = "female";
```

### C

```SQL
SELECT COUNT(*) FROM Actor WHERE gender = "female";
```

### D

```SQL
SELECT SUM(salary) FROM Actor;
```

<hr />

## Exercício 5

### A

O GROUP BY permite agrupar os resultados em um formato mais informativo.

### B

```SQL
SELECT id, name FROM Actor
ORDER BY name DESC;
```

### C

```SQL
SELECT * FROM Actor
ORDER BY salary;
```

### D

```SQL
SELECT * FROM Actor
ORDER BY salary
LIMIT 3;
```

### E

```SQL
SELECT AVG(salary), gender FROM Actor
GROUP BY gender;
```

<hr />

## Exercício 6

### A

```SQL
ALTER TABLE Movies
ADD playing_limit_date DATE;
```

### B

```SQL
ALTER TABLE Movies
CHANGE score score FLOAT NOT NULL;
```

### C

```SQL
UPDATE Movies
SET playing_limit_date = "2020-12-12"
WHERE id = "001";

UPDATE Movies
SET playing_limit_date = "2019-12-12"
WHERE id = "002";
```

### D

```SQL
0 row(s) affected Rows matched: 0  Changed: 0  Warnings: 0
Novamente, o mySQL não detecta erros de não encontrado.
```

<hr />

## Exercício 7

### A

```SQL
SELECT COUNT(*) FROM Movies
WHERE score > 7.5;
```

### B

```SQL
SELECT AVG(score) FROM Movies;
```

### C

```SQL
SELECT COUNT(*) FROM Movies
WHERE playing_limit_date >= CURDATE();
```

### D

```SQL
SELECT COUNT(*) FROM Movies
WHERE release_date > CURDATE();
```

### E

```SQL
SELECT MAX(score) FROM Movies;
```

### F

```SQL
SELECT MIN(score) FROM Movies;
```

<hr />

## Exercício 8

### A

```SQL
SELECT * FROM Movies
ORDER BY title;
```

### B

```SQL
SELECT * FROM Movies
ORDER BY title DESC
LIMIT 5;
```

### C

```SQL
SELECT * FROM Movies
WHERE playing_limit_date >= CURDATE()
ORDER BY release_date DESC
LIMIT 3;
```

### D

```SQL
SELECT * FROM Movies
ORDER BY score DESC
LIMIT 3;
```
