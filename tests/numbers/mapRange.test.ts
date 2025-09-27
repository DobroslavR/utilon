import { describe, expect, test } from "bun:test";
import { mapRange } from "../../src/numbers/mapRange.util";

describe("mapRange", () => {
  test("mapRange", () => {
    expect(mapRange(5, { fromMin: 0, fromMax: 10, toMin: 0, toMax: 100 })).toBe(
      50
    );
    expect(mapRange(0, { fromMin: 0, fromMax: 10, toMin: 0, toMax: 100 })).toBe(
      0
    );
    expect(
      mapRange(10, { fromMin: 0, fromMax: 10, toMin: 0, toMax: 100 })
    ).toBe(100);
  });

  test("throws when the source range has zero width", () => {
    expect(() =>
      mapRange(5, { fromMin: 1, fromMax: 1, toMin: 0, toMax: 100 })
    ).toThrowError(
      "mapRange source range must have a non-zero width (fromMax !== fromMin)."
    );
  });
});
