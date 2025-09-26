import { describe, expect, test } from "bun:test";
import { toCamelCase } from "../../src/string/toCamelCase.util";

describe("toCamelCase", () => {
  test("toCamelCase", () => {
    expect(toCamelCase("hello world")).toBe("helloWorld");
    expect(toCamelCase("the_quick_brown_fox")).toBe("the_quick_brown_fox");
    expect(toCamelCase("user-name")).toBe("user-Name");
    expect(toCamelCase("")).toBe("");
  });
});
