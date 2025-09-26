import { describe, expect, test } from "bun:test";
import { sortBy } from "../../src/array/sortBy.util";

describe("sortBy", () => {
  test("sortBy", () => {
    const users = [
      { name: "John", age: 25 },
      { name: "Jane", age: 30 },
      { name: "Bob", age: 20 },
    ];
    const result = sortBy(users, (user) => user.age);
    expect(result[0].age).toBe(20);
    expect(result[1].age).toBe(25);
    expect(result[2].age).toBe(30);
  });
});
