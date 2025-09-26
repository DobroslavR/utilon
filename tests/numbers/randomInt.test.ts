import { describe, expect, test } from "bun:test";
import { randomInt } from "../../src/numbers/randomInt.util";

describe("randomInt", () => {
  test("randomInt", () => {
    const result = randomInt(1, 10);
    expect(result).toBeGreaterThanOrEqual(1);
    expect(result).toBeLessThanOrEqual(10);
    expect(Number.isInteger(result)).toBe(true);
  });
});
