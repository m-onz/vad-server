


var html = require('choo/html')
var css = require('sheetify')
var nav = require('../components/nav.js')

module.exports = function (state, emit) {

  state.scrollTop = 0



  // setInterval(function () {
  //   state.log.unshift('>'+ Math.random())
  //   if (state.log.length > 6) state.log = state.log.slice(0, 5)
  //   emit('render')
  // }, 5500)

  function cam_log (message) {
    return html`
      <p class="f5 lh-copy measure mt0-ns">${message}</p>
    `
  }

  return html`
    <body>
      ${nav(state, emit)}
    <br /><br /><br />
    <article class="vh-100 dt w-100 bg-whitesmoke">
      <div class="dtc v-mid tc white ph3 ph4-l">
        <h1 class="f6 f2-m f-subheadline-l fw6 tc black">This is a full page alert!</h1>
        <div class="ph3">
          <a class="f6 link dim ba bw1 ph3 pv2 mb2 dib purple" href="#0">Button Text</a>
          <a class="f6 link dim ba bw1 ph3 pv2 mb2 dib light-purple" href="#0">Button Text</a>
          <a class="f6 link dim ba bw1 ph3 pv2 mb2 dib hot-pink" href="#0">Button Text</a>
          <a class="f6 link dim ba bw1 ph3 pv2 mb2 dib dark-pink" href="#0">Button Text</a>
        </div>
      </div>
    </article>
    <div class="flex items-center justify-center pa2" style="background: #b93434;">
      <span class="lh-title ml3 white">Drone detected 5 minutes ago</span>
    </div>
    <div class="pa2">
    <main class="cf w-100 ma">
    <article>
      <div class="cf pa2">
        <div class="fl w-50 w-25-m w-20-l pa2">
          <a href="/" class="db link dim tl">
            <dd class="ml0 white truncate w-100 cam-label">CAMERA 1</dd>
            <video width="100%" height="235px" style="background: white;" class="w-100 db outline black-10"  src="http://192.168.0.100:8081"></video>
            <dl class="mt2 f6 lh-copy tl">
              <dt class="clip">Log</dt>
              <div class="cam-log">${state.log.map(cam_log)}</div>
            </dl>
          </a>
        </div>
        <div class="fl w-50 w-25-m w-20-l pa2">
          <a href="/camera/2/full" class="db link dim tl">
            <dd class="ml0 white truncate w-100 cam-label">CAMERA 2</dd>
            <video width="100%" height="235px" style="background: white;" class="w-100 db outline black-10"  src="http://192.168.0.101:8081"></video>
            <dl class="mt2 f6 lh-copy tl">
              <dt class="clip">Log</dt>
              <div class="cam-log">${state.log.map(cam_log)}</div>
            </dl>
          </a>
        </div>
        <div class="fl w-50 w-25-m w-20-l pa2">
          <a href="/camera/3/full" class="db link dim tl">
            <dd class="ml0 white truncate w-100 cam-label">CAMERA 3</dd>
            <video width="100%" height="235px" style="background: white;" class="w-100 db outline black-10"  src="http://192.168.0.102:8081"></video>
            <dl class="mt2 f6 lh-copy tl">
              <dt class="clip">Log</dt>
              <div class="cam-log">${state.log.map(cam_log)}</div>
            </dl>
          </a>
        </div>
        <div class="fl w-50 w-25-m w-20-l pa2">
          <a href="/camera/4/full" class="db link dim tl">
            <dd class="ml0 white truncate w-100 cam-label">CAMERA 4</dd>
            <video width="100%" height="235px" style="background: white;" class="w-100 db outline black-10"  src="http://192.168.0.103:8081"></video>
            <dl class="mt2 f6 lh-copy tl">
              <dt class="clip">Log</dt>
              <div class="cam-log">${state.log.map(cam_log)}</div>
            </dl>
          </a>
        </div>
      </div>
    </article>
    </main>
    </div>

    <footer class="bg-near-black white-80 pv5 pv6-l ph4 footer">
      <p class="f6">
      <a class="f6 link white dim ba bw1 ph3 pv2 mb2 dib" href="https://dronetrackingtechnologies.com">DRONE TRACKING TECHNOLOGIES</a>
      </p>
    </footer>
    </body>
  `
}
