import { describe, expect, test } from "bun:test";
import { some } from "../../src/array/some.util";

describe("some", () => {
  test("returns true if any element passes predicate", () => {
    expect(some([1, 3, 5], (n) => n % 2 === 0)).toBe(false);
    expect(some([1, 2, 5], (n) => n % 2 === 0)).toBe(true);
    expect(some([1, 2, 3], (n) => n > 2)).toBe(true);
    expect(some(["a", "b", "c"], (s) => s === "b")).toBe(true);
  });

  test("returns false if no elements pass predicate", () => {
    expect(some([1, 3, 5], (n) => n % 2 === 0)).toBe(false);
    expect(some([2, 4, 6], (n) => n % 2 !== 0)).toBe(false);
    expect(some(["a", "b", "c"], (s) => s === "d")).toBe(false);
  });

  test("returns false for empty arrays", () => {
    expect(some([], () => true)).toBe(false);
    expect(some([], () => false)).toBe(false);
  });

  test("works with predicate that uses index parameter", () => {
    expect(some([10, 20, 30], (_, index) => index === 1)).toBe(true);
    expect(some([10, 20, 30], (_, index) => index === 5)).toBe(false);
  });

  test("works with predicate that uses array parameter", () => {
    expect(some([1, 2, 3], (n, _, arr) => n === arr.length)).toBe(true);
    expect(some([1, 2, 3], (n, _, arr) => n === arr.length + 1)).toBe(false);
  });

  test("works with objects", () => {
    const users = [
      { active: false, age: 25 },
      { active: true, age: 30 },
      { active: false, age: 35 },
    ];
    expect(some(users, (user) => user.active)).toBe(true);
    expect(some(users, (user) => user.age > 32)).toBe(true);
    expect(some(users, (user) => user.age > 40)).toBe(false);
  });

  test("works with readonly arrays", () => {
    const readonlyArr: readonly number[] = [1, 3, 5, 7];
    expect(some(readonlyArr, (n) => n % 2 === 0)).toBe(false);
    expect(some(readonlyArr, (n) => n > 5)).toBe(true);
  });

  test("short-circuits on first true result", () => {
    let callCount = 0;
    const result = some([1, 2, 3, 4], (n) => {
      callCount++;
      return n > 2;
    });
    expect(result).toBe(true);
    expect(callCount).toBe(3); // Only called 3 times before short-circuiting
  });
});
