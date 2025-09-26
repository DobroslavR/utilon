import { describe, expect, test } from "bun:test";
import { isPast } from "../../src/date/isPast.util";

describe("isPast", () => {
  test("isPast", () => {
    const past = new Date();
    past.setFullYear(past.getFullYear() - 1);
    expect(isPast(past)).toBe(true);

    const future = new Date();
    future.setFullYear(future.getFullYear() + 1);
    expect(isPast(future)).toBe(false);
  });
});
