import { describe, expect, test } from "bun:test";
import { isYesterday } from "../../src/date/isYesterday.util";

describe("isYesterday", () => {
  test("isYesterday", () => {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    expect(isYesterday(yesterday)).toBe(true);

    const today = new Date();
    expect(isYesterday(today)).toBe(false);
  });
});
