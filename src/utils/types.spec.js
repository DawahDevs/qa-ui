import { ERROR_TYPE } from 'constants/types'
import Types from './types'

describe('utils/types', () => {
  describe('boolean', () => {
    test('true', () => {
      const actual = Types.boolean(true)
      const expected = true

      expect(actual).toBe(expected)
    })

    test('false', () => {
      const actual = Types.boolean(false)
      const expected = true

      expect(actual).toBe(expected)
    })

    test('number', () => {
      const actual = Types.boolean(1)
      const expected = false

      expect(actual).toBe(expected)
    })

    test('undefined', () => {
      const actual = Types.boolean(undefined)
      const expected = false

      expect(actual).toBe(expected)
    })

    test('default', () => {
      const actual = Types.boolean(undefined, false)
      const expected = true

      expect(actual).toBe(expected)
    })
  })

  describe('null', () => {
    test('null', () => {
      const actual = Types.null(null)
      const expected = true

      expect(actual).toBe(expected)
    })

    test('number', () => {
      const actual = Types.null(1)
      const expected = false

      expect(actual).toBe(expected)
    })

    test('undefined', () => {
      const actual = Types.null(undefined)
      const expected = false

      expect(actual).toBe(expected)
    })

    test('default', () => {
      const actual = Types.null(undefined, null)
      const expected = true

      expect(actual).toBe(expected)
    })
  })

  describe('number', () => {
    test('number', () => {
      const actual = Types.number(1)
      const expected = true

      expect(actual).toBe(expected)
    })

    test('boolean', () => {
      const actual = Types.number(true)
      const expected = false

      expect(actual).toBe(expected)
    })

    test('undefined', () => {
      const actual = Types.number(undefined)
      const expected = false

      expect(actual).toBe(expected)
    })

    test('default', () => {
      const actual = Types.number(undefined, 2)
      const expected = true

      expect(actual).toBe(expected)
    })

    test('range', () => {
      const actual = Types.number.range(0, 10)(5)
      const expected = true

      expect(actual).toBe(expected)
    })

    test('range (failed)', () => {
      const actual = Types.number.range(0, 10)(11)
      const expected = false

      expect(actual).toBe(expected)
    })

    test('range default', () => {
      const actual = Types.number.range(0, 10)(undefined, 5)
      const expected = true

      expect(actual).toBe(expected)
    })

    test('range minimum', () => {
      const actual = Types.number.range(0)(Infinity)
      const expected = true

      expect(actual).toBe(expected)
    })

    test('range minimum (failed)', () => {
      const actual = Types.number.range(0)(-1)
      const expected = false

      expect(actual).toBe(expected)
    })

    test('range maxiumum', () => {
      const actual = Types.number.range({ max: 100 })(-Infinity)
      const expected = true

      expect(actual).toBe(expected)
    })

    test('range maxiumum (failed)', () => {
      const actual = Types.number.range({ max: 100 })(101)
      const expected = false

      expect(actual).toBe(expected)
    })
  })

  describe('map', () => {
    test('object alias', () => {
      expect(Types.object).toBe(Types.map)
    })

    test('object', () => {
      const actual = Types.map({})
      const expected = true

      expect(actual).toBe(expected)
    })

    test('object constructor', () => {
      const actual = Types.map(new Object())
      const expected = true

      expect(actual).toBe(expected)
    })

    test('default', () => {
      const actual = Types.map(undefined, {})
      const expected = true

      expect(actual).toBe(expected)
    })

    test('class', () => {
      const actual = Types.map(class {})
      const expected = false

      expect(actual).toBe(expected)
    })

    test('function', () => {
      const actual = Types.map(function () {})
      const expected = false

      expect(actual).toBe(expected)
    })

    test('date', () => {
      const actual = Types.map(new Date())
      const expected = false

      expect(actual).toBe(expected)
    })

    test('object with shape', () => {
      const actual = !!Types.map.shape({
        name: Types.string,
        age: Types.number,
      })({
        name: 'Abdelrahman Salem',
        age: 22,
      })

      const expected = true

      expect(actual).toBe(expected)
    })

    test('object with shape (failed type)', () => {
      const actual = Types.map.shape({ name: Types.string, age: Types.number })(
        {
          name: 'Abdelrahman Salem',
          age: '22',
        }
      )

      const expected = ERROR_TYPE.FAILED_TYPE

      expect(actual).toBe(expected)
    })

    test('object with shape (failed missing prop)', () => {
      const actual = Types.map.shape({ name: Types.string, age: Types.number })(
        {
          name: 'Abdelrahman Salem',
        }
      )

      const expected = ERROR_TYPE.FAILED_TYPE

      expect(actual).toBe(expected)
    })

    test('object with shape returns object', () => {
      const actual = Types.map.shape({ name: Types.string, age: Types.number })(
        {
          name: 'Abdelrahman Salem',
          age: 22,
        }
      )

      const expected = {
        name: 'Abdelrahman Salem',
        age: 22,
      }

      expect(actual).toEqual(expected)
    })

    test('object with shape and defaults', () => {
      const actual = Types.map.shape(
        { name: Types.string, age: Types.number },
        { age: 30 }
      )({
        name: 'Abdelrahman Salem',
        extra: true,
      })

      const expected = {
        name: 'Abdelrahman Salem',
        age: 30,
      }

      expect(actual).toEqual(expected)
    })

    test('object with shape and defaults in arg', () => {
      const actual = Types.map.shape({ name: Types.string, age: Types.number })(
        {
          name: 'Abdelrahman Salem',
          extra: true,
        },
        {
          age: 30,
        }
      )

      const expected = {
        name: 'Abdelrahman Salem',
        age: 30,
      }

      expect(actual).toEqual(expected)
    })
  })

  describe('array', () => {
    test('array', () => {
      const actual = Types.array([])
      const expected = true

      expect(actual).toBe(expected)
    })

    test('default', () => {
      const actual = Types.array(undefined, [])
      const expected = true

      expect(actual).toBe(expected)
    })

    test('array constructor', () => {
      const actual = Types.array(new Array())
      const expected = true

      expect(actual).toBe(expected)
    })

    test('set', () => {
      const actual = Types.array(new Set())
      const expected = false

      expect(actual).toBe(expected)
    })

    test('object', () => {
      const actual = Types.array({})
      const expected = false

      expect(actual).toBe(expected)
    })

    test('array of numbers', () => {
      const actual = Types.array.of(Types.number)([1, 2, 3])
      const expected = true

      expect(actual).toBe(expected)
    })

    test('array of numbers default', () => {
      const actual = Types.array.of(Types.number)([1, undefined, 3], 2)
      const expected = true

      expect(actual).toBe(expected)
    })

    test('array of numbers (fails)', () => {
      const actual = Types.array.of(Types.number)([1, 2, '3'])
      const expected = false

      expect(actual).toBe(expected)
    })

    test('array of object', () => {
      const objectShape = Types.map.shape({
        id: Types.string,
        price: Types.number,
      })

      const actual = Types.array.of(objectShape)([
        { id: '1', price: 1 },
        { id: '2', price: 2 },
      ])

      const expected = true

      expect(actual).toBe(expected)
    })

    test('array of object (fails)', () => {
      const objectShape = Types.map.shape({
        id: Types.string,
        price: Types.number,
      })

      const actual = Types.array.of(objectShape)([
        { id: 1, price: '' },
        { id: '2', price: 2 },
      ])

      const expected = false

      expect(actual).toBe(expected)
    })
  })

  describe('oneOf', () => {
    test('array of numbers', () => {
      const actual = Types.oneOf([1, 2, 3])(1)
      const expected = true

      expect(actual).toBe(expected)
    })

    test('array of numbers default', () => {
      const actual = Types.oneOf([1, 2, 3])(undefined, 1)
      const expected = true

      expect(actual).toBe(expected)
    })

    test('array of numbers (fails)', () => {
      const actual = Types.oneOf([1, 2, 3])(5)
      const expected = false

      expect(actual).toBe(expected)
    })
  })

  describe('oneOfType', () => {
    test('basic types', () => {
      const actual = Types.oneOfType([Types.string, Types.number])(1)
      const expected = true

      expect(actual).toBe(expected)
    })

    test('basic types default', () => {
      const actual = Types.oneOfType([Types.string, Types.number])(undefined, 1)
      const expected = true

      expect(actual).toBe(expected)
    })

    test('basic types (fails)', () => {
      const actual = Types.oneOfType([Types.string, Types.number])(null)
      const expected = false

      expect(actual).toBe(expected)
    })

    test('null', () => {
      const actual = Types.oneOfType([Types.oneOf([1, 2, 3]), Types.null])(null)
      const expected = true

      expect(actual).toBe(expected)

      const actualNumber = Types.oneOfType([
        Types.oneOf([1, 2, 3]),
        Types.null,
      ])(1)
      const expectedNumber = true

      expect(actualNumber).toBe(expectedNumber)
    })

    test('null (failed)', () => {
      const actual = Types.oneOfType([Types.oneOf([1, 2, 3]), Types.null])()
      const expected = false

      expect(actual).toBe(expected)
    })

    test('undefined/optional', () => {
      const actual = Types.oneOfType([
        Types.oneOf([1, 2, 3]),
        Types.undefined,
      ])()
      const expected = true

      expect(actual).toBe(expected)

      const actualNumber = Types.oneOfType([
        Types.oneOf([1, 2, 3]),
        Types.null,
      ])(1)
      const expectedNumber = true

      expect(actualNumber).toBe(expectedNumber)
    })

    test('undefined/optional (failed)', () => {
      const actual = Types.oneOfType([Types.oneOf([1, 2, 3]), Types.undefined])(
        4
      )
      const expected = false

      expect(actual).toBe(expected)
    })
  })

  test('advanced', () => {
    const shape = Types.map.shape(
      {
        admin: Types.boolean,
        salary: Types.oneOfType([Types.number, Types.null]),
        inactive: Types.oneOfType([Types.boolean, Types.undefined]),
        name: Types.string,
        age: Types.number,
        rating: Types.number.range(0, 10),
        relatives: Types.array.of(
          Types.map.shape({
            name: Types.string,
            age: Types.number,
          })
        ),
      },
      {
        admin: true,
        salary: null,
        age: 30,
        rating: 10,
        relatives: {
          age: 23,
        },
      }
    )

    const actual = shape({
      extra: 'SOME EXTRA PROP',
      name: 'Abdelrahman Salem',
      relatives: [
        {
          name: 'Abdelrahman Salem',
          log: true,
        },
      ],
    })

    const expected = {
      admin: true,
      salary: null,
      age: 30,
      rating: 10,
      name: 'Abdelrahman Salem',
      relatives: [
        {
          name: 'Abdelrahman Salem',
          age: 23,
        },
      ],
    }

    expect(actual).toEqual(expected)
  })
})
