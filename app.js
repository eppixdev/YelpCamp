var express     = require('express'),
    app         = express();

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.render('landing');
});

// listen for server start
app.listen(3000, function() {
    console.log('YelpCamp has started.');
});