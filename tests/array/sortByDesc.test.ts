import { describe, expect, test } from "bun:test";
import { sortByDesc } from "../../src/array/sortByDesc.util";

describe("sortByDesc", () => {
  test("sortByDesc", () => {
    const users = [
      { name: "John", age: 25 },
      { name: "Jane", age: 30 },
      { name: "Bob", age: 20 },
    ];
    const result = sortByDesc(users, (user) => user.age);
    expect(result[0].age).toBe(30);
    expect(result[1].age).toBe(25);
    expect(result[2].age).toBe(20);
  });
});
