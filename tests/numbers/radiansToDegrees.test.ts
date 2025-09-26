import { describe, expect, test } from "bun:test";
import { radiansToDegrees } from "../../src/numbers/radiansToDegrees.util";

describe("radiansToDegrees", () => {
  test("radiansToDegrees", () => {
    expect(radiansToDegrees(Math.PI)).toBe(180);
    expect(radiansToDegrees(Math.PI / 2)).toBe(90);
    expect(radiansToDegrees(0)).toBe(0);
  });
});
