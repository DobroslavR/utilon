import { describe, expect, test } from "bun:test";
import { randomFloat } from "../../src/numbers/randomFloat.util";

describe("randomFloat", () => {
  test("randomFloat", () => {
    const result = randomFloat(1, 10);
    expect(result).toBeGreaterThanOrEqual(1);
    expect(result).toBeLessThanOrEqual(10);
  });
});
