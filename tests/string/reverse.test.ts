import { describe, expect, test } from "bun:test";
import { reverse } from "../../src/string/reverse.util";

describe("reverse", () => {
  test("reverse", () => {
    expect(reverse("hello")).toBe("olleh");
    expect(reverse("12345")).toBe("54321");
    expect(reverse("a")).toBe("a");
    expect(reverse("")).toBe("");
  });
});
