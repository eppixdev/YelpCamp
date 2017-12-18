var express     = require('express'),
    bodyParser  = require('body-parser'),
    app         = express(),
    mongoose    = require('mongoose');

mongoose.connect("mongodb://localhost/yelpcamp");
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');

// SCHEMA SETUP
var campgroundSchema = new mongoose.Schema({
    name: String,
    image: String
});

var Campground = mongoose.model('Campground', campgroundSchema);

// Campground.create(
//     {
//         name: "Granite Hill",
//         image: "https://farm6.staticflickr.com/5328/8808095836_5e61be09a6.jpg"
//     }, function (err, campground) {
//         if(err) {
//             console.log(err);
//         } else {
//             console.log("Newly created campground");
//             console.log(campground);
//         }
//     });

// app.get('/', function(req, res) {
//     res.render('landing');
// });

app.get('/campgrounds', function(req, res) {
    // Get all campgrounds from DB
    Campground.find({}, function(err, allCampgrounds) {
       if (err) {
           console.log(err);
       } else {
           res.render("campgrounds", {campgrounds: allCampgrounds});
       }
    });
    // res.render('campgrounds', {campgrounds: campgrounds});
});

app.post('/campgrounds', function(req, res) {
    // get data from form and add to campground array
    var name = req.body.name;
    var image = req.body.image;
    var newCampground = {name: name, image: image};
    // Create a new campground and save to DB
    Campground.create(newCampground, function(err, newlyCreated){
        if (err) {
            console.log(err);
        } else {
            res.redirect('/campgrounds');
        }
    })
});

app.get('/campgrounds/new', function(req, res) {
    res.render('new');
});

// listen for server start
app.listen(process.env.PORT, process.env.IP, function() {
    console.log('YelpCamp has started');
})
