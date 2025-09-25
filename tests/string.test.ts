import { describe, expect, test } from "bun:test";
import {
  capitalize,
  isEmail,
  removeWhitespace,
  reverse,
  toCamelCase,
  toKebabCase,
  toSnakeCase,
  toTitleCase,
  truncate,
} from "../src/string";

describe("String Utilities", () => {
  test("capitalize", () => {
    expect(capitalize("hello")).toBe("Hello");
    expect(capitalize("HELLO")).toBe("Hello");
    expect(capitalize("")).toBe("");
    expect(capitalize("a")).toBe("A");
  });

  test("toTitleCase", () => {
    expect(toTitleCase("hello world")).toBe("Hello World");
    expect(toTitleCase("the quick brown fox")).toBe("The Quick Brown Fox");
    expect(toTitleCase("")).toBe("");
    expect(toTitleCase("a b c")).toBe("A B C");
  });

  test("toCamelCase", () => {
    expect(toCamelCase("hello world")).toBe("helloWorld");
    expect(toCamelCase("the_quick_brown_fox")).toBe("the_quick_brown_fox");
    expect(toCamelCase("user-name")).toBe("user-Name");
    expect(toCamelCase("")).toBe("");
  });

  test("toKebabCase", () => {
    expect(toKebabCase("helloWorld")).toBe("hello-world");
    expect(toKebabCase("theQuickBrownFox")).toBe("the-quick-brown-fox");
    expect(toKebabCase("user_name")).toBe("user-name");
    expect(toKebabCase("")).toBe("");
  });

  test("toSnakeCase", () => {
    expect(toSnakeCase("helloWorld")).toBe("hello_world");
    expect(toSnakeCase("theQuickBrownFox")).toBe("the_quick_brown_fox");
    expect(toSnakeCase("user-name")).toBe("user_name");
    expect(toSnakeCase("")).toBe("");
  });

  test("isEmail", () => {
    expect(isEmail("test@example.com")).toBe(true);
    expect(isEmail("user.name+tag@example.co.uk")).toBe(true);
    expect(isEmail("invalid-email")).toBe(false);
    expect(isEmail("@example.com")).toBe(false);
    expect(isEmail("test@")).toBe(false);
  });

  test("truncate", () => {
    expect(truncate("Hello World", 5)).toBe("Hello...");
    expect(truncate("Hello", 10)).toBe("Hello");
    expect(truncate("Hello World", 8)).toBe("Hello Wo...");
    expect(truncate("", 5)).toBe("");
  });

  test("removeWhitespace", () => {
    expect(removeWhitespace("hello world")).toBe("helloworld");
    expect(removeWhitespace("  hello   world  ")).toBe("helloworld");
    expect(removeWhitespace("a\tb\nc")).toBe("abc");
    expect(removeWhitespace("")).toBe("");
  });

  test("reverse", () => {
    expect(reverse("hello")).toBe("olleh");
    expect(reverse("12345")).toBe("54321");
    expect(reverse("a")).toBe("a");
    expect(reverse("")).toBe("");
  });
});
