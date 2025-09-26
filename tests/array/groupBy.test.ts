import { describe, expect, test } from "bun:test";
import { groupBy } from "../../src/array/groupBy.util";

describe("groupBy", () => {
  test("groupBy", () => {
    const users = [
      { name: "John", age: 25 },
      { name: "Jane", age: 25 },
      { name: "Bob", age: 30 },
    ];
    const result = groupBy(users, (user) => user.age.toString());
    expect(result["25"]).toHaveLength(2);
    expect(result["30"]).toHaveLength(1);
  });
});
