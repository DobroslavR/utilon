import { describe, expect, test } from "bun:test";
import { addYears } from "../../src/date/addYears.util";

describe("addYears", () => {
  test("addYears", () => {
    const date = new Date("2023-12-25");
    const result = addYears(date, 2);
    expect(result.getFullYear()).toBe(2025);
  });
});
