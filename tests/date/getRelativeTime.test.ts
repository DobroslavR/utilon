import { describe, expect, test } from "bun:test";
import { getRelativeTime } from "../../src/date/getRelativeTime.util";

const RELATIVE_TIME_REGEX = /in \d+ hour/;

describe("getRelativeTime", () => {
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
