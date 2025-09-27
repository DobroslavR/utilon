/**
 * Maps a number from one range to another.
 *
 * @param value - The value to map
 * @param fromMin - The minimum value of the input range
 * @param fromMax - The maximum value of the input range
 * @param toMin - The minimum value of the output range
 * @param toMax - The maximum value of the output range
 * @returns The mapped value in the new range
 * @throws {RangeError} If the source range has zero width (i.e. `fromMax` equals `fromMin`).
 *
 * @example
 * ```ts
 * mapRange(5, { fromMin: 0, fromMax: 10, toMin: 0, toMax: 100 }) // 50
 * mapRange(0, { fromMin: 0, fromMax: 10, toMin: 100, toMax: 200 }) // 100
 * ```
 */
export const mapRange = (
  value: number,
  {
    fromMin,
    fromMax,
    toMin,
    toMax,
  }: { fromMin: number; fromMax: number; toMin: number; toMax: number }
): number => {
  if (fromMax === fromMin) {
    throw new RangeError(
      "mapRange source range must have a non-zero width (fromMax !== fromMin)."
    );
  }

  return toMin + ((value - fromMin) * (toMax - toMin)) / (fromMax - fromMin);
};
