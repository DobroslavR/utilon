import { describe, expect, test } from "bun:test";
import { unique } from "../../src/array/unique.util";

describe("unique", () => {
  test("unique", () => {
    expect(unique([1, 2, 2, 3, 3, 3])).toEqual([1, 2, 3]);
    expect(unique(["a", "b", "a", "c"])).toEqual(["a", "b", "c"]);
    expect(unique([])).toEqual([]);
  });
});
