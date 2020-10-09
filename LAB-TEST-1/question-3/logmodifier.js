const fs = require('fs');
const path = require('path');

const dir = require('logs');

fs.readdir(dir, (err, files) => {
    if (err) throw err;
    
    for(const file of files){
        fs.unlink(path.join(dir, files), err => {
            if (err) throw err;
        });
    }
});