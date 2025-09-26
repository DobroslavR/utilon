import { describe, expect, test } from "bun:test";
import { frequency } from "../../src/array/frequency.util";

describe("frequency", () => {
  test("frequency", () => {
    const freq = frequency([1, 2, 2, 3, 3, 3]);
    expect(freq.get(1)).toBe(1);
    expect(freq.get(2)).toBe(2);
    expect(freq.get(3)).toBe(3);
  });
});
