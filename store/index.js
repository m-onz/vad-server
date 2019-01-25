
var assert = require('assert')
var websocket = require('websocket-stream')
var ws = websocket(`ws://127.0.0.1:3000`)

module.exports = function (state, emitter) {

  // ws.on('data', function (d) {
  //   console.log('........ ', d.toString())
  // })
  //
  // setInterval(function () {
  //   ws.write(JSON.stringify({ png: new Date().toISOString() }))
  // }, 4000)


  // if (!state.current_index) {
    state.current_index = []
    for (var i = 0; i < 3000; i++) {
      state.current_index.push({
        id: i,
        timestamp: new Date().toISOString(),
        message: 'hello! '+i
      })
    }
  // }

  state.scrollTop = 0
  emitter.on('scroll', (scrollTop) => {
    state.scrollTop = scrollTop
    emitter.emit('render')
  })
}
