import { describe, expect, test } from "bun:test";
import { dropWhile } from "../../src/array/dropWhile.util";

describe("dropWhile", () => {
  test("dropWhile", () => {
    expect(dropWhile([1, 2, 3, 4, 5], (n) => n < 3)).toEqual([3, 4, 5]);
    expect(dropWhile([1, 2, 3], (n) => n < 10)).toEqual([]);
    expect(dropWhile([1, 2, 3], (n) => n < 1)).toEqual([1, 2, 3]);
  });
});
