import { describe, expect, test } from "bun:test";
import { partition } from "../../src/array/partition.util";

describe("partition", () => {
  test("partition", () => {
    const [even, odd] = partition([1, 2, 3, 4, 5, 6], (n) => n % 2 === 0);
    expect(even).toEqual([2, 4, 6]);
    expect(odd).toEqual([1, 3, 5]);
  });

  test("returns empty tuples for empty input", () => {
    const source: number[] = [];
    const [pass, fail] = partition(source, (value) => value > 0);

    expect(pass).toEqual([]);
    expect(fail).toEqual([]);
    expect(source).toEqual([]);
  });

  test("preserves original ordering in both buckets", () => {
    const values = [
      { id: 1, active: true },
      { id: 2, active: false },
      { id: 3, active: true },
      { id: 4, active: false },
    ];

    const [active, inactive] = partition(values, (item) => item.active);

    expect(active).toEqual([
      { id: 1, active: true },
      { id: 3, active: true },
    ]);
    expect(inactive).toEqual([
      { id: 2, active: false },
      { id: 4, active: false },
    ]);
    expect(values).toEqual([
      { id: 1, active: true },
      { id: 2, active: false },
      { id: 3, active: true },
      { id: 4, active: false },
    ]);
  });

  test("handles predicates that always return the same value", () => {
    const items = ["a", "b", "c"];

    expect(partition(items, () => true)).toEqual([["a", "b", "c"], []]);
    expect(partition(items, () => false)).toEqual([[], ["a", "b", "c"]]);
  });
});
