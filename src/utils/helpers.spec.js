import * as helpers from './helpers'

describe('utils/helpers', () => {
  test('insertIf', () => {
    const actual = helpers.insertIf(true, { a: 1 })
    const expected = { a: 1 }

    expect(actual).toEqual(expected)
  })

  test('insertIf false', () => {
    const actual = helpers.insertIf(false, { a: 1 })
    const expected = {}

    expect(actual).toEqual(expected)
  })

  test('insertIf with alt ', () => {
    const actual = helpers.insertIf(false, { a: 1 }, { b: 2 })
    const expected = { b: 2 }

    expect(actual).toEqual(expected)
  })

  test('pipe', () => {
    const minusFive = jest.fn((arg) => arg - 5)
    const double = jest.fn((arg) => arg * 2)
    const addTen = jest.fn((arg) => arg + 10)

    const result = helpers.pipe(minusFive, double, addTen)(100)

    expect(minusFive).toBeCalledWith(100)
    expect(double).toBeCalledWith(95)
    expect(addTen).toBeCalledWith(190)
    expect(result).toBe(200)
  })

  test('pipe many args', () => {
    const sum = jest.fn((argA, argB) => argA + argB)
    const double = jest.fn((arg) => arg * 2)

    const sumThenDouble = helpers.pipe(sum, double)
    const result = sumThenDouble(1, 2)

    expect(sum).toBeCalledWith(1, 2)
    expect(double).toBeCalledWith(3)
    expect(result).toBe(6)
  })

  test('compose', () => {
    const minusFive = jest.fn((arg) => arg - 5)
    const double = jest.fn((arg) => arg * 2)
    const addTen = jest.fn((arg) => arg + 10)

    const result = helpers.compose(minusFive, double, addTen)(100)

    expect(addTen).toBeCalledWith(100)
    expect(double).toBeCalledWith(110)
    expect(minusFive).toBeCalledWith(220)
    expect(result).toBe(215)
  })

  test('compose many args', () => {
    const sum = jest.fn((argA, argB) => argA + argB)
    const double = jest.fn((arg) => arg * 2)

    // Sum and Double functions are swapped from the pipe
    // implementation when using compose
    const sumThenDouble = helpers.compose(double, sum)
    const result = sumThenDouble(1, 2)

    expect(sum).toBeCalledWith(1, 2)
    expect(double).toBeCalledWith(3)
    expect(result).toBe(6)
  })
})
