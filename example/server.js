var path = require('path');
var server = require('strata');

var root = path.resolve('../');

server.use(server.commonLogger);
server.use(server.file, root);
server.run();
