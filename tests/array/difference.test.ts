import { describe, expect, test } from "bun:test";
import { difference } from "../../src/array/difference.util";

describe("difference", () => {
  test("difference", () => {
    expect(difference([1, 2, 3], [2, 3], [3])).toEqual([1]);
    expect(difference()).toEqual([]);
    const input = [1, 2];
    const result = difference(input);
    expect(result).toEqual([1, 2]);
    expect(result).not.toBe(input);
  });
});
