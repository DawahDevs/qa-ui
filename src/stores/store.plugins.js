import {
  gettersPlugin,
  loggerPlugin,
  persistPlugin,
  routerPlugin,
  notificationsPlugin,
} from '@anew/plugins'
import Router from '@anew/router'

import { PERSIST_KEY } from 'constants/app'
import history from 'config/history'

export default [
  gettersPlugin,

  ...(process.env.NODE_ENV === 'development' ? [loggerPlugin()] : []),

  routerPlugin({
    history,
    router: Router,
  }),

  notificationsPlugin({
    max: 5,
    limit: {
      top: ['center', 'right'],
      bottom: ['center', 'right'],
    },
  }),

  persistPlugin({
    key: PERSIST_KEY,

    onPersist(state) {
      return state
    },
  }),
]
