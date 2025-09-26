import { describe, expect, test } from "bun:test";
import { addMonths } from "../../src/date/addMonths.util";

describe("addMonths", () => {
  test("addMonths", () => {
    const date = new Date("2023-12-25");
    const result = addMonths(date, 2);
    expect(result.getMonth()).toBe(1); // February
    expect(result.getFullYear()).toBe(2024);
  });
});
