import { PRINT_NODE } from 'config/nodes'

export default function print(content) {
  const pri = PRINT_NODE.contentWindow

  pri.document.open()
  pri.document.write(content.innerHTML)
  pri.document.close()

  pri.focus()
  pri.print()
}
