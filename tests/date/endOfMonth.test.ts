import { describe, expect, test } from "bun:test";
import { endOfMonth } from "../../src/date/endOfMonth.util";

describe("endOfMonth", () => {
  test("endOfMonth", () => {
    const date = new Date("2023-12-25");
    const result = endOfMonth(date);
    expect(result.getDate()).toBe(31);
    expect(result.getMonth()).toBe(11); // December
    expect(result.getFullYear()).toBe(2023);
    expect(result.getHours()).toBe(23);
    expect(result.getMinutes()).toBe(59);
    expect(result.getSeconds()).toBe(59);
    expect(result.getMilliseconds()).toBe(999);
  });
});
