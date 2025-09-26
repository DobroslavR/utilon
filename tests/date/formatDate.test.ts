import { describe, expect, test } from "bun:test";
import { formatDate } from "../../src/date/formatDate.util";

describe("formatDate", () => {
  test("formatDate", () => {
    const date = new Date("2023-12-25");
    expect(formatDate(date)).toBe("December 25, 2023");
  });
});
