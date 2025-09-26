import { describe, expect, test } from "bun:test";
import { isEven } from "../../src/numbers/isEven.util";

describe("isEven", () => {
  test("isEven", () => {
    expect(isEven(2)).toBe(true);
    expect(isEven(3)).toBe(false);
    expect(isEven(0)).toBe(true);
    expect(isEven(-2)).toBe(true);
  });
});
