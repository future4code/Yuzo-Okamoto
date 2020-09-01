import Character from "../src/exercises/model/Character";
import validateCharacter from "../src/exercises/validateCharacter";

describe("Testing function validateCharacter", () => {
  test("Must return false if character's name is empty", () => {
    const char = new Character("", 1500, 100, 200);
    const result = validateCharacter(char);
    expect(result).toBe(false);
  });

  test("Must return true if character's max hit points are 0", () => {
    const char = new Character("John Doe", 0, 100, 200);
    const result = validateCharacter(char);
    expect(result).toBe(false);
  });

  test("Must return false if character's defense is 0", () => {
    const char = new Character("John Doe", 1500, 0, 200);
    const result = validateCharacter(char);
    expect(result).toBe(false);
  });

  test("Must return false if character's attack is 0", () => {
    const char = new Character("John Doe", 1500, 100, 0);
    const result = validateCharacter(char);
    expect(result).toBe(false);
  });

  test("Must return false if character's max hit points, defense or attack are less than 0", () => {
    const char = new Character("John Doe", -1500, -100, -100);
    const result = validateCharacter(char);
    expect(result).toBe(false);
  });

  test("Must return false if character's max hit points, defense or attack are 0", () => {
    const char = new Character("John Doe", 0, 0, 0);
    const result = validateCharacter(char);
    expect(result).toBe(false);
  });

  test("Must return true if character's max hit points, defense or attack are greater than 0", () => {
    const char = new Character("John Doe", 1500, 100, 200);
    const result = validateCharacter(char);
    expect(result).toBe(true);
  });
});
