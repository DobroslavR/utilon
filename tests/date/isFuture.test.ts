import { describe, expect, test } from "bun:test";
import { isFuture } from "../../src/date/isFuture.util";

describe("isFuture", () => {
  test("isFuture", () => {
    const future = new Date();
    future.setFullYear(future.getFullYear() + 1);
    expect(isFuture(future)).toBe(true);

    const past = new Date();
    past.setFullYear(past.getFullYear() - 1);
    expect(isFuture(past)).toBe(false);
  });
});
