import { ParameterError } from 'errors'
/**
 * Roud number to decimals
 * @param {Number|String} number
 * @param {Number} decimals
 * @return {Number} rounded number
 */
export const round = (number = 0, decimals = 2) => {
  if (!new Set(['number', 'string']).has(typeof number)) {
    throw new ParameterError(0, 'number|string', number)
  }
  if (typeof decimals !== 'number') {
    throw new ParameterError(1, 'number', decimals)
  }

  return +(+number).toFixed(decimals)
}
