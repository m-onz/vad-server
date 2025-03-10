//
var html = require('choo/html')
var css = require('sheetify')

module.exports = function (state, emit) {
  return html`
  <header class="fixed w-100 ph3 pv3 pv3-ns ph4-m ph4-l" style="z-index:99999; background: rgba(39, 80, 78, 0.9)">
    <nav class="f6 fw6 ttu tracked">
      <a class="link dim white dib mr3" href="/" title="home">DTT</a>
      <a class="link dim white dib mr3" href="/" title="broadcast">OVERVIEW</a>
      <a class="link dim white dib mr3" href="/detections" title="broadcast">DRONE DETECTIONS</a>
      <a class="link dim white dib mr3 fr" href="/help" title="about">HELP</a>
    </nav>
  </header>
  `
}
