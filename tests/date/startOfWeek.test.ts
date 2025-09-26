import { describe, expect, test } from "bun:test";
import { startOfWeek } from "../../src/date/startOfWeek.util";

describe("startOfWeek", () => {
  test("startOfWeek", () => {
    // Monday
    const monday = new Date("2023-12-25"); // This was a Monday
    const result = startOfWeek(monday);
    expect(result.getDay()).toBe(0); // Sunday
  });
});
