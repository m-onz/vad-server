
var html = require('choo/html')
var css = require('sheetify')
var nav = require('../components/nav.js')
var debounce = require('lodash/debounce')

var prefix = css`
  :host {
    width: 100%;
    height: 300px;
    display: block;
    overflow: auto;
  }
`

module.exports = function view (state, emit) {

  var rowHeight = 110
  var tableHeight = 500
  var startRowIndex = Math.floor(state.scrollTop / rowHeight)
  var maxVisibleRows = Math.ceil(tableHeight / rowHeight) // round up
  var maxRowIndex = state.current_index.length - 1
  var endRowIndex = Math.min(maxRowIndex, startRowIndex + maxVisibleRows)
  var remainingRows = state.current_index.length - endRowIndex
  var rows = state.current_index.slice(startRowIndex, endRowIndex + 1)
  var topPadding = startRowIndex * rowHeight
  var bottomPadding = remainingRows * rowHeight
  var onScrollDebounced = debounce(onScroll, 25)

  // console.log({startRowIndex, endRowIndex, topPadding, bottomPadding})

  function onScroll (evt) {
    emit('scroll', evt.target.scrollTop)
  }

  function paddingRow (padding) {
    if (!padding) return ''

    return html`
      <tr style="height: ${padding}px">
        <td></td>
      </tr>
    `
  }

  function loadingSpinner () {
    if (!rows.length) {
      return html `
        <h2>loading items</h2>
      `
    }
  }

  function tableRow (item) {
    var _color = '#222'
    var sender = '----'

    var temp = 'test'+Math.floor(Math.random()*1000)

    var val = Math.round(Math.random()*100)

    setTimeout(function () {
  	var colors = ["#7cc1be","#7cc1be","#7cc1be","#7cc1be","#7cc1be"];
  	var chart = new window.Fancychart(200, 120, colors, 'white');
  	document.getElementById(temp).style.color = colors[4];
  	chart.circles("#"+temp, val, colors[4]);
    }, 100)

    return html`
    <tr>
      <li class="lh-copy pv3 ba bl-0 bt-0 br-0 b--dotted b--black-30">
        <article class="dt w-100 bb b--black-05 pb2 mt2" href="#0">
          <div class="dtc w2 w3-ns v-mid">
           <i class="fas fa-ghost" style="color: ${_color};"></i>
           <dl class="db dib-l w-auto-l lh-title mr6-l">
             <dd class="f6 fw4 ml0">[drone] 5 minutes ago</dd>
             <dd class="f2 f-subheadline-l fw6 ml0">IMG</dd>
           </dl>
          </div>
          <div class="dtc v-mid pl3">
          <dl class="db dib-l w-auto-l lh-title mr6-l">
            <dd class="f6 fw4 ml0">Confidence</dd>
            <dd class="f2 f-subheadline-l fw6 ml0">${val}%</dd>
          </dl>
          </div>
          <div class="dtc v-mid">

            <div id="${temp}" class="chart bar" data-value="68"></div>
          </div>
        </article>
      </li>
    </tr>
    `
  }

  return html`
    <body>
      ${nav(state, emit)}
      <br />
      <main class="w-100 cf helvetica dark-gray pa3 pa4-m pa5-l mw9 center">
        <ul class="list pl0 measure center" style="max-width: 95%!important; height: 500px;">
          <table class="table ${prefix}" onscroll=${onScrollDebounced} style="height: 500px;">
            <tbody>
              ${loadingSpinner()}
              ${paddingRow(topPadding)}
              ${rows.map(tableRow)}
              ${paddingRow(bottomPadding)}
            </tbody>
          </table>
        </ul>
      </main>
    </body>
  `
}
