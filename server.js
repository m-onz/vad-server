
var fs = require('fs')
var http = require('http')
var formidable = require('formidable')
var WebSocketServer = require('ws').Server

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

var wss = new WebSocketServer({ server: server })

wss.on('connection', function (ws) {
  ws.send(JSON.stringify({
    log: `[activity] new websocket connection @ ${new Date().toISOString()}`
  }))
  ws.on('close', function () {});

  // ws.on('message', function (d) {
  //   console.log('>> ', d.toString())
  // })
  //
  // setInterval(function () {
  //   ws.send(JSON.stringify({hello: new Date().toISOString()}))
  // }, 4000)
});

var PORT = 3000
console.log('Running on port ', PORT)

server.listen(PORT)
