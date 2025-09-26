import { describe, expect, test } from "bun:test";
import { endOfWeek } from "../../src/date/endOfWeek.util";

describe("endOfWeek", () => {
  test("endOfWeek", () => {
    // Monday
    const monday = new Date("2023-12-25"); // This was a Monday
    const result = endOfWeek(monday);
    expect(result.getDay()).toBe(6); // Saturday
  });
});
