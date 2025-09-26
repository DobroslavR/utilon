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

  test("maps values when target range is reversed", () => {
    expect(
      mapRange(0, { fromMin: 0, fromMax: 10, toMin: 100, toMax: 0 })
    ).toBe(100);
    expect(
      mapRange(10, { fromMin: 0, fromMax: 10, toMin: 100, toMax: 0 })
    ).toBe(0);
    expect(
      mapRange(2.5, { fromMin: 0, fromMax: 10, toMin: 100, toMax: 0 })
    ).toBe(75);
  });

  test("handles negative source ranges and extrapolated values", () => {
    expect(
      mapRange(-5, { fromMin: -10, fromMax: 0, toMin: 0, toMax: 1 })
    ).toBe(0.5);
    expect(
      mapRange(-15, { fromMin: -10, fromMax: 0, toMin: 0, toMax: 1 })
    ).toBe(-0.5);
    expect(
      mapRange(5, { fromMin: -10, fromMax: 0, toMin: 0, toMax: 1 })
    ).toBe(1.5);
  });
});
