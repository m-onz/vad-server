var watch = require('recursive-watch')
var hyperdb = require('hyperdb')
var k = 'dcf33f7d1596becc82d7c41639285f4cfdbfec9ec2b65d662c9302c776a3b642'
var db = hyperdb('./detections.db', k, { valueEncoding: 'json' })
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
    d.unshift({
      timestamp: new Date().toISOString(),
      path: p
    })
    db.put('/detections/'+now, d, function (e) {
      if (e) console.log (e)
      console.log('detection at ', now)
    })
  })
}, 5000)
