import { describe, expect, test } from "bun:test";
import { truncate } from "../../src/string/truncate.util";

describe("truncate", () => {
  test("truncate", () => {
    expect(truncate("Hello World", 5)).toBe("Hello...");
    expect(truncate("Hello", 10)).toBe("Hello");
    expect(truncate("Hello World", 8)).toBe("Hello Wo...");
    expect(truncate("", 5)).toBe("");
  });
});
