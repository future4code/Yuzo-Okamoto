import { performPurchase, User } from '../src/exercises/1'

describe("Testing function performPurchase from exercise 1", () => {
  test("Must return the updated user if purchase value is lesser than user's balance", () => {
    const user = new User("John Doe", 1000);
    const output = performPurchase(user, 250);
    expect(output).toEqual(user);
    expect(user.getBalance()).toBe(750);
  });

  test("Must return the updated user if purchase value is equal to user's balance", () => {
    const user = new User("John Doe", 1000);
    const output = performPurchase(user, 1000);
    expect(output).toEqual(user);
    expect(user.getBalance()).toBe(0);
  });

  test("Must return undefined if purchase value is greater than user's balance", () => {
    const user = new User("John Doe", 1000);
    const output = performPurchase(user, 2000);
    expect(output).toBe(undefined);
    expect(user.getBalance()).toBe(1000);
  });
})