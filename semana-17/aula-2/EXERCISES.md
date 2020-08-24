## Exercício 1

### A

Round: quantas vezes o algoritmo é aplicado ao salt, aumentando o tempo de execução dos ataques. O valor padrão é 10 e o mais popular é 12.
Salt: o hash gerado a partir da execução do algoritmo.

### B e C

```JS
export default class HashManager {
  public async hash(s: string): Promise<string> {
    const rounds = Number(process.env.BCRYPT_COST);
    const salt = await bcrypt.genSalt(rounds);
    const result = await bcrypt.hash(s, salt);

    return result;
  }

  public async compare(s: string, hash: string): Promise<boolean> {
    const result = await bcrypt.compare(s, hash);

    return result;
  }
}
```

<hr />

## Exercício 2

### B

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

    const hashedPassword = await new HashManager().hash(password);

    userDatabase.createUser(id, email, hashedPassword);

    const token = authenticator.generateToken({ id });

    res.status(200).send({ token });
  } catch (error) {
    res.status(400).send({ message: error.sqlMessage || error.message });
  }
}
```

### C

```JS
export default async function login(req: Request, res: Response): Promise<any> {
  try {
    const authenticator = new Authenticator();
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
      const check = await new HashManager().compare(
        password,
        userData.password
      );
      if (check) {
        const token = authenticator.generateToken({ id: userData.id });
        res.status(200).send({ token });
      } else {
        throw new Error(`'email' and/or 'password' incorrect`);
      }
    } else {
      throw new Error(`'email' and/or 'password' incorrect`);
    }
  } catch (error) {
    res.status(400).send({ message: error.sqlMessage || error.message });
  }
}
```

<hr />

## Exercício 3

### A

```SQL
ALTER TABLE Users
ADD role ENUM("normal", "admin") DEFAULT "normal" NOT NULL;
```

<hr />

## Exercício 4

### A

<hr />

## Exercício 5

### A

<hr />

## Exercício 6

### A

<hr />

## Exercício 7

### A
