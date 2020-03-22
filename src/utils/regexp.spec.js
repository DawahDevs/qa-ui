import * as regexp from './regexp'

describe('utils/escapeRegExpChars', () => {
  test('escapeRegExpChars', () => {
    const actual = regexp.escapeRegExpChars('$1,000.00')
    const expected = '\\$1,000\\.00'

    expect(actual).toBe(expected)
  })
})
