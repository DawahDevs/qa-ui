import { DOWNLOAD_NODE } from 'config/nodes'

/**
 * Insert url into hidden tag (<a />) under index.html
 * then trigger a click to download resource
 * @param {String} url
 * @return {void}
 */
export default (url) => {
  DOWNLOAD_NODE.href = url
  DOWNLOAD_NODE.click()
  DOWNLOAD_NODE.href = ''
}
