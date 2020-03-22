import * as string from './string'

describe('utils/string', () => {
  test('capitalize', () => {
    const actual = string.capitalize('test')
    const expected = 'Test'

    expect(actual).toBe(expected)
  })

  test('capitalize words', () => {
    const actual = string.capitalize('abdelrahman salem')
    const expected = 'Abdelrahman Salem'

    expect(actual).toBe(expected)
  })

  test('capitalize words with dash', () => {
    const actual = string.capitalize('first-name')
    const expected = 'First Name'

    expect(actual).toBe(expected)
  })
})
