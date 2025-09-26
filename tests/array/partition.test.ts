import { describe, expect, test } from "bun:test";
import { partition } from "../../src/array/partition.util";

describe("partition", () => {
  test("partition", () => {
    const [even, odd] = partition([1, 2, 3, 4, 5, 6], (n) => n % 2 === 0);
    expect(even).toEqual([2, 4, 6]);
    expect(odd).toEqual([1, 3, 5]);
  });
});
