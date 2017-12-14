var express     = require('express'),
    app         = express();

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.render('landing');
});

app.get('/campgrounds', function(req, res) {
    var campgrounds = [ 
        {name: "Salmon Creek", image: "https://farm2.staticflickr.com/1274/4670974422_ec49d65ab2.jpg"},
        {name: "Granite Hill", image: "https://farm6.staticflickr.com/5328/8808095836_5e61be09a6.jpg"},
        {name: "Mountain Camp", image: "https://farm5.staticflickr.com/4076/4819277877_109e312af2.jpg"}
    ]
    res.render('campgrounds', {campgrounds: campgrounds});
});

// listen for server start
app.listen(3000, function() {
    console.log('YelpCamp has started.');
});