import { describe, expect, test } from "bun:test";
import { toSnakeCase } from "../../src/string/toSnakeCase.util";

describe("toSnakeCase", () => {
  test("toSnakeCase", () => {
    expect(toSnakeCase("helloWorld")).toBe("hello_world");
    expect(toSnakeCase("theQuickBrownFox")).toBe("the_quick_brown_fox");
    expect(toSnakeCase("user-name")).toBe("user_name");
    expect(toSnakeCase("")).toBe("");
  });
});
