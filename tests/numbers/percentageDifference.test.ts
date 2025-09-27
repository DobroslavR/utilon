import { describe, expect, test } from "bun:test";
import { percentageDifference } from "../../src/numbers/percentageDifference.util";

describe("percentageDifference", () => {
  test("percentageDifference", () => {
    expect(percentageDifference(100, 150)).toBe(50);
    expect(
      Math.abs(percentageDifference(150, 100) - -33.333_333_333_333_33)
    ).toBeLessThan(0.000_000_000_000_1);
  });

  test("handles zero baseline", () => {
    expect(percentageDifference(0.1, 0)).toBe(-100);
    expect(percentageDifference(0, 10)).toBe(Infinity);
    expect(percentageDifference(0, -10)).toBe(-Infinity);
  });

  test("works with negative baselines", () => {
    expect(percentageDifference(-100, -150)).toBe(50);
    expect(percentageDifference(-100, -50)).toBe(-50);
    expect(percentageDifference(-200, 100)).toBe(-150);
  });
});
