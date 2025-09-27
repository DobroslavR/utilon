import { describe, expect, test } from "bun:test";
import { percentage } from "../../src/numbers/percentage.util";

describe("percentage", () => {
  test("percentage", () => {
    expect(percentage(25, 100)).toBe(25);
    expect(percentage(1, 4)).toBe(25);
    expect(percentage(0, 100)).toBe(0);
  });

  test("throws when total is zero", () => {
    expect(() => percentage(10, 0)).toThrow(
      "Cannot calculate percentage: total must not be zero.",
    );
  });
});
