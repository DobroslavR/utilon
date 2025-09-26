import { describe, expect, test } from "bun:test";
import { endOfDay } from "../../src/date/endOfDay.util";

describe("endOfDay", () => {
  test("endOfDay", () => {
    const date = new Date("2023-12-25T10:30:45");
    const result = endOfDay(date);
    expect(result.getHours()).toBe(23);
    expect(result.getMinutes()).toBe(59);
    expect(result.getSeconds()).toBe(59);
    expect(result.getMilliseconds()).toBe(999);
  });
});
