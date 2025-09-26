import { describe, expect, test } from "bun:test";
import { uniqueBy } from "../../src/array/uniqueBy.util";

describe("uniqueBy", () => {
  test("uniqueBy", () => {
    const users = [
      { id: 1, name: "John" },
      { id: 2, name: "Jane" },
      { id: 1, name: "Johnny" },
    ];
    expect(uniqueBy(users, (user) => user.id)).toHaveLength(2);
    expect(uniqueBy([], (item) => item)).toEqual([]);
  });
});
