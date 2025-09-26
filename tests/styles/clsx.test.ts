import { describe, expect, test } from "bun:test";
import { clsx } from "../../src/styles/clsx.util";

describe("clsx", () => {
  describe("basic inputs", () => {
    test("handles empty input", () => {
      expect(clsx()).toBe("");
    });

    test("handles single string", () => {
      expect(clsx("foo")).toBe("foo");
    });

    test("handles multiple strings", () => {
      expect(clsx("foo", "bar")).toBe("foo bar");
    });

    test("handles string with spaces", () => {
      expect(clsx("foo bar")).toBe("foo bar");
    });
  });

  describe("falsy primitives", () => {
    test("ignores null", () => {
      expect(clsx("foo", null, "bar")).toBe("foo bar");
    });

    test("ignores undefined", () => {
      expect(clsx("foo", undefined, "bar")).toBe("foo bar");
    });

    test("ignores false", () => {
      expect(clsx("foo", false, "bar")).toBe("foo bar");
    });

    test("ignores empty string", () => {
      expect(clsx("foo", "", "bar")).toBe("foo bar");
    });

    test("ignores zero", () => {
      expect(clsx("foo", 0, "bar")).toBe("foo bar");
    });

    test("handles only falsy values", () => {
      expect(clsx(null, undefined, false, "", 0)).toBe("");
    });
  });

  describe("numbers", () => {
    test("includes truthy numbers", () => {
      expect(clsx("foo", 1, "bar")).toBe("foo 1 bar");
    });

    test("includes negative numbers", () => {
      expect(clsx("foo", -1, "bar")).toBe("foo -1 bar");
    });

    test("includes decimal numbers", () => {
      expect(clsx("foo", 3.14, "bar")).toBe("foo 3.14 bar");
    });

    test("excludes zero", () => {
      expect(clsx("foo", 0, "bar")).toBe("foo bar");
    });
  });

  describe("boolean values", () => {
    test("ignores boolean true", () => {
      expect(clsx("foo", true as any, "bar")).toBe("foo bar");
    });

    test("ignores boolean false", () => {
      expect(clsx("foo", false, "bar")).toBe("foo bar");
    });
  });

  describe("objects", () => {
    test("includes keys with truthy values", () => {
      expect(clsx({ foo: true, bar: 1, baz: "yes" })).toBe("foo bar baz");
    });

    test("excludes keys with falsy values", () => {
      expect(
        clsx({ foo: true, bar: false, baz: null, qux: undefined, test: 0 })
      ).toBe("foo");
    });

    test("handles mixed object with strings", () => {
      expect(clsx("base", { foo: true, bar: false }, "end")).toBe(
        "base foo end"
      );
    });

    test("handles empty object", () => {
      expect(clsx("foo", {}, "bar")).toBe("foo bar");
    });
  });

  describe("arrays", () => {
    test("flattens simple arrays", () => {
      expect(clsx(["foo", "bar"])).toBe("foo bar");
    });

    test("flattens nested arrays", () => {
      expect(clsx(["foo", ["bar", "baz"]])).toBe("foo bar baz");
    });

    test("flattens deeply nested arrays", () => {
      expect(clsx(["foo", ["bar", ["baz", "qux"]]])).toBe("foo bar baz qux");
    });

    test("filters falsy values in arrays", () => {
      expect(clsx(["foo", null, "bar", false, "baz"])).toBe("foo bar baz");
    });

    test("handles mixed arrays with objects", () => {
      expect(clsx(["foo", { bar: true, baz: false }, "qux"])).toBe(
        "foo bar qux"
      );
    });

    test("handles empty arrays", () => {
      expect(clsx("foo", [], "bar")).toBe("foo bar");
    });
  });

  describe("complex mixed inputs", () => {
    test("handles complex example from docs", () => {
      expect(clsx("a", null, ["b", { c: 1, d: 0 }])).toBe("a b c");
    });

    test("handles another complex example from docs", () => {
      expect(clsx({ a: true, b: false }, ["c", ["d", { e: 1 }]])).toBe(
        "a c d e"
      );
    });

    test("handles conditional classes example from docs", () => {
      expect(clsx("btn", false, { active: 1, disabled: 0 })).toBe("btn active");
    });

    test("handles deeply nested mixed structure", () => {
      expect(
        clsx(
          "base",
          [
            "array-item",
            {
              conditional: true,
              hidden: false,
            },
            ["nested", ["deeply", { final: 1 }]],
          ],
          { active: true },
          null,
          "end"
        )
      ).toBe("base array-item conditional nested deeply final active end");
    });
  });

  describe("edge cases", () => {
    test("handles symbols (ignored)", () => {
      expect(clsx("foo", Symbol("test") as any, "bar")).toBe("foo bar");
    });

    test("handles functions (ignored)", () => {
      const testFn = () => "test";
      expect(clsx("foo", testFn as any, "bar")).toBe("foo bar");
    });

    /*     test("handles bigint (ignored)", () => {
      expect(clsx("foo", 123n as any, "bar")).toBe("foo bar");
    }); */

    test("preserves order of processing", () => {
      expect(clsx("z", ["y", "x"], { w: true, v: true })).toBe("z y x w v");
    });

    test("handles object with numeric keys", () => {
      expect(clsx({ 1: true, 2: false, 3: true })).toBe("1 3");
    });

    test("handles objects with special characters in keys", () => {
      expect(
        clsx({ "btn-primary": true, "text-sm": true, hidden: false })
      ).toBe("btn-primary text-sm");
    });

    test("handles very large number of arguments", () => {
      const args = Array.from({ length: 100 }, (_, i) => `class${i}`);
      const result = clsx(...args);
      expect(result).toBe(args.join(" "));
    });
  });

  describe("performance characteristics", () => {
    test("handles large arrays efficiently", () => {
      const largeArray = Array.from({ length: 1000 }, (_, i) => `class${i}`);
      const result = clsx(largeArray);
      expect(result).toBe(largeArray.join(" "));
    });

    test("handles deeply nested arrays efficiently", () => {
      let nested: any = "final";
      for (let i = 0; i < 100; i++) {
        nested = [nested];
      }
      expect(clsx("start", nested, "end")).toBe("start final end");
    });
  });
});
