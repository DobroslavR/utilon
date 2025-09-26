import { describe, expect, test } from "bun:test";
import { union } from "../../src/array/union.util";

describe("union", () => {
  test("union", () => {
    expect(union([1, 2], [2, 3], [3, 4])).toEqual([1, 2, 3, 4]);
    expect(union()).toEqual([]);
  });
});
