var connect = require('/usr/local/lib/node_modules/connect'),
        serveStatic = require('/usr/local/lib/node_modules/serve-static');

var app = connect();

app.use(serveStatic("../angular_tutorial"));
app.listen(5000);


