import { describe, expect, test } from "bun:test";
import { diffInDays } from "../../src/date/diffInDays.util";

describe("diffInDays", () => {
  test("diffInDays", () => {
    const date1 = new Date("2023-12-25");
    const date2 = new Date("2023-12-30");
    expect(diffInDays(date1, date2)).toBe(5);
    expect(diffInDays(date2, date1)).toBe(5);
  });
});
