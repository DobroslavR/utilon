import { describe, expect, test } from "bun:test";
import { count } from "../../src/array/count.util";

describe("count", () => {
  test("counts elements that pass predicate", () => {
    expect(count([1, 2, 3, 4, 5], (n) => n % 2 === 0)).toBe(2);
    expect(count([1, 2, 3, 4, 5], (n) => n > 3)).toBe(2);
    expect(count(["a", "b", "c"], (s) => s === "a")).toBe(1);
    expect(count([true, false, true, true], (b) => b)).toBe(3);
  });

  test("returns 0 for empty arrays", () => {
    expect(count([], () => true)).toBe(0);
    expect(count([], () => false)).toBe(0);
  });

  test("returns 0 when no elements pass predicate", () => {
    expect(count([1, 3, 5], (n) => n > 10)).toBe(0);
    expect(count(["a", "b", "c"], (s) => s === "d")).toBe(0);
  });

  test("returns array length when all elements pass predicate", () => {
    expect(count([2, 4, 6], (n) => n % 2 === 0)).toBe(3);
    expect(count(["a", "b", "c"], (s) => s.length === 1)).toBe(3);
  });

  test("works with predicate that uses index parameter", () => {
    expect(count([10, 20, 30, 40], (_, index) => index % 2 === 0)).toBe(2);
    expect(count([1, 2, 3, 4, 5], (n, index) => n + index > 3)).toBe(3);
  });

  test("works with predicate that uses array parameter", () => {
    expect(count([1, 2, 3], (n, _, arr) => n === Math.max(...arr))).toBe(1);
    expect(count([1, 2, 3], (n, _, arr) => n === Math.min(...arr))).toBe(1);
  });

  test("works with complex predicates", () => {
    expect(count([1, 2, 3, 4, 5, 6], (n) => n > 2 && n < 6)).toBe(3);
    expect(count(["apple", "banana", "cherry"], (s) => s.includes("a"))).toBe(
      2
    );
  });

  test("works with objects", () => {
    const users = [
      { age: 25, active: true },
      { age: 30, active: false },
      { age: 35, active: true },
    ];
    expect(count(users, (user) => user.active)).toBe(2);
    expect(count(users, (user) => user.age > 28)).toBe(2);
  });

  test("works with readonly arrays", () => {
    const readonlyArr: readonly number[] = [1, 2, 3, 4, 5];
    expect(count(readonlyArr, (n) => n > 3)).toBe(2);
  });

  test("handles edge cases with predicate", () => {
    expect(count([null, undefined, 0, ""], (item) => item == null)).toBe(2);
    expect(count([Number.NaN, 1, Number.NaN, 2], (n) => Number.isNaN(n))).toBe(
      2
    );
  });
});
