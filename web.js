var express = require('express'),
    app = express.createServer();

app.use(express.logger());

app.get('/', function(req, res){
    res.send('Hello World');
});

app.listen();
ar port = process.env.PORT || 3000;
console.log('Express server started on port %s', port);
