import { describe, expect, test } from "bun:test";
import { dropRightWhile } from "../../src/array/dropRightWhile.util";

describe("dropRightWhile", () => {
  test("dropRightWhile", () => {
    expect(dropRightWhile([1, 2, 3, 4, 5], (n) => n > 3)).toEqual([1, 2, 3]);
    expect(dropRightWhile([1, 2, 3], (n) => n > 0)).toEqual([]);
    expect(dropRightWhile([1, 2, 3], (n) => n > 10)).toEqual([1, 2, 3]);
  });
});
