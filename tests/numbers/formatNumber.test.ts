import { describe, expect, test } from "bun:test";
import { formatNumber } from "../../src/numbers/formatNumber.util";

describe("formatNumber", () => {
  test("formatNumber", () => {
    expect(formatNumber(1_234_567)).toBe("1,234,567");
    expect(formatNumber(1234.56)).toBe("1,234.56");
  });
});
