import { describe, expect, test } from "bun:test";
import { toKebabCase } from "../../src/string/toKebabCase.util";

describe("toKebabCase", () => {
  test("toKebabCase", () => {
    expect(toKebabCase("helloWorld")).toBe("hello-world");
    expect(toKebabCase("theQuickBrownFox")).toBe("the-quick-brown-fox");
    expect(toKebabCase("user_name")).toBe("user-name");
    expect(toKebabCase("")).toBe("");
  });
});
