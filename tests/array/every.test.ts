import { describe, expect, test } from "bun:test";
import { every } from "../../src/array/every.util";

describe("every", () => {
  test("returns true if all elements pass predicate", () => {
    expect(every([2, 4, 6], (n) => n % 2 === 0)).toBe(true);
    expect(every([2, 4, 6, 8], (n) => n > 1)).toBe(true);
    expect(every(["a", "b", "c"], (s) => s.length === 1)).toBe(true);
  });

  test("returns false if any element fails predicate", () => {
    expect(every([2, 3, 6], (n) => n % 2 === 0)).toBe(false);
    expect(every([1, 2, 6], (n) => n < 5)).toBe(false);
    expect(every(["a", "bb", "c"], (s) => s.length === 1)).toBe(false);
  });

  test("returns true for empty arrays", () => {
    expect(every([], () => true)).toBe(true);
    expect(every([], () => false)).toBe(true);
  });

  test("works with predicate that uses index parameter", () => {
    expect(every([10, 20, 30], (_, index) => index < 3)).toBe(true);
    expect(every([10, 20, 30], (_, index) => index < 2)).toBe(false);
  });

  test("works with predicate that uses array parameter", () => {
    expect(every([1, 2, 3], (n, _, arr) => n <= arr.length)).toBe(true);
    expect(every([1, 2, 3], (n, _, arr) => n <= arr.length - 1)).toBe(false);
  });

  test("works with objects", () => {
    const users = [
      { active: true, age: 25 },
      { active: true, age: 30 },
      { active: true, age: 35 },
    ];
    expect(every(users, (user) => user.active)).toBe(true);
    expect(every(users, (user) => user.age > 20)).toBe(true);
    expect(every(users, (user) => user.age > 30)).toBe(false);
  });

  test("works with readonly arrays", () => {
    const readonlyArr: readonly number[] = [2, 4, 6, 8];
    expect(every(readonlyArr, (n) => n % 2 === 0)).toBe(true);
  });

  test("short-circuits on first false result", () => {
    let callCount = 0;
    const result = every([1, 2, 3, 4], (n) => {
      callCount++;
      return n < 3;
    });
    expect(result).toBe(false);
    expect(callCount).toBe(3); // Only called 3 times before short-circuiting
  });
});
