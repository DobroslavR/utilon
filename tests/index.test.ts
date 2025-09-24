import { expect, test } from "bun:test";
import { capitalize, toTitleCase } from "../src";

test("capitalize", () => {
  expect(capitalize("hello")).toBe("Hello");
  expect(capitalize("HELLO")).toBe("Hello");
  expect(capitalize("hELLO")).toBe("Hello");
  expect(capitalize("")).toBe("");
  expect(capitalize("a")).toBe("A");
  expect(capitalize("hello world")).toBe("Hello world");
});

test("toTitleCase", () => {
  expect(toTitleCase("hello world")).toBe("Hello World");
  expect(toTitleCase("HELLO WORLD")).toBe("Hello World");
  expect(toTitleCase("hELLO wORLD")).toBe("Hello World");
  expect(toTitleCase("  hello   world  ")).toBe("Hello World");
  expect(toTitleCase("")).toBe("");
  expect(toTitleCase("hello")).toBe("Hello");
  expect(toTitleCase("a b c")).toBe("A B C");
});
