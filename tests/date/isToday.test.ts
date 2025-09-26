import { describe, expect, test } from "bun:test";
import { isToday } from "../../src/date/isToday.util";

describe("isToday", () => {
  test("isToday", () => {
    const today = new Date();
    expect(isToday(today)).toBe(true);

    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    expect(isToday(yesterday)).toBe(false);
  });
});
