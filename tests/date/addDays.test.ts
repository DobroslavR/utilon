import { describe, expect, test } from "bun:test";
import { addDays } from "../../src/date/addDays.util";

describe("addDays", () => {
  test("addDays", () => {
    const date = new Date("2023-12-25");
    const result = addDays(date, 5);
    expect(result.getDate()).toBe(30);
    expect(result.getMonth()).toBe(11); // December
  });
});
