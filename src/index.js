import 'normalize.css/normalize.css'
import './polyfills'

import { ROOT_NODE } from './config/nodes'
import { VERSION_KEY, PERSIST_KEY } from 'constants/app'
import { unregister } from './assets/scripts/serviceWorker'

import Anew from '@anew/anew'
import Provider from '@anew/provider'
import Router from '@anew/router'

import store from './stores/store'
import routes from './routes/routes'
import Package from '../package.json'

try {
  const storedVersion = localStorage.getItem(VERSION_KEY)

  if (storedVersion !== Package.version) {
    unregister()

    localStorage.removeItem(PERSIST_KEY)
    localStorage.setItem(VERSION_KEY, Package.version)

    // TODO: Notify user version of update
    // When notifications is implemented
  }
} catch (e) {
  // eslint-disable-next-line no-console
  console.error(e)
}

Anew.use(Provider, { store }).use(Router, { routes }).render(ROOT_NODE)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
unregister()
