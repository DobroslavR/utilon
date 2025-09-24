import { expect, test } from "bun:test";
import { myFunction } from "../src";

test("myFunction", () => {
  expect(myFunction()).toBe("Hello, world!");
});
