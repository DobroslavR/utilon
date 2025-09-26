import { describe, expect, test } from "bun:test";
import { some } from "../../src/array/some.util";

describe("some", () => {
  test("some", () => {
    expect(some([1, 3, 5], (n) => n % 2 === 0)).toBe(false);
    expect(some([1, 2, 5], (n) => n % 2 === 0)).toBe(true);
    expect(some([], () => false)).toBe(false);
  });
});
