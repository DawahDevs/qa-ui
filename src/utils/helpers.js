/**
 * An cleaner alternative to a ternary
 *
 * @param {Boolean} condition
 * @param {*} obj data to be returned when condition is met
 * @param {*} alt data to be returned when condition is NOT met
 * @return {*} one of the two given data objects
 */
export const insertIf = (condition, obj, alt = {}) => {
  return condition ? obj : alt
}

/**
 * Composes single-argument functions from left to right. The leftmost
 * function can take multiple arguments as it provides the signature for
 * the resulting composite function.
 *
 * pipe(f, g, h) returns (...args) => h(g(f(...args)))
 *
 * @returns {Function}
 */
export const pipe = (func, ...funcs) => {
  return !funcs.length ? func : (...args) => pipe(...funcs)(func(...args))
}

/**
 * Composes single-argument functions from right to left. The rightmost
 * function can take multiple arguments as it provides the signature for
 * the resulting composite function.
 *
 * compose(f, g, h) returns (...args) => f(g(h(...args)))
 *
 * @returns {Function}
 */
export const compose = (...funcs) => {
  return funcs.reduce((a, b) => (...args) => a(b(...args)))
}
