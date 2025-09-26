import { describe, expect, test } from "bun:test";
import { chunk } from "../../src/array/chunk.util";

describe("chunk", () => {
  test("chunks array into smaller arrays of specified size", () => {
    expect(chunk([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]]);
    expect(chunk([1, 2, 3, 4], 3)).toEqual([[1, 2, 3], [4]]);
    expect(chunk([1, 2, 3, 4, 5, 6], 3)).toEqual([
      [1, 2, 3],
      [4, 5, 6],
    ]);
  });

  test("handles edge cases", () => {
    expect(chunk([], 2)).toEqual([]);
    expect(chunk([1], 2)).toEqual([[1]]);
    expect(chunk([1, 2], 2)).toEqual([[1, 2]]);
    expect(chunk([1, 2, 3], 1)).toEqual([[1], [2], [3]]);
  });

  test("handles chunk size of 1", () => {
    expect(chunk([1, 2, 3], 1)).toEqual([[1], [2], [3]]);
    expect(chunk(["a", "b", "c"], 1)).toEqual([["a"], ["b"], ["c"]]);
  });

  test("handles chunk size larger than array length", () => {
    expect(chunk([1, 2], 5)).toEqual([[1, 2]]);
    expect(chunk([1], 3)).toEqual([[1]]);
  });

  test("works with different data types", () => {
    expect(chunk(["a", "b", "c", "d"], 2)).toEqual([
      ["a", "b"],
      ["c", "d"],
    ]);
    expect(chunk([true, false, true], 2)).toEqual([[true, false], [true]]);
    expect(chunk([{ id: 1 }, { id: 2 }, { id: 3 }], 2)).toEqual([
      [{ id: 1 }, { id: 2 }],
      [{ id: 3 }],
    ]);
  });

  test("throws error for invalid chunk sizes", () => {
    expect(() => chunk([1, 2, 3], 0)).toThrow(
      "Chunk size must be a positive integer"
    );
    expect(() => chunk([1, 2, 3], -1)).toThrow(
      "Chunk size must be a positive integer"
    );
    expect(() => chunk([1, 2, 3], 1.5)).toThrow(
      "Chunk size must be a positive integer"
    );
    expect(() => chunk([1, 2, 3], Number.NaN)).toThrow(
      "Chunk size must be a positive integer"
    );
  });

  test("works with readonly arrays", () => {
    const readonlyArr: readonly number[] = [1, 2, 3, 4, 5];
    expect(chunk(readonlyArr, 2)).toEqual([[1, 2], [3, 4], [5]]);
  });
});
