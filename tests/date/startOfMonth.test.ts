import { describe, expect, test } from "bun:test";
import { startOfMonth } from "../../src/date/startOfMonth.util";

describe("startOfMonth", () => {
  test("startOfMonth", () => {
    const date = new Date("2023-12-25");
    const result = startOfMonth(date);
    expect(result.getDate()).toBe(1);
    expect(result.getMonth()).toBe(11); // December
    expect(result.getFullYear()).toBe(2023);
  });
});
