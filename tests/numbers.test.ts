import { describe, expect, test } from "bun:test";
import {
  clamp,
  degreesToRadians,
  factorial,
  formatBytes,
  formatNumber,
  inRange,
  isEven,
  isOdd,
  mapRange,
  percentage,
  percentageDifference,
  radiansToDegrees,
  randomFloat,
  randomInt,
  round,
} from "../src/numbers";

describe("Number Utilities", () => {
  test("clamp", () => {
    expect(clamp(5, 0, 10)).toBe(5);
    expect(clamp(-5, 0, 10)).toBe(0);
    expect(clamp(15, 0, 10)).toBe(10);
  });

  test("round", () => {
    expect(round(Math.PI, 2)).toBe(3.14);
    expect(round(Math.PI, 0)).toBe(3);
    expect(round(Math.PI)).toBe(3);
  });

  test("formatNumber", () => {
    expect(formatNumber(1_234_567)).toBe("1,234,567");
    expect(formatNumber(1234.56)).toBe("1,234.56");
  });

  test("isEven", () => {
    expect(isEven(2)).toBe(true);
    expect(isEven(3)).toBe(false);
    expect(isEven(0)).toBe(true);
    expect(isEven(-2)).toBe(true);
  });

  test("isOdd", () => {
    expect(isOdd(3)).toBe(true);
    expect(isOdd(2)).toBe(false);
    expect(isOdd(1)).toBe(true);
    expect(isOdd(-1)).toBe(true);
  });

  test("randomInt", () => {
    const result = randomInt(1, 10);
    expect(result).toBeGreaterThanOrEqual(1);
    expect(result).toBeLessThanOrEqual(10);
    expect(Number.isInteger(result)).toBe(true);
  });

  test("randomFloat", () => {
    const result = randomFloat(1, 10);
    expect(result).toBeGreaterThanOrEqual(1);
    expect(result).toBeLessThanOrEqual(10);
  });

  test("degreesToRadians", () => {
    expect(degreesToRadians(180)).toBe(Math.PI);
    expect(degreesToRadians(90)).toBe(Math.PI / 2);
    expect(degreesToRadians(0)).toBe(0);
  });

  test("radiansToDegrees", () => {
    expect(radiansToDegrees(Math.PI)).toBe(180);
    expect(radiansToDegrees(Math.PI / 2)).toBe(90);
    expect(radiansToDegrees(0)).toBe(0);
  });

  test("percentage", () => {
    expect(percentage(25, 100)).toBe(25);
    expect(percentage(1, 4)).toBe(25);
    expect(percentage(0, 100)).toBe(0);
  });

  test("percentageDifference", () => {
    expect(percentageDifference(100, 150)).toBe(50);
    expect(
      Math.abs(percentageDifference(150, 100) - -33.333_333_333_333_33)
    ).toBeLessThan(0.000_000_000_000_1);
  });

  test("inRange", () => {
    expect(inRange(5, 0, 10)).toBe(true);
    expect(inRange(15, 0, 10)).toBe(false);
    expect(inRange(-5, 0, 10)).toBe(false);
    expect(inRange(0, 0, 10)).toBe(true);
    expect(inRange(10, 0, 10)).toBe(true);
  });

  test("mapRange", () => {
    expect(mapRange(5, 0, 10, 0, 100)).toBe(50);
    expect(mapRange(0, 0, 10, 0, 100)).toBe(0);
    expect(mapRange(10, 0, 10, 0, 100)).toBe(100);
  });

  test("formatBytes", () => {
    expect(formatBytes(0)).toBe("0 Bytes");
    expect(formatBytes(1024)).toBe("1 KB");
    expect(formatBytes(1024 * 1024)).toBe("1 MB");
    expect(formatBytes(1024 * 1024 * 1024)).toBe("1 GB");
  });

  test("factorial", () => {
    expect(factorial(0)).toBe(1);
    expect(factorial(1)).toBe(1);
    expect(factorial(5)).toBe(120);
    expect(factorial(10)).toBe(3_628_800);
    expect(Number.isNaN(factorial(-1))).toBe(true);
  });
});
