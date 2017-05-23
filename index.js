var app = require('express')()
var http = require('http').Server(app)
var port = 3001
var io = require('socket.io')(http)

app.get('/', function(req, res){
  res.sendFile(__dirname + '/views/index.html')
})

io.on('connection', function(socket){
  socket.on('chat message',function(msg){
    io.emit('chat message', msg)
    console.log("mensaje: "+ msg)
  })
})

http.listen(port, function(){
  console.log('listening on *:' + port)
})
