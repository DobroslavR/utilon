import { describe, expect, test } from "bun:test";
import { startOfDay } from "../../src/date/startOfDay.util";

describe("startOfDay", () => {
  test("startOfDay", () => {
    const date = new Date("2023-12-25T10:30:45");
    const result = startOfDay(date);
    expect(result.getHours()).toBe(0);
    expect(result.getMinutes()).toBe(0);
    expect(result.getSeconds()).toBe(0);
    expect(result.getMilliseconds()).toBe(0);
  });
});
