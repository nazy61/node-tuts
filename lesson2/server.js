const http = require('http');
const fs = require('fs');
const _ = require('lodash');

const server = http.createServer((req, res) => {
    //print some request values
    // console.log(req.url);
    // console.log(req.method);
    // console.log(req.headers.host);

    // lodash
    const num = _.random(0, 20);
    console.log(num);

    // set header content type
    res.setHeader('Content-Type', 'text/html');

    let path = './views/';
    switch(req.url) {
        case '/':
            path += 'index.html';
            res.statusCode = 200;
            break;
        case '/about':
            path += 'about.html';
            res.statusCode = 200;
            break;
        case '/about-me':
            res.statusCode = 301;
            res.setHeader('Location', '/about');
            res.end();
            break;
        default:
            path += '404.html';
            res.statusCode = 404;
            break;
    }

    // send back a response
    fs.readFile(path, (err, data) => {
        if(err) {
            console.log(err);

            // End Connection
            res.end();
        } else {
            //res.write(data);
            // End Connection
            // use this if one response is sent back
            res.end(data);
        }
    });
});

server.listen(3000, 'localhost', () => {
    console.log('Listening for request on port 3000');
});