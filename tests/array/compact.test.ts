import { describe, expect, test } from "bun:test";
import { compact } from "../../src/array/compact.util";

describe("compact", () => {
  test("removes falsy values from array", () => {
    expect(compact([0, 1, false, 2, "", 3, null, undefined])).toEqual([
      1, 2, 3,
    ]);
    expect(compact([false, null, undefined, "", 0, Number.NaN])).toEqual([]);
    expect(compact([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  });

  test("handles all falsy values correctly", () => {
    expect(compact([false])).toEqual([]);
    expect(compact([null])).toEqual([]);
    expect(compact([undefined])).toEqual([]);
    expect(compact([""])).toEqual([]);
    expect(compact([0])).toEqual([]);
    expect(compact([Number.NaN])).toEqual([]);
  });

  test("handles mixed truthy and falsy values", () => {
    expect(compact([1, false, "hello", null, 0, true, undefined, ""])).toEqual([
      1,
      "hello",
      true,
    ]);
    expect(compact([{}, false, [], null, 42, ""])).toEqual([{}, [], 42]);
  });

  test("preserves truthy values", () => {
    expect(compact([1, "a", true, [], {}])).toEqual([1, "a", true, [], {}]);
    expect(compact([-1, "0", "false"])).toEqual([-1, "0", "false"]);
  });

  test("handles empty arrays", () => {
    expect(compact([])).toEqual([]);
  });

  test("works with different data types", () => {
    expect(compact(["a", "", "b", null, "c"])).toEqual(["a", "b", "c"]);
    expect(compact([1, 0, 2, false, 3])).toEqual([1, 2, 3]);
    expect(compact([true, false, true])).toEqual([true, true]);
  });

  test("works with readonly arrays", () => {
    const readonlyArr: readonly (number | null | undefined | false)[] = [
      0,
      1,
      false,
      2,
      null,
      3,
      undefined,
    ];
    expect(compact(readonlyArr)).toEqual([1, 2, 3]);
  });

  test("preserves reference types that are truthy", () => {
    const obj = { key: "value" };
    const arr = [1, 2, 3];
    expect(compact([obj, null, arr, undefined, false])).toEqual([obj, arr]);
  });
});
