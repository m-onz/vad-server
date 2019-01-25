
var assert = require('assert')


module.exports = function (state, emitter) {

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
