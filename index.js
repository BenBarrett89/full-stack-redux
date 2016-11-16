import makeStore from './server/store'
import startServer from './server/server'

export const store = makeStore()
startServer(store)

// load the entries in from JSON file and begin
store.dispatch({
  type: 'SET_ENTRIES',
  entries: require('./entries.json')
})
store.dispatch({type: 'NEXT'})
