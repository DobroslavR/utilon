import { describe, expect, test } from "bun:test";
import { difference } from "../../src/array/difference.util";

describe("difference", () => {
  test("finds difference between arrays", () => {
    expect(difference([1, 2, 3], [2, 3, 4])).toEqual([1]);
    expect(difference([1, 2, 3], [2, 3], [3, 4])).toEqual([1]);
    expect(difference([1, 2, 3, 4, 5], [2, 4], [3, 5, 6])).toEqual([1]);
  });

  test("returns first array when no other arrays provided", () => {
    expect(difference([1, 2, 3])).toEqual([1, 2, 3]);
    expect(difference(["a", "b", "c"])).toEqual(["a", "b", "c"]);
  });

  test("returns empty array when no arrays provided", () => {
    expect(difference()).toEqual([]);
  });

  test("handles empty arrays", () => {
    expect(difference([], [1, 2, 3])).toEqual([]);
    expect(difference([1, 2, 3], [])).toEqual([1, 2, 3]);
    expect(difference([], [])).toEqual([]);
  });

  test("preserves duplicates in first array", () => {
    expect(difference([1, 1, 2, 2, 3], [2])).toEqual([1, 1, 3]);
    expect(difference([1, 2, 2, 3, 3, 3], [3])).toEqual([1, 2, 2]);
  });

  test("works with different data types", () => {
    expect(difference(["a", "b", "c"], ["b", "c"], ["c", "d"])).toEqual(["a"]);
    expect(difference([true, false, true], [false])).toEqual([true, true]);
    expect(difference([1, "a", true], [1, true])).toEqual(["a"]);
  });

  test("works with objects (reference equality)", () => {
    const obj1 = { id: 1 };
    const obj2 = { id: 2 };
    const obj3 = { id: 3 };
    expect(difference([obj1, obj2, obj3], [obj2])).toEqual([obj1, obj3]);
    expect(difference([obj1, obj1], [obj1])).toEqual([]); // Same reference
  });

  test("handles multiple arrays", () => {
    expect(difference([1, 2, 3, 4, 5], [2, 4], [3], [5, 6])).toEqual([1]);
    expect(difference([1, 2, 3], [2], [3], [1])).toEqual([]);
  });

  test("preserves order of first array", () => {
    expect(difference([3, 1, 2], [2])).toEqual([3, 1]);
    expect(difference([1, 3, 2, 1], [1])).toEqual([3, 2]);
  });

  test("handles arrays with mixed types", () => {
    expect(difference([1, "a", true, null], ["a", null])).toEqual([1, true]);
    expect(difference([0, false, "", null], [false, ""])).toEqual([0, null]);
  });
});
