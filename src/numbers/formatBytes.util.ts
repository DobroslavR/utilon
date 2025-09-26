/**
 * Formats bytes to human readable format.
 *
 * @param bytes - The number of bytes to format
 * @returns A human-readable string representation of the bytes
 *
 * @example
 * ```ts
 * formatBytes(1024) // "1 KB"
 * formatBytes(1536) // "1.5 KB"
 * formatBytes(0) // "0 Bytes"
 * ```
 */
export const formatBytes = (bytes: number): string => {
  const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
  if (bytes === 0) {
    return "0 Bytes";
  }
  const i = Math.floor(Math.log(bytes) / Math.log(1024));
  return `${Math.round((bytes / 1024 ** i) * 100) / 100} ${sizes[i]}`;
};
