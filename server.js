
var fs = require('fs')
var http = require('http')
var formidable = require('formidable')
var WebSocketServer = require('ws').Server


var d = new Date()
var now = d.getFullYear()+':'+d.getMonth()

function render_index (res) {
  res.setHeader('Content-Type', 'text/html')
  fs.createReadStream(`${__dirname}/index.html`).pipe(res)
}

function render_admin (res) {
  res.setHeader('Content-Type', 'text/html')
  fs.createReadStream(`${__dirname}/admin.html`).pipe(res)
}

function render_css (res) {
  res.setHeader('Content-Type', 'text/css')
  fs.createReadStream(`${__dirname}/tachyons.css`).pipe(res)
}

function render_js (res) {
  res.setHeader('Content-Type', 'application/javascript')
  fs.createReadStream(`${__dirname}/bundle.js`).pipe(res)
}

function render_d3 (res) {
  res.setHeader('Content-Type', 'application/javascript')
  fs.createReadStream(`${__dirname}/assets/d3.min.js`).pipe(res)
}

function render_fancycharts (res) {
  res.setHeader('Content-Type', 'application/javascript')
  fs.createReadStream(`${__dirname}/assets/fancycharts.js`).pipe(res)
}

var server = http.createServer(function (req, res) {

  switch (req.method.toLowerCase()) {
    case 'get':
      switch (req.url) {
        case '/':
          render_index (res)
        break;
        case '/tachyons.css':
          render_css (res)
        break;
        case '/index.html':
          render_index (res)
        break;
        case '/bundle.js':
          render_js (res)
        break;
        case '/assets/d3.min.js':
          render_d3 (res)
        break;
        case '/assets/fancycharts.js':
          render_fancycharts (res)
        break;
        case '/fontawesome/css/all.css':
          render_fontawesome (res)
        break;
        default:
          res.end()
      }
    break;
    case 'post':
      var form = new formidable.IncomingForm();
      form.parse(req, function(err, fields, files) {
        if (fields['email-address'] === 'test@test.com' &&
            fields['password'] === 'test') render_admin (res)
          else render_index (res)
      });
    break;
    default:
      res.end()
  }
})

var EV = require('events').EventEmitter
var ev = new EV
var wss = new WebSocketServer({ server: server })



ev.on('data', console.log)

var watch = require('recursive-watch')
var hyperdb = require('hyperdb')

var db = hyperdb('./detections.db', { valueEncoding: 'json' })
console.log('monitoring detections')
//watch('/uploads', function (p) {
var d = new Date()
var now = d.getFullYear()+':'+d.getMonth()

setInterval(function () {
  var p = '!'+Math.random()
  console.log(db.key.toString('hex'))
  db.get('/detections/'+now, function (e, v) {
    var d = []
    if (e) return
    if (v && v[0] && v[0].hasOwnProperty('value')) d = v[0].value
    var i = {
      timestamp: new Date().toISOString(),
      path: p
    }
    ev.emit('send', JSON.stringify(i))
    d.unshift(i)
    db.put('/detections/'+now, d, function (e) {
      if (e) console.log (e)
      console.log('detection at ', now)
    })
  })
}, 5000)

wss.on('connection', function (ws) {
  ws.send(JSON.stringify({
    log: `[activity] new websocket connection @ ${new Date().toISOString()}`
  }))
  ev.on('send', function (data) {
    console.log('TEST ', data)
    ws.send(data)
  })
  ws.on('close', function () {});
  ws.on('message', function (d) {
    console.log('>> ', d.toString())
    ev.emit('data', d.toString())
  })

  db.get('/detections/'+now, function (e, v) {
    if (!e && v && v[0]) {
      v[0].value.forEach(function (i) {
        ws.send(JSON.stringify(i))
      })
    }
  })
});

var PORT = 3000
console.log('Running on port ', PORT)

server.listen(PORT)
