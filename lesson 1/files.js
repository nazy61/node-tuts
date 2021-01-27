const fs = require('fs');

// reading files
fs.readFile('./docs/blog1.txt', (err, data) => {
    if(err) {
        console.log(err);
    } else {
        console.log(data.toString());
    }
});

// writing files

fs.writeFile('./docs/blog1.txt', 'Hello Nazycodes', () => {
    console.log('file was written');
});

// writing files when file is not available

fs.writeFile('./docs/blog2.txt', 'Hello ECR Technologies', () => {
    console.log('file was written');
});

// directories

if(!fs.existsSync('./assets')){
    
    // create directory
    fs.mkdir('./assets', (err) => {
        if (err) {
            console.log(err);
        } 
        console.log('folder created');
    });

} else {
    // remove directory
    fs.rmdir('./assets', (err) => {
        if (err) {
            console.log(err);
        } 
        console.log('folder deleted');
    });
}


// deleting files 

if(fs.existsSync('./docs/deleteme.txt')) {
    fs.unlink('./docs/deleteme.txt', (err) => {
        if (err) {
            console.log(err);
        } 
        console.log('file deleted');
    });
}