import { describe, expect, test } from "bun:test";
import { isEmail } from "../../src/string/isEmail.util";

describe("isEmail", () => {
  test("isEmail", () => {
    expect(isEmail("test@example.com")).toBe(true);
    expect(isEmail("user.name+tag@example.co.uk")).toBe(true);
    expect(isEmail("invalid-email")).toBe(false);
    expect(isEmail("@example.com")).toBe(false);
    expect(isEmail("test@")).toBe(false);
  });
});
