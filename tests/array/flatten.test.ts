import { describe, expect, test } from "bun:test";
import { flatten } from "../../src/array/flatten.util";

describe("flatten", () => {
  test("flattens array of arrays to single level", () => {
    expect(flatten([[1, 2], [3, 4], [5]])).toEqual([1, 2, 3, 4, 5]);
    expect(flatten([["a", "b"], ["c"], ["d", "e"]])).toEqual([
      "a",
      "b",
      "c",
      "d",
      "e",
    ]);
    expect(flatten([[1], [2, 3], [4, 5, 6]])).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test("handles empty arrays", () => {
    expect(flatten([])).toEqual([]);
    expect(flatten([[], [], []])).toEqual([]);
    expect(flatten([[], [1], []])).toEqual([1]);
  });

  test("flattens arrays with different element types", () => {
    expect(
      flatten([
        [1, 2],
        // @ts-expect-error
        ["a", "b"],
        // @ts-expect-error
        [true, false],
      ])

      // @ts-expect-error
    ).toEqual([1, 2, "a", "b", true, false]);
    expect(
      flatten([
        [null, undefined],
        [0, ""],
      ])
    ).toEqual([null, undefined, 0, ""]);
  });

  test("handles arrays with nested empty arrays", () => {
    expect(flatten([[], [1, 2], [], [3], []])).toEqual([1, 2, 3]);
    expect(flatten([[1], [], [2, 3], []])).toEqual([1, 2, 3]);
  });

  test("works with single array", () => {
    expect(flatten([[1, 2, 3, 4, 5]])).toEqual([1, 2, 3, 4, 5]);
    expect(flatten([["a", "b", "c"]])).toEqual(["a", "b", "c"]);
  });

  test("handles arrays with objects", () => {
    const obj1 = { id: 1 };
    const obj2 = { id: 2 };
    const obj3 = { id: 3 };
    expect(flatten([[obj1, obj2], [obj3]])).toEqual([obj1, obj2, obj3]);
  });

  test("preserves duplicates", () => {
    expect(
      flatten([
        [1, 2],
        [2, 3],
        [3, 1],
      ])
    ).toEqual([1, 2, 2, 3, 3, 1]);
    expect(
      flatten([
        ["a", "b"],
        ["b", "c"],
        ["c", "a"],
      ])
    ).toEqual(["a", "b", "b", "c", "c", "a"]);
  });

  test("works with readonly arrays", () => {
    const readonlyArr: readonly (readonly number[])[] = [
      [1, 2],
      [3, 4],
    ];
    expect(flatten(readonlyArr)).toEqual([1, 2, 3, 4]);
  });

  test("handles different depth levels (default full flattening)", () => {
    expect(flatten([[1, [2, [3]]], [4]])).toEqual([1, 2, 3, 4]);
    expect(flatten([[[1, 2]], [[3], 4]])).toEqual([1, 2, 3, 4]);
  });

  test("handles arrays with mixed content", () => {
    expect(
      flatten([
        // @ts-expect-error
        [1, "a"],
        [true, null],
        // @ts-expect-error
        [undefined, 0],
      ])
      // @ts-expect-error
    ).toEqual([1, "a", true, null, undefined, 0]);
    expect(
      flatten([
        // @ts-expect-error
        [{}, []],
        [[1], 2],
      ])
      // @ts-expect-error
    ).toEqual([{}, 1, 2]);
  });
});
