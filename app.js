var express     = require('express'),
    bodyParser  = require('body-parser'),
    app         = express();

app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');

 var campgrounds = [ 
        {name: "Salmon Creek", image: "https://farm2.staticflickr.com/1274/4670974422_ec49d65ab2.jpg"},
        {name: "Granite Hill", image: "https://farm6.staticflickr.com/5328/8808095836_5e61be09a6.jpg"},
        {name: "Granite Hill", image: "https://farm6.staticflickr.com/5328/8808095836_5e61be09a6.jpg"},
        {name: "Granite Hill", image: "https://farm6.staticflickr.com/5328/8808095836_5e61be09a6.jpg"}
]

app.get('/', function(req, res) {
    res.render('landing');
});

app.get('/campgrounds', function(req, res) {
    res.render('campgrounds', {campgrounds: campgrounds});
});

app.post('/campgrounds', function(req, res) {
    // get data from form and add to campground array
    var name = req.body.name;
    var image = req.body.image;
    var newCampground = {name: name, image: image};
    campgrounds.push(newCampground);
    // redirect back to campgrounds page
    res.redirect('/campgrounds');
});

app.get('/campgrounds/new', function(req, res) {
    res.render('new');
});

// listen for server start
app.listen(process.env.PORT, process.env.IP, function() {
    console.log('YelpCamp has started');
})
