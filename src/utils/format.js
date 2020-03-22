/**
 * @param {String} link link path
 * @return {String} public path
 */
export const outerUrl = (link) => {
  return !link || link.includes('//') ? link : `//${link}`
}

/**
 * Get base path without parameters
 * @param {String} path
 */
export const basePath = (path) => {
  return path.replace(/:(.*?)$/, '')
}
