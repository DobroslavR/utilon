import { describe, expect, test } from "bun:test";
import { every } from "../../src/array/every.util";

describe("every", () => {
  test("every", () => {
    expect(every([2, 4, 6], (n) => n % 2 === 0)).toBe(true);
    expect(every([2, 3, 6], (n) => n % 2 === 0)).toBe(false);
    expect(every([], () => true)).toBe(true);
  });
});
