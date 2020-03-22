import Store from '@anew/store'
import StoreConfig from './store.config'

export default function createStore() {
  return new Store(StoreConfig)
}
