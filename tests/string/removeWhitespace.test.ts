import { describe, expect, test } from "bun:test";
import { removeWhitespace } from "../../src/string/removeWhitespace.util";

describe("removeWhitespace", () => {
  test("removeWhitespace", () => {
    expect(removeWhitespace("hello world")).toBe("helloworld");
    expect(removeWhitespace("  hello   world  ")).toBe("helloworld");
    expect(removeWhitespace("a\tb\nc")).toBe("abc");
    expect(removeWhitespace("")).toBe("");
  });
});
