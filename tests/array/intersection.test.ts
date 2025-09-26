import { describe, expect, test } from "bun:test";
import { intersection } from "../../src/array/intersection.util";

describe("intersection", () => {
  test("intersection", () => {
    expect(intersection([1, 2, 3], [2, 3, 4], [2, 5])).toEqual([2]);
    expect(intersection()).toEqual([]);
    expect(intersection([1, 2])).toEqual([1, 2]);
  });
});
