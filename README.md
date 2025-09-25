# Utilon

[![npm version](https://badge.fury.io/js/utilon.svg)](https://badge.fury.io/js/utilon)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A comprehensive TypeScript utility library with zero dependencies. Utilon provides type-safe, well-tested utility functions for arrays, strings, numbers, dates, and objects.

## ✨ Features

- **Type-safe**: Full TypeScript support with strict typing
- **Tree-shakable**: Import only what you need with module-specific exports
- **Zero dependencies**: Lightweight and fast
- **Well-tested**: Comprehensive test suite
- **Modern**: Uses latest TypeScript features and best practices

## 📦 Installation

```bash
# Using npm
npm install utilon

# Using yarn
yarn add utilon

# Using pnpm
pnpm add utilon

# Using bun
bun add utilon
```

## 🚀 Usage

Utilon provides tree-shakable imports for optimal bundle sizes. Import only the utilities you need:

### Array Utilities

```typescript
import { unique, chunk, groupBy, sortBy } from "utilon/array";

// Remove duplicates
unique([1, 2, 2, 3, 3, 3]); // [1, 2, 3]

// Split into chunks
chunk([1, 2, 3, 4, 5], 2); // [[1, 2], [3, 4], [5]]

// Group by property
groupBy(
  [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 25 },
  ],
  (user) => user.age.toString()
);
// { '25': [{ name: 'Alice', age: 25 }, { name: 'Bob', age: 25 }] }

// Sort by property
sortBy(
  [
    { name: "Alice", age: 30 },
    { name: "Bob", age: 25 },
  ],
  (user) => user.age
);
// [{ name: 'Bob', age: 25 }, { name: 'Alice', age: 30 }]
```

### String Utilities

```typescript
import { capitalize, toCamelCase, toKebabCase, isEmail } from "utilon/string";

// Capitalize first letter
capitalize("hello world"); // 'Hello world'

// Convert to camelCase
toCamelCase("hello world example"); // 'helloWorldExample'

// Convert to kebab-case
toKebabCase("HelloWorldExample"); // 'hello-world-example'

// Validate email
isEmail("user@example.com"); // true
```

### Number Utilities

```typescript
import { clamp, round, formatNumber, randomInt } from "utilon/numbers";

// Clamp value between min and max
clamp(15, 0, 10); // 10

// Round to decimal places
round(3.14159, 2); // 3.14

// Format with thousands separators
formatNumber(1234567); // '1,234,567'

// Generate random integer
randomInt(1, 10); // Random number between 1 and 10
```

### Date Utilities

```typescript
import { formatDate, addDays, isToday, getRelativeTime } from "utilon/date";

// Format date
formatDate(new Date()); // 'January 1, 2024'

// Add days to date
addDays(new Date(), 7); // Date 7 days from now

// Check if date is today
isToday(new Date()); // true

// Get relative time
getRelativeTime(new Date(Date.now() - 3600000)); // '1 hour ago'
```

## 📚 API Reference

### Array Functions

| Function                                                                         | Description                              |
| -------------------------------------------------------------------------------- | ---------------------------------------- |
| `unique<T>(arr: T[])`                                                            | Removes duplicate values                 |
| `uniqueBy<T, K>(arr: T[], keyFn: (item: T) => K)`                                | Removes duplicates based on key function |
| `chunk<T>(arr: T[], size: number)`                                               | Splits array into chunks                 |
| `groupBy<T>(arr: T[], keyFn: (item: T) => string)`                               | Groups items by key                      |
| `shuffle<T>(arr: T[])`                                                           | Randomly shuffles array                  |
| `range(start: number, end: number)`                                              | Creates number range                     |
| `intersection<T>(...arrays: T[][])`                                              | Finds intersection of arrays             |
| `difference<T>(...arrays: T[][])`                                                | Finds difference between arrays          |
| `flatten<T>(arr: T[][])`                                                         | Flattens nested arrays                   |
| `union<T>(...arrays: T[][])`                                                     | Creates union of arrays                  |
| `sortBy<T, K>(arr: T[], keyFn: (item: T) => K)`                                  | Sorts by key (ascending)                 |
| `sortByDesc<T, K>(arr: T[], keyFn: (item: T) => K)`                              | Sorts by key (descending)                |
| `compact<T>(arr: (T \| null \| undefined \| false \| 0 \| '')[])`                | Removes falsy values                     |
| `partition<T>(arr: T[], predicate: (item: T) => boolean)`                        | Splits array based on predicate          |
| `dropWhile<T>(arr: T[], predicate: (item: T) => boolean)`                        | Removes items from start                 |
| `dropRightWhile<T>(arr: T[], predicate: (item: T) => boolean)`                   | Removes items from end                   |
| `frequency<T>(arr: T[])`                                                         | Creates frequency map                    |
| `count<T>(arr: T[], predicate: (item: T, index: number, array: T[]) => boolean)` | Counts items matching predicate          |
| `every<T>(arr: T[], predicate: (item: T, index: number, array: T[]) => boolean)` | Tests if all items pass predicate        |
| `some<T>(arr: T[], predicate: (item: T, index: number, array: T[]) => boolean)`  | Tests if any item passes predicate       |

### String Functions

| Function                                | Description              |
| --------------------------------------- | ------------------------ |
| `capitalize(str: string)`               | Capitalizes first letter |
| `toTitleCase(str: string)`              | Converts to title case   |
| `toCamelCase(str: string)`              | Converts to camelCase    |
| `toKebabCase(str: string)`              | Converts to kebab-case   |
| `toSnakeCase(str: string)`              | Converts to snake_case   |
| `isEmail(str: string)`                  | Validates email format   |
| `truncate(str: string, length: number)` | Truncates with ellipsis  |
| `removeWhitespace(str: string)`         | Removes all whitespace   |
| `reverse(str: string)`                  | Reverses string          |

### Number Functions

| Function                                               | Description                       |
| ------------------------------------------------------ | --------------------------------- |
| `clamp(value: number, min: number, max: number)`       | Clamps value between min/max      |
| `round(value: number, decimals?: number)`              | Rounds to decimal places          |
| `formatNumber(value: number)`                          | Formats with thousands separators |
| `isEven(value: number)`                                | Checks if number is even          |
| `isOdd(value: number)`                                 | Checks if number is odd           |
| `randomInt(min: number, max: number)`                  | Generates random integer          |
| `randomFloat(min: number, max: number)`                | Generates random float            |
| `degreesToRadians(degrees: number)`                    | Converts degrees to radians       |
| `radiansToDegrees(radians: number)`                    | Converts radians to degrees       |
| `percentage(value: number, total: number)`             | Calculates percentage             |
| `percentageDifference(value1: number, value2: number)` | Calculates percentage difference  |
| `inRange(value: number, min: number, max: number)`     | Checks if value is in range       |
| `mapRange(value: number, config: RangeConfig)`         | Maps value between ranges         |
| `formatBytes(bytes: number)`                           | Formats bytes to human readable   |
| `factorial(n: number)`                                 | Calculates factorial              |

### Date Functions

| Function                                 | Description                 |
| ---------------------------------------- | --------------------------- |
| `formatDate(date?: Date)`                | Formats date (long format)  |
| `formatDateTime(date?: Date)`            | Formats date and time       |
| `startOfDay(date: Date)`                 | Gets start of day           |
| `endOfDay(date: Date)`                   | Gets end of day             |
| `startOfWeek(date: Date)`                | Gets start of week          |
| `endOfWeek(date: Date)`                  | Gets end of week            |
| `startOfMonth(date: Date)`               | Gets start of month         |
| `endOfMonth(date: Date)`                 | Gets end of month           |
| `addDays(date: Date, days: number)`      | Adds days to date           |
| `addMonths(date: Date, months: number)`  | Adds months to date         |
| `addYears(date: Date, years: number)`    | Adds years to date          |
| `diffInDays(date1: Date, date2: Date)`   | Calculates day difference   |
| `diffInMonths(date1: Date, date2: Date)` | Calculates month difference |
| `isToday(date: Date)`                    | Checks if date is today     |
| `isYesterday(date: Date)`                | Checks if date is yesterday |
| `isTomorrow(date: Date)`                 | Checks if date is tomorrow  |
| `isPast(date: Date)`                     | Checks if date is in past   |
| `isFuture(date: Date)`                   | Checks if date is in future |
| `getRelativeTime(date: Date)`            | Gets relative time string   |

## 🛠️ Development

### Prerequisites

- Node.js 18+
- Bun (recommended) or npm/yarn/pnpm

### Setup

```bash
# Clone the repository
git clone https://github.com/DobroslavR/utilon.git
cd utilon

# Install dependencies
bun install

# Run tests
bun test

# Build the library
bun run build

# Run linter
bun run lint

# Format code
bun run format

# Type check
bun run typecheck
```

### Available Scripts

| Script                | Description                  |
| --------------------- | ---------------------------- |
| `bun test`            | Run test suite               |
| `bun run build`       | Build the library            |
| `bun run dev`         | Build in watch mode          |
| `bun run lint`        | Run Biome linter             |
| `bun run format`      | Format code with Biome       |
| `bun run typecheck`   | Run TypeScript type checking |
| `bun run release:tag` | Create new release tag       |

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

### Guidelines

1. Follow the existing code style (enforced by Biome)
2. Add tests for new functionality
3. Update documentation as needed
4. Ensure TypeScript types are correct
5. Follow semantic commit messages

## 📄 License

MIT © [Dobroslav Radosavljevic](https://github.com/DobroslavR)

## 🙏 Acknowledgments

- Built with [TypeScript](https://www.typescriptlang.org/)
- Tested with [Bun](https://bun.sh/)
- Linted with [Biome](https://biomejs.dev/)
- Enhanced with [Ultracite](https://ultracite.dev/)
