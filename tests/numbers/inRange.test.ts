import { describe, expect, test } from "bun:test";
import { inRange } from "../../src/numbers/inRange.util";

describe("inRange", () => {
  test("inRange", () => {
    expect(inRange(5, 0, 10)).toBe(true);
    expect(inRange(15, 0, 10)).toBe(false);
    expect(inRange(-5, 0, 10)).toBe(false);
    expect(inRange(0, 0, 10)).toBe(true);
    expect(inRange(10, 0, 10)).toBe(true);
  });
});
