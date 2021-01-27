const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blog_routes');

const app = express();

// connect to mongodb
const dbURI = 'mongodb+srv://nazy61:sponsor97@vidly0.0jcqp.mongodb.net/nodetuts?retryWrites=true&w=majority';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
        .then((result) => {
            console.log('Connected to database');
            // listen for requests
            app.listen(3000);
        })
        .catch((err) => console.log(err));

//register view engine
app.set('view engine', 'ejs');
// specifying the target view folder. Default: views
//app.set('views', 'myviews');
 
// static files middleware
app.use(express.static('public'));

// encodes url forms
app.use(express.urlencoded({ extended: true }));

// morgan logger middleware
app.use(morgan('dev'));

// mongoose and mongo sandbox routes
// app.get('/add-blog', (req, res) => {
//     const blog = new Blog({
//         title: 'New Blog 2',
//         snippet: 'About my new blog 2',
//         body: 'More about my new blog 2',
//     });

//     blog.save()
//         .then((result) => {
//             res.send(result).end();
//         })
//         .catch((err) => {
//             console.log(err);
//         });
// });

// app.get('/all-blogs', (req, res) => {
//     Blog.find().then((result) => {
//         res.send(result).end();
//     }).catch((err) => {
//         console.log(err);
//     })
// });

// app.get('/single-blog', (req, res) => {
//     Blog.findById('60114a2120cec70646e0798e').then((result) => {
//         res.send(result).end();
//     }).catch((err) => {
//         console.log(err);
//     })
// });

// routes
app.get('/', function (req, res) {
    // res.send('<p>Home Page</p>');
    // res.sendFile('./views/index.html', { root: __dirname });
    res.redirect('/blogs');
});

app.get('/about', function (req, res) {
    // res.send('<p>About Page</p>');
    // res.sendFile('./views/about.html', { root: __dirname });
    res.render('about', { title: 'About' }).end();
});

// redirects
app.get('/about-me', (req, res) => {
    res.redirect('/about');
});

// blog routes
app.use('/blogs', blogRoutes);

// 404 page
app.use((req, res) => {
    //res.status(404).sendFile('./views/404.html', { root: __dirname });
    res.status(404).render('404', { title: '404' });
});