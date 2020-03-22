import { MACOS, IOS } from 'constants/platforms'

export const isApple = () => {
  const { platform } = window.navigator

  return MACOS.indexOf(platform) !== -1 || IOS.indexOf(platform) !== -1
}
