import { describe, expect, test } from 'vitest';
import { Cache } from './pokecache';

describe.each([
  {
    input: {
      key: 'key',
      value: 'value',
    },
    expected: 'value',
  },
  // TODO: more test cases here
])('Cache behavior', ({ input, expected }) => {
  test(`Existing key should return the value`, () => {
    const cache = new Cache(1000 * 60 * 5);
    cache.add<string>(input.key, input.value);

    expect(cache.get<string>(input.key)).toBe(expected);
  });

  test(`Non-existing key should return undefined`, () => {
    const cache = new Cache(1000 * 60 * 5);
    expect(cache.get<string>(input.key)).toBeUndefined();
  });
});
