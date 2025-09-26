import { describe, expect, test } from "bun:test";
import { percentageDifference } from "../../src/numbers/percentageDifference.util";

describe("percentageDifference", () => {
  test("percentageDifference", () => {
    expect(percentageDifference(100, 150)).toBe(50);
    expect(
      Math.abs(percentageDifference(150, 100) - -33.333_333_333_333_33)
    ).toBeLessThan(0.000_000_000_000_1);
  });

  test("throws when baseline is zero", () => {
    expect(() => percentageDifference(0, 100)).toThrow(
      "Cannot calculate percentage difference with a zero baseline"
    );
  });
});
