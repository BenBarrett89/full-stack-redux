import Server from 'socket.io'

export default function startServer (store) {
  const io = new Server().attach(8090)

  // when the state in the store changes, push it to all connections
  store.subscribe(
    () => io.emit('state', store.getState().toJS())
  )

  // when someone connects, send them the state
  io.on('connection', (socket) => {
    socket.emit('state', store.getState().toJS())
    socket.on('action', store.dispatch.bind(store)) // security concern
  })
}
