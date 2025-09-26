import { describe, expect, test } from "bun:test";
import { unique } from "../../src/array/unique.util";

describe("unique", () => {
  test("removes duplicate values from array", () => {
    expect(unique([1, 2, 2, 3, 3, 3])).toEqual([1, 2, 3]);
    expect(unique(["a", "b", "a", "c"])).toEqual(["a", "b", "c"]);
    expect(unique([true, false, true, true])).toEqual([true, false]);
  });

  test("handles empty arrays", () => {
    expect(unique([])).toEqual([]);
  });

  test("handles arrays with no duplicates", () => {
    expect(unique([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
    expect(unique(["a", "b", "c"])).toEqual(["a", "b", "c"]);
  });

  test("handles arrays with all same elements", () => {
    expect(unique([1, 1, 1, 1])).toEqual([1]);
    expect(unique(["a", "a", "a"])).toEqual(["a"]);
  });

  test("preserves order of first occurrences", () => {
    expect(unique([3, 1, 2, 1, 3, 2])).toEqual([3, 1, 2]);
    expect(unique(["c", "a", "b", "a", "c"])).toEqual(["c", "a", "b"]);
  });

  test("works with different data types", () => {
    expect(unique([1, "1", true, 1, "1"])).toEqual([1, "1", true]);
    expect(unique([0, false, "", null, undefined])).toEqual([
      0,
      false,
      "",
      null,
      undefined,
    ]);
  });

  test("works with objects (reference equality)", () => {
    const obj1 = { id: 1 };
    const obj2 = { id: 2 };
    const obj3 = { id: 1 }; // Different object, same content
    expect(unique([obj1, obj2, obj1, obj3])).toEqual([obj1, obj2, obj3]);
  });

  test("works with arrays (reference equality)", () => {
    const arr1 = [1, 2];
    const arr2 = [3, 4];
    const arr3 = [1, 2]; // Different array, same content
    expect(unique([arr1, arr2, arr1, arr3])).toEqual([arr1, arr2, arr3]);
  });

  test("handles null and undefined values", () => {
    expect(unique([null, undefined, null, undefined])).toEqual([
      null,
      undefined,
    ]);
    expect(unique([null, 1, null, 2])).toEqual([null, 1, 2]);
  });

  test("handles mixed primitive types", () => {
    expect(unique([1, "1", 1.0, true, false])).toEqual([1, "1", true, false]);
    expect(unique([0, false, "", null, undefined, Number.NaN])).toEqual([
      0,
      false,
      "",
      null,
      undefined,
      Number.NaN,
    ]);
  });

  test("works with readonly arrays", () => {
    const readonlyArr: readonly number[] = [1, 2, 2, 3, 3, 3];
    expect(unique(readonlyArr)).toEqual([1, 2, 3]);
  });

  test("handles large arrays with duplicates", () => {
    const arr = Array.from({ length: 100 }, (_, i) => i % 10);
    const result = unique(arr);
    expect(result).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
    expect(result).toHaveLength(10);
  });

  test("preserves the first occurrence of each unique value", () => {
    expect(unique([1, 2, 1, 3, 2, 1])).toEqual([1, 2, 3]);
    expect(unique(["a", "b", "a", "c", "b"])).toEqual(["a", "b", "c"]);
  });

  test("works with single element arrays", () => {
    expect(unique([42])).toEqual([42]);
    expect(unique(["hello"])).toEqual(["hello"]);
    expect(unique([true])).toEqual([true]);
  });
});
