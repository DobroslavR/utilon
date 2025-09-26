import { describe, expect, test } from "bun:test";
import { round } from "../../src/numbers/round.util";

describe("round", () => {
  test("round", () => {
    expect(round(Math.PI, 2)).toBe(3.14);
    expect(round(Math.PI, 0)).toBe(3);
    expect(round(Math.PI)).toBe(3);
  });
});
