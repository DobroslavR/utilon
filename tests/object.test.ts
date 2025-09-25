import { describe, expect, test } from "bun:test";
import {
  camelCaseKeys,
  cloneDeep,
  get,
  has,
  invert,
  isEmpty,
  isEqual,
  isPlainObject,
  keys,
  keysDeep,
  mapKeys,
  mapValues,
  mergeDeep,
  omit,
  only,
  pick,
  set,
  snakeCaseKeys,
  values,
  without,
} from "../src/object";

describe("Object Utilities", () => {
  test("isPlainObject", () => {
    expect(isPlainObject({})).toBe(true);
    expect(isPlainObject({ a: 1 })).toBe(true);
    expect(isPlainObject(null)).toBe(false);
    expect(isPlainObject([])).toBe(false);
    expect(isPlainObject(new Date())).toBe(false);
  });

  test("cloneDeep", () => {
    const original = { a: 1, b: { c: 2 }, d: [3, 4] };
    const cloned = cloneDeep(original);
    expect(cloned).toEqual(original);
    expect(cloned).not.toBe(original);
    expect(cloned.b).not.toBe(original.b);
  });

  test("keysDeep", () => {
    const obj = { a: 1, b: { c: 2, d: { e: 3 } } };
    const result = keysDeep(obj);
    expect(result).toContain("a");
    expect(result).toContain("b.c");
    expect(result).toContain("b.d.e");
  });

  test("get", () => {
    const obj = { a: { b: { c: 42 } } };
    expect(get(obj, "a.b.c")).toBe(42);
    expect(get(obj, "a.b.d")).toBeUndefined();
    expect(get(obj, "a.b.d", "default")).toBe("default");
  });

  test("set", () => {
    const obj = {};
    const result = set(obj, "a.b.c", 42);
    expect(result.a.b.c).toBe(42);
    expect(obj).not.toBe(result);
  });

  test("mergeDeep", () => {
    const obj1 = { a: 1, b: { c: 2 } };
    const obj2 = { b: { d: 3 }, e: 4 };
    const result = mergeDeep(obj1, obj2);
    expect(result).toEqual({ a: 1, b: { c: 2, d: 3 }, e: 4 });
  });

  test("omit", () => {
    const obj = { a: 1, b: 2, c: 3 };
    const result = omit(obj, ["b", "c"]);
    expect(result).toEqual({ a: 1 });
  });

  test("pick", () => {
    const obj = { a: 1, b: 2, c: 3 };
    const result = pick(obj, ["a", "c"]);
    expect(result).toEqual({ a: 1, c: 3 });
  });

  test("mapValues", () => {
    const obj = { a: 1, b: 2, c: 3 };
    const result = mapValues(obj, (value) => value * 2);
    expect(result).toEqual({ a: 2, b: 4, c: 6 });
  });

  test("mapKeys", () => {
    const obj = { a: 1, b: 2, c: 3 };
    const result = mapKeys(obj, (key) => key.toUpperCase());
    expect(result).toEqual({ A: 1, B: 2, C: 3 });
  });

  test("has", () => {
    const obj = { a: { b: 1 } };
    expect(has(obj, "a")).toBe(true);
    expect(has(obj, "a.b")).toBe(false); // has only checks own properties
    expect(has(obj, "c")).toBe(false);
  });

  test("isEmpty", () => {
    expect(isEmpty({})).toBe(true);
    expect(isEmpty({ a: 1 })).toBe(false);
    expect(isEmpty([])).toBe(true);
    expect(isEmpty([1, 2])).toBe(false);
    expect(isEmpty(null)).toBe(true);
    expect(isEmpty(undefined)).toBe(true);
  });

  test("camelCaseKeys", () => {
    const obj = {
      first_name: "John",
      last_name: "Doe",
      nested: { user_id: 123 },
    };
    const result = camelCaseKeys(obj);
    expect(result).toEqual({
      firstName: "John",
      lastName: "Doe",
      nested: { userId: 123 },
    });
  });

  test("snakeCaseKeys", () => {
    const obj = { firstName: "John", lastName: "Doe", nested: { userId: 123 } };
    const result = snakeCaseKeys(obj);
    expect(result).toEqual({
      first_name: "John",
      last_name: "Doe",
      nested: { user_id: 123 },
    });
  });

  test("without", () => {
    const obj = { a: 1, b: 2, c: 3 };
    const result = without(obj, "b", "c");
    expect(result).toEqual({ a: 1 });
  });

  test("only", () => {
    const obj = { a: 1, b: 2, c: 3 };
    const result = only(obj, "a", "c");
    expect(result).toEqual({ a: 1, c: 3 });
  });

  test("invert", () => {
    const obj = { a: "1", b: "2", c: "3" };
    const result = invert(obj);
    expect(result).toEqual({ "1": "a", "2": "b", "3": "c" });
  });

  test("values", () => {
    const obj = { a: 1, b: 2, c: 3 };
    const result = values(obj);
    expect(result.sort()).toEqual([1, 2, 3]);
  });

  test("keys", () => {
    const obj = { a: 1, b: 2, c: 3 };
    const result = keys(obj);
    expect(result.sort()).toEqual(["a", "b", "c"]);
  });

  test("isEqual", () => {
    expect(isEqual({ a: 1, b: 2 }, { a: 1, b: 2 })).toBe(true);
    expect(isEqual({ a: 1, b: 2 }, { a: 1, c: 2 })).toBe(false);
    expect(isEqual({ a: { b: 1 } }, { a: { b: 1 } })).toBe(true);
    expect(isEqual({ a: { b: 1 } }, { a: { b: 2 } })).toBe(false);
    expect(isEqual(null, null)).toBe(true);
    expect(isEqual(null, {})).toBe(false);
  });
});
