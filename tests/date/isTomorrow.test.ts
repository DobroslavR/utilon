import { describe, expect, test } from "bun:test";
import { isTomorrow } from "../../src/date/isTomorrow.util";

describe("isTomorrow", () => {
  test("isTomorrow", () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    expect(isTomorrow(tomorrow)).toBe(true);

    const today = new Date();
    expect(isTomorrow(today)).toBe(false);
  });
});
