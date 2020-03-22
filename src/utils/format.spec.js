import * as format from './format'

describe('utils/format', () => {
  test('outerUrl', () => {
    const actual = format.outerUrl('google.com')
    const expected = '//google.com'

    expect(actual).toBe(expected)
  })

  test('basePath', () => {
    const actual = format.basePath('/app/invoice/:invoice')
    const expected = '/app/invoice/'

    expect(actual).toBe(expected)
  })
})
