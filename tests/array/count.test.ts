import { describe, expect, test } from "bun:test";
import { count } from "../../src/array/count.util";

describe("count", () => {
  test("count", () => {
    expect(count([1, 2, 3, 4, 5], (n) => n % 2 === 0)).toBe(2);
    expect(count([1, 3, 5], (n) => n > 10)).toBe(0);
    expect(count([], () => true)).toBe(0);
  });
});
