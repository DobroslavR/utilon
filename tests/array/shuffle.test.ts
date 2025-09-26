import { describe, expect, test } from "bun:test";
import { shuffle } from "../../src/array/shuffle.util";

describe("shuffle", () => {
  test("shuffle", () => {
    const arr = [1, 2, 3, 4, 5];
    const shuffled = shuffle(arr);
    expect(shuffled).toHaveLength(5);
    expect(shuffled.sort()).toEqual([1, 2, 3, 4, 5]);
  });
});
