import { describe, expect, test } from "bun:test";
import { factorial } from "../../src/numbers/factorial.util";

describe("factorial", () => {
  test("factorial", () => {
    expect(factorial(0)).toBe(1);
    expect(factorial(1)).toBe(1);
    expect(factorial(5)).toBe(120);
    expect(factorial(10)).toBe(3_628_800);
    expect(Number.isNaN(factorial(-1))).toBe(true);
  });
});
