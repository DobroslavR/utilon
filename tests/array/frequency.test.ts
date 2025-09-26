import { describe, expect, test } from "bun:test";
import { frequency } from "../../src/array/frequency.util";

describe("frequency", () => {
  test("creates frequency map for numbers", () => {
    const freq = frequency([1, 2, 2, 3, 3, 3]);
    expect(freq.get(1)).toBe(1);
    expect(freq.get(2)).toBe(2);
    expect(freq.get(3)).toBe(3);
    expect(freq.get(4)).toBe(undefined);
  });

  test("creates frequency map for strings", () => {
    const freq = frequency(["a", "b", "b", "c", "c", "c"]);
    expect(freq.get("a")).toBe(1);
    expect(freq.get("b")).toBe(2);
    expect(freq.get("c")).toBe(3);
  });

  test("handles empty arrays", () => {
    const freq = frequency([]);
    expect(freq.size).toBe(0);
  });

  test("handles single element arrays", () => {
    const freq = frequency([42]);
    expect(freq.get(42)).toBe(1);
    expect(freq.size).toBe(1);
  });

  test("handles arrays with all same elements", () => {
    const freq = frequency([1, 1, 1, 1]);
    expect(freq.get(1)).toBe(4);
    expect(freq.size).toBe(1);
  });

  test("handles arrays with no duplicates", () => {
    const freq = frequency([1, 2, 3, 4, 5]);
    expect(freq.get(1)).toBe(1);
    expect(freq.get(2)).toBe(1);
    expect(freq.get(3)).toBe(1);
    expect(freq.get(4)).toBe(1);
    expect(freq.get(5)).toBe(1);
    expect(freq.size).toBe(5);
  });

  test("works with boolean values", () => {
    const freq = frequency([true, false, true, true]);
    expect(freq.get(true)).toBe(3);
    expect(freq.get(false)).toBe(1);
  });

  test("works with null and undefined", () => {
    const freq = frequency([null, undefined, null, undefined, null]);
    expect(freq.get(null)).toBe(3);
    expect(freq.get(undefined)).toBe(2);
  });

  test("works with mixed types", () => {
    const freq = frequency([1, "1", true, 1, "1"]);
    expect(freq.get(1)).toBe(2);
    expect(freq.get("1")).toBe(2);
    expect(freq.get(true)).toBe(1);
  });

  test("works with objects (reference equality)", () => {
    const obj1 = { id: 1 };
    const obj2 = { id: 2 };
    const freq = frequency([obj1, obj2, obj1, obj1]);
    expect(freq.get(obj1)).toBe(3);
    expect(freq.get(obj2)).toBe(1);
    expect(freq.size).toBe(2);
  });

  test("works with arrays", () => {
    const arr1 = [1, 2];
    const arr2 = [3, 4];
    const freq = frequency([arr1, arr2, arr1]);
    expect(freq.get(arr1)).toBe(2);
    expect(freq.get(arr2)).toBe(1);
  });

  test("works with readonly arrays", () => {
    const readonlyArr: readonly number[] = [1, 2, 2, 3, 3, 3];
    const freq = frequency(readonlyArr);
    expect(freq.get(1)).toBe(1);
    expect(freq.get(2)).toBe(2);
    expect(freq.get(3)).toBe(3);
  });

  test("returns Map with correct size", () => {
    expect(frequency([1, 2, 3]).size).toBe(3);
    expect(frequency([1, 1, 1]).size).toBe(1);
    expect(frequency([]).size).toBe(0);
    expect(frequency([1, 2, 1, 3, 2]).size).toBe(3);
  });

  test("handles zero values correctly", () => {
    const freq = frequency([0, 0, 1, 0]);
    expect(freq.get(0)).toBe(3);
    expect(freq.get(1)).toBe(1);
  });
});
