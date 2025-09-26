import { describe, expect, test } from "bun:test";
import { range } from "../../src/array/range.util";

describe("range", () => {
  test("creates array from start to end inclusive", () => {
    expect(range(1, 5)).toEqual([1, 2, 3, 4, 5]);
    expect(range(0, 3)).toEqual([0, 1, 2, 3]);
    expect(range(-2, 2)).toEqual([-2, -1, 0, 1, 2]);
  });

  test("handles single element ranges", () => {
    expect(range(5, 5)).toEqual([5]);
    expect(range(0, 0)).toEqual([0]);
    expect(range(-1, -1)).toEqual([-1]);
  });

  test("returns empty array when start > end", () => {
    expect(range(5, 1)).toEqual([]);
    expect(range(0, -1)).toEqual([]);
    expect(range(10, 5)).toEqual([]);
  });

  test("handles large ranges", () => {
    expect(range(1, 100)).toHaveLength(100);
    expect(range(1, 100)[0]).toBe(1);
    expect(range(1, 100)[99]).toBe(100);
  });

  test("handles negative numbers", () => {
    expect(range(-5, -1)).toEqual([-5, -4, -3, -2, -1]);
    expect(range(-3, 3)).toEqual([-3, -2, -1, 0, 1, 2, 3]);
  });

  test("works with floating point numbers", () => {
    expect(range(1.5, 4.5)).toEqual([1.5, 2.5, 3.5, 4.5]);
    expect(range(0.1, 0.4)).toEqual([0.1]);
  });

  test("handles edge cases with zero", () => {
    expect(range(0, 5)).toEqual([0, 1, 2, 3, 4, 5]);
    expect(range(-5, 0)).toEqual([-5, -4, -3, -2, -1, 0]);
  });

  test("returns empty array for invalid ranges", () => {
    expect(range(5, 1)).toEqual([]);
    expect(range(100, 50)).toEqual([]);
    expect(range(1, -1)).toEqual([]);
  });

  test("handles very small ranges", () => {
    expect(range(1, 1)).toEqual([1]);
    expect(range(2, 2)).toEqual([2]);
  });

  test("works with decimal increments", () => {
    expect(range(0, 10)).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    expect(range(10, 20)).toEqual([10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);
  });

  test("handles ranges starting from negative to positive", () => {
    expect(range(-10, -5)).toEqual([-10, -9, -8, -7, -6, -5]);
    expect(range(-2, 3)).toEqual([-2, -1, 0, 1, 2, 3]);
  });

  test("returns correct array length", () => {
    expect(range(1, 5)).toHaveLength(5);
    expect(range(5, 5)).toHaveLength(1);
    expect(range(5, 1)).toHaveLength(0);
    expect(range(-3, 3)).toHaveLength(7);
  });

  test("preserves number types", () => {
    const result = range(1, 3);
    expect(result).toEqual([1, 2, 3]);
    expect(typeof result[0]).toBe("number");
    expect(typeof result[1]).toBe("number");
    expect(typeof result[2]).toBe("number");
  });
});
