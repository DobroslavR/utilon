import { describe, expect, test } from "bun:test";
import { formatBytes } from "../../src/numbers/formatBytes.util";

describe("formatBytes", () => {
  test("formatBytes", () => {
    expect(formatBytes(0)).toBe("0 Bytes");
    expect(formatBytes(1024)).toBe("1 KB");
    expect(formatBytes(1024 * 1024)).toBe("1 MB");
    expect(formatBytes(1024 * 1024 * 1024)).toBe("1 GB");
  });
});
