import { describe, expect, test } from "bun:test";
import {
  addDays,
  addMonths,
  addYears,
  diffInDays,
  diffInMonths,
  endOfDay,
  endOfMonth,
  endOfWeek,
  formatDate,
  formatDateTime,
  getRelativeTime,
  isFuture,
  isPast,
  isToday,
  isTomorrow,
  isYesterday,
  startOfDay,
  startOfMonth,
  startOfWeek,
} from "../src/date";

const RELATIVE_TIME_REGEX = /in \d+ hour/;

describe("Date Utilities", () => {
  test("formatDate", () => {
    const date = new Date("2023-12-25");
    expect(formatDate(date)).toBe("December 25, 2023");
  });

  test("formatDateTime", () => {
    const date = new Date("2023-12-25T10:30:00");
    const result = formatDateTime(date);
    expect(result).toContain("December 25, 2023");
    expect(result).toContain("10:30");
  });

  test("startOfDay", () => {
    const date = new Date("2023-12-25T10:30:45");
    const result = startOfDay(date);
    expect(result.getHours()).toBe(0);
    expect(result.getMinutes()).toBe(0);
    expect(result.getSeconds()).toBe(0);
    expect(result.getMilliseconds()).toBe(0);
  });

  test("endOfDay", () => {
    const date = new Date("2023-12-25T10:30:45");
    const result = endOfDay(date);
    expect(result.getHours()).toBe(23);
    expect(result.getMinutes()).toBe(59);
    expect(result.getSeconds()).toBe(59);
    expect(result.getMilliseconds()).toBe(999);
  });

  test("startOfWeek", () => {
    // Monday
    const monday = new Date("2023-12-25"); // This was a Monday
    const result = startOfWeek(monday);
    expect(result.getDay()).toBe(0); // Sunday
  });

  test("endOfWeek", () => {
    // Monday
    const monday = new Date("2023-12-25"); // This was a Monday
    const result = endOfWeek(monday);
    expect(result.getDay()).toBe(6); // Saturday
  });

  test("startOfMonth", () => {
    const date = new Date("2023-12-25");
    const result = startOfMonth(date);
    expect(result.getDate()).toBe(1);
    expect(result.getMonth()).toBe(11); // December
    expect(result.getFullYear()).toBe(2023);
  });

  test("endOfMonth", () => {
    const date = new Date("2023-12-25");
    const result = endOfMonth(date);
    expect(result.getDate()).toBe(31);
    expect(result.getMonth()).toBe(11); // December
    expect(result.getFullYear()).toBe(2023);
    expect(result.getHours()).toBe(23);
    expect(result.getMinutes()).toBe(59);
    expect(result.getSeconds()).toBe(59);
    expect(result.getMilliseconds()).toBe(999);
  });

  test("addDays", () => {
    const date = new Date("2023-12-25");
    const result = addDays(date, 5);
    expect(result.getDate()).toBe(30);
    expect(result.getMonth()).toBe(11); // December
  });

  test("addMonths", () => {
    const date = new Date("2023-12-25");
    const result = addMonths(date, 2);
    expect(result.getMonth()).toBe(1); // February
    expect(result.getFullYear()).toBe(2024);
  });

  test("addYears", () => {
    const date = new Date("2023-12-25");
    const result = addYears(date, 2);
    expect(result.getFullYear()).toBe(2025);
  });

  test("diffInDays", () => {
    const date1 = new Date("2023-12-25");
    const date2 = new Date("2023-12-30");
    expect(diffInDays(date1, date2)).toBe(5);
    expect(diffInDays(date2, date1)).toBe(5);
  });

  test("diffInMonths", () => {
    const date1 = new Date("2023-01-15");
    const date2 = new Date("2023-07-15");
    expect(diffInMonths(date1, date2)).toBe(6);
  });

  test("isToday", () => {
    const today = new Date();
    expect(isToday(today)).toBe(true);

    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    expect(isToday(yesterday)).toBe(false);
  });

  test("isYesterday", () => {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    expect(isYesterday(yesterday)).toBe(true);

    const today = new Date();
    expect(isYesterday(today)).toBe(false);
  });

  test("isTomorrow", () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    expect(isTomorrow(tomorrow)).toBe(true);

    const today = new Date();
    expect(isTomorrow(today)).toBe(false);
  });

  test("isPast", () => {
    const past = new Date();
    past.setFullYear(past.getFullYear() - 1);
    expect(isPast(past)).toBe(true);

    const future = new Date();
    future.setFullYear(future.getFullYear() + 1);
    expect(isPast(future)).toBe(false);
  });

  test("isFuture", () => {
    const future = new Date();
    future.setFullYear(future.getFullYear() + 1);
    expect(isFuture(future)).toBe(true);

    const past = new Date();
    past.setFullYear(past.getFullYear() - 1);
    expect(isFuture(past)).toBe(false);
  });

  test("getRelativeTime", () => {
    const now = new Date();
    const past = new Date(now.getTime() - 1000 * 60 * 30); // 30 minutes ago
    const result = getRelativeTime(past);
    expect(result).toContain("30 minutes ago");

    const future = new Date(now.getTime() + 1000 * 60 * 60 * 2); // 2 hours from now
    const futureResult = getRelativeTime(future);
    expect(futureResult).toMatch(RELATIVE_TIME_REGEX);
  });
});
