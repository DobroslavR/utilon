import { describe, expect, test } from "bun:test";
import { toTitleCase } from "../../src/string/toTitleCase.util";

describe("toTitleCase", () => {
  test("toTitleCase", () => {
    expect(toTitleCase("hello world")).toBe("Hello World");
    expect(toTitleCase("the quick brown fox")).toBe("The Quick Brown Fox");
    expect(toTitleCase("")).toBe("");
    expect(toTitleCase("a b c")).toBe("A B C");
  });
});
