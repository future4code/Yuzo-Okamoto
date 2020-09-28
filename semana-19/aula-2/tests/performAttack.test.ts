import Character from "../src/exercises/model/Character";
import { performAttackInversed } from "../src/exercises/performAttack";

describe("Testing function performAttack", () => {
  test("Must return 'Invalid Character' if function validateCharacterMock returns false", () => {
    const validateCharacterMock = jest.fn(() => false);

    const attacker = new Character("John Doe", 500, 50, 250);
    const defender = new Character("Fulano", 500, 50, 0);

    const result = performAttackInversed(
      attacker,
      defender,
      validateCharacterMock
    );

    expect(validateCharacterMock).toHaveBeenCalled();
    expect(validateCharacterMock).toBeCalledTimes(1);
    expect(validateCharacterMock).toHaveReturnedTimes(1);
    expect(result).toBe(`Invalid Character`);
  });

  test("Must return updated defender if function validateCharacterMock returns true", () => {
    const validateCharacterMock = jest.fn(() => true);

    const attacker = new Character("John Doe", 500, 100, 250);
    const defender = new Character("Fulano", 500, 50, 100);

    const result = performAttackInversed(
      attacker,
      defender,
      validateCharacterMock
    ) as Character;

    expect(validateCharacterMock).toHaveBeenCalled();
    expect(validateCharacterMock).toBeCalledTimes(2);
    expect(validateCharacterMock).toHaveReturnedTimes(2);
    expect(result).toBeInstanceOf(Character);
    expect(result.getCurrentHP()).toBe(300);
  });
});
