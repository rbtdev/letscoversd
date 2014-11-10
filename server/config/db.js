var mongoose = require('mongoose');
var util = require('util');
var timeout = '1000000'; 
var username = 'thuleenro';
var pw = 'Rip1tide';
var server = 'ds027758';
var port = '27758';
var dbname = 'letscoversd';
var uri = util.format('mongodb://%s:%s@%s.mongolab.com:%s/%s?connectTimeoutMS=%s', 
				username, pw, server, port, dbname, timeout);


var connect = function () {
  var options = { server: { socketOptions: { keepAlive: 1 } } }
  mongoose.connect(uri, options)
}

// Error handler
mongoose.connection.on('error', function (err) {
  console.log(err)
})

// Reconnect when closed
mongoose.connection.on('disconnected', function () {
	var timeout = 10*1000;
    console.log("Re-connecting to " + uri + " in " + timeout + " seconds.")
    setTimeout(connect, timeout);
})

exports.connect = connect;