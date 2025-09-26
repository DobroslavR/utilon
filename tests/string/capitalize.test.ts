import { describe, expect, test } from "bun:test";
import { capitalize } from "../../src/string/capitalize.util";

describe("capitalize", () => {
  test("capitalize", () => {
    expect(capitalize("hello")).toBe("Hello");
    expect(capitalize("HELLO")).toBe("Hello");
    expect(capitalize("")).toBe("");
    expect(capitalize("a")).toBe("A");
  });
});
