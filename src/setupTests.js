// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect'
import './polyfills'
import 'core-js'
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import createStore from 'stores/store.create'

/**
 | ------------------
 | Setup Enzyme
 | ------------------
 */

configure({ adapter: new Adapter() })

/**
 | ------------------
 | Setup @anew/store
 | ------------------
 */

global.store = createStore()
global.store.initialState = JSON.parse(JSON.stringify(global.store.get()))
global.store.reset = () => (global.store.state = global.store.initialState)
global.storeByName = {}

global.getStore = (storeName) => {
  if (global.storeByName[storeName]) {
    return global.storeByName[storeName]
  }

  return (global.storeByName[storeName] = {
    api: global.store.api[storeName],
    commit: global.store.commit[storeName],
    dispatch: global.store.dispatch[storeName],
    get: global.store.get[storeName],
    select: global.store.select[storeName],
    core: global.store,
  })
}
