export const escapeRegExpChars = (text) => {
  return text.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, '\\$1')
}
