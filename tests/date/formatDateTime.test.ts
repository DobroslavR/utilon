import { describe, expect, test } from "bun:test";
import { formatDateTime } from "../../src/date/formatDateTime.util";

describe("formatDateTime", () => {
  test("formatDateTime", () => {
    const date = new Date("2023-12-25T10:30:00");
    const result = formatDateTime(date);
    expect(result).toContain("December 25, 2023");
    expect(result).toContain("10:30");
  });
});
