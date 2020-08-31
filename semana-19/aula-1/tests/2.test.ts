import { verifyAge, NATIONALITY, User, Casino, LOCATION, Result } from "../src/exercises/2";

describe("Testing function verifyAge from exercise 2", () => {
  const casinoDetroit: Casino = {
    name: "Lucky7",
    location: LOCATION.USA
  }

  const casinoRioDeJaneiro: Casino = {
    name: "SorteSete",
    location: LOCATION.BR
  }

  const result: Result = {
    americans: {
      allowed: [],
      unallowed: []
    },
    brazilians: {
      allowed: [],
      unallowed: []
    }
  }

  test("Brazilian 18 years old must be allowed in a brazilian casino", () => {
    const users: User[] = [
      {
        name: "Fulano",
        age: 18,
        nationality: NATIONALITY.BRAZILIAN
      }
    ]
    const output = verifyAge(casinoRioDeJaneiro, users);
    const expectedOutput = {
      americans: {
        allowed: [],
        unallowed: []
      },
      brazilians: {
        allowed: ["Fulano"],
        unallowed: []
      }
    }
    expect(output).toEqual(expectedOutput);
    expect(output.brazilians.allowed.length).toBeLessThan(2);
    expect(output.brazilians.allowed.length).toBeGreaterThan(0);
  });

  test("18 years old americans must be allowed in a brazilian casino", () => {
    const users: User[] = [
      {
        name: "John Doe",
        age: 18,
        nationality: NATIONALITY.AMERICAN
      }
    ]
    const output = verifyAge(casinoRioDeJaneiro, users);
    const expectedOutput = {
      americans: {
        allowed: ["John Doe"],
        unallowed: []
      },
      brazilians: {
        allowed: [],
        unallowed: []
      }
    }
    expect(output).toEqual(expectedOutput);
    expect(output.americans.unallowed.length).toBe(0);
  });

  test("19 years old must not be allowed in an american casino", () => {
    const users: User[] = [
      {
        name: "John Doe",
        age: 19,
        nationality: NATIONALITY.AMERICAN
      },
      {
        name: "Jane Doe",
        age: 19,
        nationality: NATIONALITY.AMERICAN
      },
      {
        name: "Fulano",
        age: 19,
        nationality: NATIONALITY.BRAZILIAN
      },
      {
        name: "Fulana",
        age: 19,
        nationality: NATIONALITY.BRAZILIAN
      },
    ]
    const output = verifyAge(casinoDetroit, users);
    const expectedOutput = {
      americans: {
        allowed: [],
        unallowed: ["John Doe", "Jane Doe"]
      },
      brazilians: {
        allowed: [],
        unallowed: ["Fulano", "Fulana"]
      }
    }
    expect(output).toEqual(expectedOutput);
    expect(output.americans.unallowed).toContain("John Doe");
    expect(output.brazilians.unallowed).toContain("Fulana");

  });

  test("Only users over 18 years old must be allowed in an american casino", () => {
    const users: User[] = [
      {
        name: "John Doe",
        age: 21,
        nationality: NATIONALITY.AMERICAN
      },
      {
        name: "Jane Doe",
        age: 22,
        nationality: NATIONALITY.AMERICAN
      },
      {
        name: "Fulano",
        age: 19,
        nationality: NATIONALITY.BRAZILIAN
      },
      {
        name: "Fulana",
        age: 19,
        nationality: NATIONALITY.BRAZILIAN
      },
    ]
    const output = verifyAge(casinoDetroit, users);
    const expectedOutput = {
      americans: {
        allowed: ["John Doe", "Jane Doe"],
        unallowed: []
      },
      brazilians: {
        allowed: [],
        unallowed: ["Fulano", "Fulana"]
      }
    }
    expect(output).toEqual(expectedOutput);
    expect(output.brazilians.unallowed.length).toBeGreaterThan(1);
    expect(output.americans.unallowed.length).toBeLessThan(1);
    expect(output.americans.allowed.length).toBe(2);
  });
}); 