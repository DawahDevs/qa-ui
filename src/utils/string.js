/**
 * @param {String} words
 * @return {String} each word in string capitalized
 */
export const capitalize = (words = '') => {
  return words
    .split(/\s|-/)
    .map(
      ([char = '', ...rest]) => char.toUpperCase() + rest.join('').toLowerCase()
    )
    .join(' ')
}
