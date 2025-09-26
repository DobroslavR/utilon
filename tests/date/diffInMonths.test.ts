import { describe, expect, test } from "bun:test";
import { diffInMonths } from "../../src/date/diffInMonths.util";

describe("diffInMonths", () => {
  test("diffInMonths", () => {
    const date1 = new Date("2023-01-15");
    const date2 = new Date("2023-07-15");
    expect(diffInMonths(date1, date2)).toBe(6);
  });
});
