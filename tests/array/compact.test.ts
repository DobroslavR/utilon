import { describe, expect, test } from "bun:test";
import { compact } from "../../src/array/compact.util";

describe("compact", () => {
  test("compact", () => {
    expect(compact([0, 1, false, 2, "", 3, null, undefined])).toEqual([
      1, 2, 3,
    ]);
    expect(compact([])).toEqual([]);
  });
});
