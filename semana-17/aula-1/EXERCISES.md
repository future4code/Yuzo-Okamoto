## Exercício 1

### A

Strings são recomendadas por conseguirem armazenar caracteres alfanuméricos, necessários para a criação de IDs mais seguros.

### B

```JS
import { v4 } from 'uuid';

export default class Generator {
  uuid() {
    return v4();
  }
}
```

<hr />

## Exercício 2

### A

1. Knex foi a ORM utilizada para se comunicar com o banco de dados relacional mysql.
2. A função createUser adiciona três colunas (id, email e password) à tabela User.

### B

```SQL
CREATE TABLE Users (
	id VARCHAR(255) PRIMARY KEY,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL
);
```

### C

```JS
public async createUser(
    id: string,
    email: string,
    password: string
  ): Promise<void> {
    try {
      await this.connection
        .insert({ id, email, password })
        .into(UserDatabase.TABLE_NAME);
    } catch (error) {
      console.log(error.sqlMessage);
    }
  }
```

<hr />

## Exercício 3

### A

Força o retorno de uma string, evitando que se retorne undefined.

### B

```JS
interface AuthenticationData {
  id: string;
}

export default class Authenticator {
  private static EXPIRES_IN = '3h';
  public generateToken(input: AuthenticationData): string {
    const token = jwt.sign({ id: input.id }, process.env.JWT_KEY as string, {
      expiresIn: Authenticator.EXPIRES_IN,
    });

    return token;
  }
}
```

## Exercício 4

```JS
export default async function signup(
  req: Request,
  res: Response
): Promise<any> {
  try {
    const authenticator = new Authenticator();
    const generator = new Generator();
    const userDatabase = new UserDatabase();

    const { email, password } = req.body;

    if (!email || !password) {
      res.status(400).send({ message: `'email' and 'password' are required` });
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      res.status(400).send({ message: `Invalid email` });
    }

    if (!/^.{6,}$/.test(password)) {
      res
        .status(400)
        .send({ message: `Invalid password, must contain at least 6 letters` });
    }

    const id = generator.uuid();

    userDatabase.createUser(id, email, password);

    const token = authenticator.generateToken({ id });

    res.status(200).send({token});
  } catch (error) {
    res.status(400).send({ message: error.sqlMessage || error.message });
  }
}
```

<hr />

## Exercício 5

```JS
export default class UserDatabase {
  private connection = knex({
    client: 'mysql',
    connection: {
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT || '3306'),
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    },
  });

  private static TABLE_NAME = 'Users';

  public async createUser(
    id: string,
    email: string,
    password: string
  ): Promise<void> {
    try {
      await this.connection
        .insert({ id, email, password })
        .into(UserDatabase.TABLE_NAME);
    } catch (error) {
      throw new Error(error.message);
    }
  }

  public async getUserByEmail(email: string): Promise<any> {
    try {
      const result = await this.connection(UserDatabase.TABLE_NAME).where({
        email,
      });
      return result[0];
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
```

<hr />

## Exercício 6

```JS
export default async function login(req: Request, res: Response): Promise<any> {
  try {
    const authenticator = new Authenticator();
    const generator = new Generator();
    const userDatabase = new UserDatabase();

    const { email, password } = req.body;

    if (!email || !password) {
      res.status(400).send({ message: `'email' and 'password' are required` });
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      res.status(400).send({ message: `Invalid email` });
    }

    if (!/^.{6,}$/.test(password)) {
      res
        .status(400)
        .send({ message: `Invalid password, must contain at least 6 letters` });
    }

    const userData = await userDatabase.getUserByEmail(email);

    if (userData) {
      if (password === userData.password) {
        const token = authenticator.generateToken({ id: userData.id });
        res.status(200).send({ token });
      }
    }
    throw new Error(`'email' and/or 'password' incorrect`);
  } catch (error) {
    res.status(400).send({ message: error.sqlMessage || error.message });
  }
}
```

<hr />

## Exercício 7

### A

Porque a verificação jwt.verify() pode retornar qualquer coisa.

### B

```JS
export default class Authenticator {
  private static EXPIRES_IN = '3h';

  public generateToken(input: AuthenticationData): string {
    const token = jwt.sign({ id: input.id }, process.env.JWT_KEY as string, {
      expiresIn: Authenticator.EXPIRES_IN,
    });

    return token;
  }

  public getData(token: string): AuthenticationData {
    const payload = jwt.verify(token, process.env.JWT_KEY as string) as any;
    const result = {
      id: payload.id,
    };

    return result;
  }
}
```

## Exercício 8

```JS
export default async function profile(
  req: Request,
  res: Response
): Promise<any> {
  try {
    const authenticator = new Authenticator();
    const userDatabase = new UserDatabase();

    const token = req.headers.authorization as string;

    if (!token) {
      res.status(400).send({ message: `Invalid session` });
    }

    const { id } = authenticator.getData(token);

    const { email } = await userDatabase.getUserById(id);

    res.status(200).send({ id, email });
  } catch (error) {
    res.status(400).send({ message: error.sqlMessage || error.message });
  }
}
```
