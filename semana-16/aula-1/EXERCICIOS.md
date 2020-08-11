## Semana 16 - Aula 01

## Exercício 1

### A

- VARCHAR(x) para indicar que o campo armazenará strings com até x letras.

- DATE para indicar que o campo armazenará uma data no formato AAAA/MM/DD.

- NOT NULL para indicar que o campo deve ser preenchido.

- PRIMARY KEY para indicar que o campo será uma chave primária (identificador).

### B

- SHOW DATABASES: mostra as databases existentes na SCHEMA.

- SHOW TABLES: mostra as tabelas existentes em cada database da SCHEMA.

### C

- DESCRIBE Actor: mostra a estrutura da tabela, com o nome e as propriedades de cada campo.

<hr />

## Exercício 2

### A

```SQL
INSERT INTO Actor(id, name, salary, birth_date, gender)
VALUES(
	"002",
  "Glória Pires",
  1200000,
  "1963-08-23",
  "female"
);
```

### B

```
Error Code: 1062. Duplicate entry '002' for key 'PRIMARY'
Código de erro: 1062. Entrada duplicada '002' para chave 'PRIMÁRIA'

Esse erro aconteceu porque um valor da chave primária não pode ser repetido.
```

### C

```SQL
Error Code: 1136. Column count doesn't match value count at row 1
Código de erro: 1136. Número de colunas não corresponde ao valor da linha 1

Esse erro aconteceu porque faltaram as propriedades birth_date e gender
nos parâmetros da primeira linha

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "003",
  "Fernanda Montenegro",
  300000,
  "1929-10-19",
  "female"
);
```

### D

```SQL
Error Code: 1364. Field 'name' doesn't have a default value
Código de erro: 1364. Campo 'name' não possui um valor padrão

Esse erro aconteceu porque o campo 'name' não pode ser NULL e
não foi definido um valor inicial para ele

INSERT INTO Actor (id, salary, birth_date, gender, name)
VALUES(
  "004",
  400000,
  "1949-04-18",
  "male",
  "John Doe"
);
```

### E

```SQL
Error Code: 1292. Incorrect date value: '1950' for column 'birth_date' at row 1
Código de erro: 1292. Valor incorreto de data: '1950' para coluna 'birth_date' na linha 1

Esse erro aconteceu porque o campo 'birth_date' espera que o formato 'AAAA-MM-DD' seja uma string

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005",
  "Juliana Paes",
  719333.33,
  "1979-03-26",
  "female"
);
```

### F

```SQL
INSERT INTO Actor
VALUES(
  "006",
  "Fulana Lana",
  12345,
  "1999-08-21",
  "female"
);

INSERT INTO Actor
VALUES(
  "007",
  "Ciclano Nano",
  54321,
  "1989-05-16",
  "male"
);
```

<hr />

## Exercício 3

### A

```SQL
SELECT * FROM Actor WHERE gender = "female";
```

### B

```SQL
SELECT salary FROM Actor WHERE name = "Tony Ramos";
```

### C

```SQL
SELECT * FROM Actor Where gender = "invalid";

É retornado NULL, porque não existe gender = "invalid" na tabela Actor
```

### D

```SQL
SELECT id, name, salary FROM Actor WHERE salary > 500000;
```

### E

```SQL
SELECT id, name FROM Actor WHERE id = "002";
```

<hr />

## Exercício 4

### A

Selecione todos os dados da tabela Actor
Onde a propriedade name seja iniciada por "A" ou "J", E
Onde o salário seja maior que 300000

### B

```SQL
SELECT * FROM Actor WHERE name NOT LIKE "A%" AND salary > 350000;
```

### C

```SQL
SELECT * FROM Actor WHERE name LIKE "%g%" OR name LIKE "%G%";
```

### D

```SQL
SELECT * FROM Actor
WHERE (
	(
		(name LIKE "%a%" OR name LIKE "%A%") OR
    (name LIKE "%g%" OR name LIKE "%G%")
  )
  AND (salary BETWEEN 350000 AND 900000)
);
```

<hr />

## Exercício 5

### A

```SQL
CREATE TABLE Movies (
  id VARCHAR(255) PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  synopsis TEXT NOT NULL,
  release_date DATE NOT NULL,
  score TINYINT NOT NULL
);

O tipo TEXT permite armazenar campos de texto mais longos.
```

### B

```SQL
INSERT INTO Movies (id, title, synopsis, release_date, score)
VALUES (
  "001",
  "Se Eu Fosse Você",
  "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
  "2006-01-06",
  7
);
```

### C

```SQL
INSERT INTO Movies (id, title, synopsis, release_date, score)
VALUES (
  "002",
  "Doce de mãe",
  "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
  "2012-12-27",
  10
);
```

### D

```SQL
INSERT INTO Movies
VALUES (
  "003",
  "Dona Flor e Seus Dois Maridos",
  "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
  "2017-11-12",
  8
);
```

### E

```SQL
INSERT INTO Movies
VALUES (
  "004",
  "Tropa de Elite",
  "Em 1997, no Rio de Janeiro, o Capitão Nascimento tem que encontrar um substituto para sua posição enquanto tenta derrubar traficantes e criminosos antes da visita do Papa.",
  "2007-10-12",
  8
);
```

<hr />

## Exercício 6

### A

```SQL
SELECT id, title, score FROM Movies WHERE id = "002";
```

### B

```SQL
SELECT * FROM Movies WHERE title = "Tropa de Elite";
```

### C

```SQL
SELECT id, title, synopsis FROM Movies WHERE score >= 7;
```

<hr />

## Exercício 7

### A

```SQL
SELECT * FROM Movies WHERE title LIKE "%vida%";
```

### B

```SQL
SELECT * FROM Movies WHERE
  title LIKE "%rio%" OR synopsis LIKE "%rio%";
```

### C

```SQL
SELECT * FROM Movies WHERE release_date <= "2020-08-10";
```

### D

```SQL
SELECT * FROM Movies WHERE
  release_date <= "2020-08-10" AND
  score >= 7 AND
  (title LIKE "%vida%" OR synopsis LIKE "%vida%");
```
