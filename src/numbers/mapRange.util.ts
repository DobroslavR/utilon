/**
 * Maps a number from one range to another
 */
export const mapRange = (
  value: number,
  {
    fromMin,
    fromMax,
    toMin,
    toMax,
  }: { fromMin: number; fromMax: number; toMin: number; toMax: number }
): number =>
  toMin + ((value - fromMin) * (toMax - toMin)) / (fromMax - fromMin);
