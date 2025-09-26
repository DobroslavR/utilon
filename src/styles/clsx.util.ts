/**
 * A single class value allowed by `clsx`.
 * Matches classic `clsx` behavior (strings, numbers, arrays, and object maps).
 */
export type ClassValue =
  | string
  | number
  | null
  | false
  | undefined
  | ClassDictionary
  | ClassArray;

/** A dictionary of className => truthy flag. */
export type ClassDictionary = { readonly [className: string]: unknown };

/** A nested array of ClassValue. */
export type ClassArray = readonly ClassValue[];

/**
 * Processes an array value by pushing its children to the stack in reverse order.
 */
const processArray = (value: ClassArray, stack: ClassValue[]): void => {
  for (let i = value.length - 1; i >= 0; i--) {
    stack.push(value[i] as ClassValue);
  }
};

/**
 * Processes an object value by adding keys with truthy values to the output.
 */
const processObject = (value: ClassDictionary, out: string[]): void => {
  // for..in is faster than Object.keys() for hot paths and avoids creating a keys array.
  for (const key in value as object) {
    if (value[key as keyof typeof value]) {
      out.push(key);
    }
  }
};

/**
 * Processes a single value and adds it to output or stack as appropriate.
 */
const processValue = (
  value: ClassValue,
  out: string[],
  stack: ClassValue[]
): void => {
  const t = typeof value;

  // Fast paths: string or number (truthy numbers only; 0 was filtered above).
  if (t === "string" || t === "number") {
    out.push(String(value));
    return;
  }

  if (Array.isArray(value)) {
    processArray(value, stack);
    return;
  }

  if (t === "object") {
    processObject(value as ClassDictionary, out);
  }

  // All other types (symbol, function, bigint, boolean true) are ignored to match clsx norms.
  // Note: boolean true is truthy but shouldn't become "true" class — clsx ignores it.
};

/**
 * Build a space-separated class string from a flexible set of inputs.
 *
 * @param args - Class values to combine
 * @returns A space-separated string of class names
 *
 * ### Rules (compatible with `clsx`):
 * - Falsy primitives (`false`, `null`, `undefined`, `0`, `''`) are ignored.
 * - Numbers are included **only if truthy** (so `0` is ignored).
 * - Objects contribute their **keys** whose values are truthy.
 * - Arrays are flattened to any depth.
 *
 * ### Performance notes:
 * - Uses an iterative stack (no recursion).
 * - Pushes directly to a shared result buffer and a single `join(' ')`.
 * - Avoids intermediate string concatenations inside the loop.
 *
 * @example
 * ```ts
 * clsx('a', null, ['b', { c: 1, d: 0 }]) // "a b c"
 * clsx({ a: true, b: false }, ['c', ['d', { e: 1 }]]) // "a c d e"
 * clsx('btn', 0 && 'hidden', { active: 1, disabled: 0 }) // "btn active"
 * ```
 */
export const clsx = (...args: readonly ClassValue[]): string => {
  // Result buffer; one join at the end is typically faster than repeated concatenation.
  const out: string[] = [];

  // Use a LIFO stack to flatten arrays iteratively (no recursion).
  // We avoid copying the original args array by pushing indices in reverse.
  const stack: ClassValue[] = [];
  for (let i = args.length - 1; i >= 0; i--) {
    // Push as-is; falsy filtering happens on pop for better locality.
    stack.push(args[i] as ClassValue);
  }

  while (stack.length) {
    const value = stack.pop();
    if (!value) {
      continue; // ignore falsy primitives (matches clsx behavior)
    }

    processValue(value, out, stack);
  }

  return out.join(" ");
};
