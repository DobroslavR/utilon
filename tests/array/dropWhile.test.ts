import { describe, expect, test } from "bun:test";
import { dropWhile } from "../../src/array/dropWhile.util";

describe("dropWhile", () => {
  test("drops elements from start while predicate returns true", () => {
    expect(dropWhile([1, 2, 3, 4, 5], (n) => n < 3)).toEqual([3, 4, 5]);
    expect(dropWhile([1, 2, 3, 4, 5], (n) => n < 10)).toEqual([]);
    expect(dropWhile([1, 2, 3, 4, 5], (n) => n < 1)).toEqual([1, 2, 3, 4, 5]);
  });

  test("handles empty arrays", () => {
    expect(dropWhile([], (n) => n < 5)).toEqual([]);
  });

  test("handles arrays where no elements are dropped", () => {
    expect(dropWhile([3, 2, 1], (n) => n < 1)).toEqual([3, 2, 1]);
    expect(dropWhile([1, 2, 3], (n) => n > 5)).toEqual([1, 2, 3]);
  });

  test("handles arrays where all elements are dropped", () => {
    expect(dropWhile([1, 2, 3], (n) => n < 10)).toEqual([]);
    expect(dropWhile([1, 2, 3], () => true)).toEqual([]);
  });

  test("works with different data types", () => {
    expect(dropWhile(["a", "b", "c"], (s) => s < "c")).toEqual(["c"]);
    expect(dropWhile([false, true, false], (b) => !b)).toEqual([true, false]);
  });

  test("works with objects", () => {
    const users = [
      { active: false },
      { active: false },
      { active: true },
      { active: true },
    ];
    expect(dropWhile(users, (user) => !user.active)).toEqual([
      { active: true },
      { active: true },
    ]);
  });

  test("works with readonly arrays", () => {
    const readonlyArr: readonly number[] = [1, 2, 3, 4, 5];
    expect(dropWhile(readonlyArr, (n) => n < 3)).toEqual([3, 4, 5]);
  });

  test("stops at first element that doesn't match predicate", () => {
    expect(dropWhile([2, 4, 6, 5, 8], (n) => n % 2 === 0)).toEqual([5, 8]);
    expect(dropWhile([1, 3, 5, 2, 4], (n) => n % 2 !== 0)).toEqual([2, 4]);
  });
});
