import { describe, expect, test } from "bun:test";
import { chunk } from "../../src/array/chunk.util";

describe("chunk", () => {
  test("chunk", () => {
    expect(chunk([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]]);
    expect(chunk([1, 2, 3, 4], 3)).toEqual([[1, 2, 3], [4]]);
    expect(chunk([], 2)).toEqual([]);
  });
});
