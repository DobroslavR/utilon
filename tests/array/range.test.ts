import { describe, expect, test } from "bun:test";
import { range } from "../../src/array/range.util";

describe("range", () => {
  test("range", () => {
    expect(range(1, 5)).toEqual([1, 2, 3, 4, 5]);
    expect(range(3, 3)).toEqual([3]);
    expect(range(5, 1)).toEqual([]);
  });
});
