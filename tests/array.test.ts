import { describe, expect, test } from "bun:test";
import {
  chunk,
  compact,
  count,
  difference,
  dropRightWhile,
  dropWhile,
  every,
  flatten,
  frequency,
  groupBy,
  intersection,
  partition,
  range,
  shuffle,
  some,
  sortBy,
  sortByDesc,
  union,
  unique,
  uniqueBy,
} from "../src/array";

describe("Array Utilities", () => {
  test("unique", () => {
    expect(unique([1, 2, 2, 3, 3, 3])).toEqual([1, 2, 3]);
    expect(unique(["a", "b", "a", "c"])).toEqual(["a", "b", "c"]);
    expect(unique([])).toEqual([]);
  });

  test("uniqueBy", () => {
    const users = [
      { id: 1, name: "John" },
      { id: 2, name: "Jane" },
      { id: 1, name: "Johnny" },
    ];
    expect(uniqueBy(users, (user) => user.id)).toHaveLength(2);
    expect(uniqueBy([], (item) => item)).toEqual([]);
  });

  test("chunk", () => {
    expect(chunk([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]]);
    expect(chunk([1, 2, 3, 4], 3)).toEqual([[1, 2, 3], [4]]);
    expect(chunk([], 2)).toEqual([]);
  });

  test("groupBy", () => {
    const users = [
      { name: "John", age: 25 },
      { name: "Jane", age: 25 },
      { name: "Bob", age: 30 },
    ];
    const result = groupBy(users, (user) => user.age.toString());
    expect(result["25"]).toHaveLength(2);
    expect(result["30"]).toHaveLength(1);
  });

  test("shuffle", () => {
    const arr = [1, 2, 3, 4, 5];
    const shuffled = shuffle(arr);
    expect(shuffled).toHaveLength(5);
    expect(shuffled.sort()).toEqual([1, 2, 3, 4, 5]);
  });

  test("range", () => {
    expect(range(1, 5)).toEqual([1, 2, 3, 4, 5]);
    expect(range(3, 3)).toEqual([3]);
    expect(range(5, 1)).toEqual([]);
  });

  test("intersection", () => {
    expect(intersection([1, 2, 3], [2, 3, 4], [2, 5])).toEqual([2]);
    expect(intersection()).toEqual([]);
    expect(intersection([1, 2])).toEqual([1, 2]);
  });

  test("difference", () => {
    expect(difference([1, 2, 3], [2, 3], [3])).toEqual([1]);
    expect(difference()).toEqual([]);
    expect(difference([1, 2])).toEqual([1, 2]);
  });

  test("flatten", () => {
    expect(flatten([[1, 2], [3, 4], [5]])).toEqual([1, 2, 3, 4, 5]);
    expect(flatten([])).toEqual([]);
    expect(flatten([[], [1], []])).toEqual([1]);
  });

  test("union", () => {
    expect(union([1, 2], [2, 3], [3, 4])).toEqual([1, 2, 3, 4]);
    expect(union()).toEqual([]);
  });

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

  test("compact", () => {
    expect(compact([0, 1, false, 2, "", 3, null, undefined])).toEqual([
      1, 2, 3,
    ]);
    expect(compact([])).toEqual([]);
  });

  test("every", () => {
    expect(every([2, 4, 6], (n) => n % 2 === 0)).toBe(true);
    expect(every([2, 3, 6], (n) => n % 2 === 0)).toBe(false);
    expect(every([], () => true)).toBe(true);
  });

  test("some", () => {
    expect(some([1, 3, 5], (n) => n % 2 === 0)).toBe(false);
    expect(some([1, 2, 5], (n) => n % 2 === 0)).toBe(true);
    expect(some([], () => false)).toBe(false);
  });

  test("count", () => {
    expect(count([1, 2, 3, 4, 5], (n) => n % 2 === 0)).toBe(2);
    expect(count([1, 3, 5], (n) => n > 10)).toBe(0);
    expect(count([], () => true)).toBe(0);
  });

  test("frequency", () => {
    const freq = frequency([1, 2, 2, 3, 3, 3]);
    expect(freq.get(1)).toBe(1);
    expect(freq.get(2)).toBe(2);
    expect(freq.get(3)).toBe(3);
  });

  test("partition", () => {
    const [even, odd] = partition([1, 2, 3, 4, 5, 6], (n) => n % 2 === 0);
    expect(even).toEqual([2, 4, 6]);
    expect(odd).toEqual([1, 3, 5]);
  });

  test("dropWhile", () => {
    expect(dropWhile([1, 2, 3, 4, 5], (n) => n < 3)).toEqual([3, 4, 5]);
    expect(dropWhile([1, 2, 3], (n) => n < 10)).toEqual([]);
    expect(dropWhile([1, 2, 3], (n) => n < 1)).toEqual([1, 2, 3]);
  });

  test("dropRightWhile", () => {
    expect(dropRightWhile([1, 2, 3, 4, 5], (n) => n > 3)).toEqual([1, 2, 3]);
    expect(dropRightWhile([1, 2, 3], (n) => n > 0)).toEqual([]);
    expect(dropRightWhile([1, 2, 3], (n) => n > 10)).toEqual([1, 2, 3]);
  });
});
