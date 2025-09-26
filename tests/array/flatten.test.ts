import { describe, expect, test } from "bun:test";
import { flatten } from "../../src/array/flatten.util";

describe("flatten", () => {
  test("flatten", () => {
    expect(flatten([[1, 2], [3, 4], [5]])).toEqual([1, 2, 3, 4, 5]);
    expect(flatten([])).toEqual([]);
    expect(flatten([[], [1], []])).toEqual([1]);
  });
});
