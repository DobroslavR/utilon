import { describe, expect, test } from "bun:test";
import { clamp } from "../../src/numbers/clamp.util";

describe("clamp", () => {
  test("clamp", () => {
    expect(clamp(5, 0, 10)).toBe(5);
    expect(clamp(-5, 0, 10)).toBe(0);
    expect(clamp(15, 0, 10)).toBe(10);
  });
});
