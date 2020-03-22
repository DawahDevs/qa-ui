import * as numbers from './numbers'

describe('utils/numbers', () => {
  test('round (2 decimals)', () => {
    const actual = numbers.round(2.123)
    const expected = 2.12

    expect(actual).toBe(expected)
  })

  test('round (3 decimals)', () => {
    const actual = numbers.round(2.1236, 3)
    const expected = 2.124

    expect(actual).toBe(expected)
  })

  test('round (1 decimals)', () => {
    const actual = numbers.round(2.123, 1)
    const expected = 2.1

    expect(actual).toBe(expected)
  })

  test('round string', () => {
    const actual = numbers.round('2.123')
    const expected = 2.12

    expect(actual).toBe(expected)
  })

  test('round undefined', () => {
    const actual = numbers.round(undefined)
    const expected = 0.0

    expect(actual).toBe(expected)
  })

  test('round wrong number parameter', () => {
    expect(() => {
      numbers.round([])
    }).toThrowError(/ParameterError/)
  })

  test('round wrong decimals parameter', () => {
    expect(() => {
      numbers.round(1, [])
    }).toThrowError(/ParameterError/)
  })
})
