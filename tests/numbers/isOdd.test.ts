import { describe, expect, test } from "bun:test";
import { isOdd } from "../../src/numbers/isOdd.util";

describe("isOdd", () => {
  test("isOdd", () => {
    expect(isOdd(3)).toBe(true);
    expect(isOdd(2)).toBe(false);
    expect(isOdd(1)).toBe(true);
    expect(isOdd(-1)).toBe(true);
  });
});
